import { listInboxImap, readMessageImap } from "@/lib/mail.server";

export async function handleMailRequest(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return Response.json({ ok: false, error: "down" }, { status: 405 });
  }
  let body: { action?: unknown; email?: unknown; password?: unknown; uid?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return Response.json({ ok: false, error: "down" }, { status: 400 });
  }
  const email = String(body.email ?? "").slice(0, 200);
  const password = String(body.password ?? "").slice(0, 500);
  if (body.action === "read") {
    const result = await readMessageImap(email, password, Number(body.uid));
    return Response.json(result);
  }
  return Response.json(await listInboxImap(email, password));
}
