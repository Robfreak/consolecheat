export type MailHeader = {
  uid: number;
  from: string;
  subject: string;
  date: string;
};

export type MailFailure = "domain" | "auth" | "down";

export type MailListResult =
  | { ok: true; messages: MailHeader[] }
  | { ok: false; error: MailFailure };

export type MailReadResult =
  | { ok: true; from: string; subject: string; date: string; text: string }
  | { ok: false; error: MailFailure };

async function postMail(body: { action: "list" | "read"; email: string; password: string; uid?: number }) {
  const response = await fetch("/api/mail", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok) return { ok: false as const, error: "down" as const };
  return response.json();
}

export function listInbox(email: string, password: string): Promise<MailListResult> {
  return postMail({ action: "list", email, password });
}

export function readMail(email: string, password: string, uid: number): Promise<MailReadResult> {
  return postMail({ action: "read", email, password, uid });
}
