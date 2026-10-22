import { createServerFn } from "@tanstack/react-start";

export type MailHeader = {
  uid: number;
  from: string;
  subject: string;
  date: string;
};

export type MailFailure = "domain" | "auth" | "down";

type Creds = { email: string; password: string };

function creds(input: Creds): Creds {
  return {
    email: String(input?.email ?? "").slice(0, 200),
    password: String(input?.password ?? "").slice(0, 500),
  };
}

export const listInbox = createServerFn({ method: "POST" })
  .validator(creds)
  .handler(async ({ data }) => {
    const { listInboxImap } = await import("./mail.server");
    return listInboxImap(data.email, data.password);
  });

export const readMail = createServerFn({ method: "POST" })
  .validator((input: Creds & { uid: number }) => ({
    ...creds(input),
    uid: Number(input?.uid),
  }))
  .handler(async ({ data }) => {
    const { readMessageImap } = await import("./mail.server");
    return readMessageImap(data.email, data.password, data.uid);
  });
