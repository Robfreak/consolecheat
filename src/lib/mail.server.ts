import { ImapFlow } from "imapflow";
import { simpleParser } from "mailparser";
import { normalizeMailbox } from "@/lib/hub-copy";

export type MailHeader = {
  uid: number;
  from: string;
  subject: string;
  date: string;
};

export type MailListResult =
  | { ok: true; messages: MailHeader[] }
  | { ok: false; error: "domain" | "auth" | "down" };

export type MailReadResult =
  | { ok: true; from: string; subject: string; date: string; text: string; html: string }
  | { ok: false; error: "domain" | "auth" | "down" };

function clientFor(email: string, password: string) {
  return new ImapFlow({
    host: "imap.purelymail.com",
    port: 993,
    secure: true,
    auth: { user: email, pass: password },
    logger: false,
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
  });
}

function asHtml(value: string) {
  return value.replace(/\u0000/g, "").slice(0, 1_500_000);
}

function inlineCid(html: string, attachments: { cid?: string; contentType?: string; content: Buffer }[]) {
  let out = html;
  for (const file of attachments) {
    if (!file.cid || !file.content || file.content.length > 800_000) continue;
    const type = file.contentType || "application/octet-stream";
    if (!type.startsWith("image/")) continue;
    const data = `data:${type};base64,${file.content.toString("base64")}`;
    const cid = file.cid.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    out = out.replace(new RegExp(`cid:${cid}`, "gi"), data);
  }
  return out;
}

function prepareHtml(html: string) {
  return asHtml(html)
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, "")
    .replace(/<object[\s\S]*?<\/object>/gi, "")
    .replace(/<embed\b[^>]*>/gi, "")
    .replace(/\son\w+\s*=\s*(['"])[\s\S]*?\1/gi, "")
    .replace(/\son\w+\s*=\s*[^\s>]+/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/<a\b([^>]*)>/gi, (_match, attrs: string) => {
      const cleaned = attrs
        .replace(/\starget\s*=\s*(['"])[\s\S]*?\1/gi, "")
        .replace(/\srel\s*=\s*(['"])[\s\S]*?\1/gi, "");
      return `<a${cleaned} target="_blank" rel="noopener noreferrer">`;
    });
}

function asText(value: string) {
  return value.replace(/\u0000/g, "").slice(0, 20000);
}

function htmlToText(html: string) {
  return asText(
    html
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/p>/gi, "\n")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/</g, "<")
      .replace(/>/g, ">")
      .replace(/"/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&/g, "&")
      .replace(/[ \t]+\n/g, "\n")
      .replace(/[ \t]{2,}/g, " ")
      .trim(),
  );
}

async function withInbox<T>(emailRaw: string, password: string, run: (client: ImapFlow) => Promise<T>): Promise<T | MailListResult> {
  const email = normalizeMailbox(emailRaw);
  if (!email || !password || password.length > 500) return { ok: false, error: "domain" };
  const client = clientFor(email, password);
  let open = false;
  try {
    await client.connect();
    open = true;
    const lock = await client.getMailboxLock("INBOX");
    try {
      return await run(client);
    } finally {
      lock.release();
    }
  } catch (err) {
    const auth = Boolean((err as { authenticationFailed?: boolean }).authenticationFailed);
    return { ok: false, error: auth ? "auth" : "down" };
  } finally {
    if (open) {
      try {
        await client.logout();
      } catch {
        client.close();
      }
    }
  }
}

export async function listInboxImap(email: string, password: string): Promise<MailListResult> {
  const result = await withInbox(email, password, async (client) => {
    const box = client.mailbox;
    const total = box && typeof box === "object" ? (box.exists ?? 0) : 0;
    if (!total) return { ok: true as const, messages: [] };
    const start = Math.max(1, total - 24);
    const messages: MailHeader[] = [];
    for await (const msg of client.fetch(`${start}:*`, { uid: true, envelope: true })) {
      const from = msg.envelope?.from?.[0];
      messages.push({
        uid: msg.uid,
        from: from?.name || from?.address || "",
        subject: msg.envelope?.subject || "",
        date: msg.envelope?.date ? new Date(msg.envelope.date).toISOString() : "",
      });
    }
    messages.reverse();
    return { ok: true as const, messages };
  });
  return result;
}

export async function readMessageImap(email: string, password: string, uid: number): Promise<MailReadResult> {
  if (!Number.isInteger(uid) || uid < 1) return { ok: false, error: "down" };
  const result = await withInbox(email, password, async (client) => {
    const msg = await client.fetchOne(String(uid), { envelope: true, source: true }, { uid: true });
    if (!msg || !msg.source) return { ok: false as const, error: "down" as const };
    const parsed = await simpleParser(msg.source);
    const fromAddr = parsed.from?.value?.[0];
    const rawHtml = typeof parsed.html === "string" ? parsed.html : "";
    const html = rawHtml ? prepareHtml(inlineCid(rawHtml, parsed.attachments ?? [])) : "";
    const text = asText(parsed.text?.trim() || (html ? htmlToText(html) : ""));
    return {
      ok: true as const,
      from: fromAddr?.name || fromAddr?.address || "",
      subject: parsed.subject || "",
      date: parsed.date ? parsed.date.toISOString() : "",
      text,
      html,
    };
  });
  if ("messages" in result) return { ok: false, error: "down" };
  return result;
}
