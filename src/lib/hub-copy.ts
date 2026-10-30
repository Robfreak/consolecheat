export type ToolId = "avatar" | "titles" | "codes" | "saves" | "pricing";
export type ToolStatus = "live" | "soon";

export const AVATAR_URL = "https://avatar.consolecheat.com/";
export const TITLE_URL = "https://title-id-finder.consolecheat.com/";
export const CODES_URL = "https://codes.consolecheat.com/";
export const MAIL_DOMAIN = "consolecheat.com";

export const tools: { id: ToolId; status: ToolStatus }[] = [
  { id: "avatar", status: "live" },
  { id: "titles", status: "live" },
  { id: "codes", status: "live" },
  { id: "saves", status: "soon" },
  { id: "pricing", status: "soon" },
];

const LOCAL = /^[a-z0-9._+-]{1,64}$/;

export function normalizeMailbox(raw: string): string | null {
  const trimmed = raw.trim().toLowerCase();
  if (!trimmed) return null;
  const full = trimmed.includes("@") ? trimmed : `${trimmed}@${MAIL_DOMAIN}`;
  const at = full.lastIndexOf("@");
  if (at <= 0) return null;
  const local = full.slice(0, at);
  const domain = full.slice(at + 1);
  if (domain !== MAIL_DOMAIN || !LOCAL.test(local)) return null;
  return `${local}@${domain}`;
}
