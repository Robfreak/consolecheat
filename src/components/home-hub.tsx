import { useEffect, useState } from "react";
import { ArrowUpRight, BadgePercent, Mail, Moon, Save, Search, Sun, Ticket, UserRound } from "lucide-react";
import { AVATAR_URL, CODES_URL, normalizeMailbox, TITLE_URL, tools, type ToolId, type ToolStatus } from "@/lib/hub-copy";
import { listInbox, readMail, type MailHeader } from "@/lib/mail";
import { copy, detectLang, isLang, languageOptions, RTL, type Lang } from "@/lib/messages";

type Filter = "all" | "live" | "soon";
type Session = { email: string; password: string };

const toolIcon = {
  avatar: UserRound,
  titles: Search,
  codes: Ticket,
  saves: Save,
  pricing: BadgePercent,
} as const;

function toolName(lang: Lang, id: ToolId) {
  const t = copy[lang];
  if (id === "avatar") return t.avatarName;
  if (id === "titles") return t.titlesName;
  if (id === "codes") return t.codesName;
  if (id === "pricing") return t.pricingName;
  return t.savesName;
}

function toolBody(lang: Lang, id: ToolId) {
  const t = copy[lang];
  if (id === "avatar") return t.avatarBody;
  if (id === "titles") return t.titlesBody;
  if (id === "codes") return t.codesBody;
  if (id === "pricing") return t.pricingBody;
  return t.savesBody;
}

function toolUrl(id: ToolId) {
  if (id === "titles") return TITLE_URL;
  if (id === "codes") return CODES_URL;
  return AVATAR_URL;
}

function openLabel(lang: Lang, id: ToolId) {
  const t = copy[lang];
  if (id === "titles") return t.titlesOpen;
  if (id === "codes") return t.codesOpen;
  return t.openTool;
}

function applyLang(next: Lang) {
  document.documentElement.lang = next;
  document.documentElement.dir = RTL.has(next) ? "rtl" : "ltr";
  localStorage.setItem("consolecheat-lang", next);
}

function applyTheme(next: "light" | "dark") {
  document.documentElement.dataset.theme = next;
  localStorage.setItem("consolecheat-theme", next);
  const meta = document.querySelector('meta[name="theme-color"]');
  meta?.setAttribute("content", next === "light" ? "#f4f1eb" : "#07090e");
}

export function HomeHub() {
  const [lang, setLang] = useState<Lang>("de");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<ToolId>("avatar");
  const [session, setSession] = useState<Session | null>(null);
  const [messages, setMessages] = useState<MailHeader[]>([]);
  const [mailError, setMailError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [openUid, setOpenUid] = useState<number | null>(null);
  const [body, setBody] = useState("");
  const [bodyBusy, setBodyBusy] = useState(false);
  const [mailOpen, setMailOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("consolecheat-lang");
    const next = isLang(stored) ? stored : detectLang(navigator.languages);
    setLang(next);
    applyLang(next);
    const current = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    setTheme(current);
  }, []);

  useEffect(() => {
    if (!mailOpen) return;
    const node = document.getElementById(session ? "mail-dialog" : "mail-email");
    node?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMailOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [mailOpen, session]);

  const t = copy[lang];
  const visible = tools.filter((tool) => filter === "all" || tool.status === filter);
  const active = visible.find((tool) => tool.id === selected) ?? visible[0] ?? null;

  function chooseLang(next: Lang) {
    setLang(next);
    applyLang(next);
  }

  async function signIn(email: string, password: string) {
    setBusy(true);
    setMailError(null);
    try {
      const result = await listInbox(email, password);
      if (!result.ok) {
        setMailError(result.error === "auth" ? t.mailBad : result.error === "domain" ? t.mailInvalid : t.mailDown);
        return;
      }
      setSession({ email, password });
      setMessages(result.messages);
      setOpenUid(null);
      setBody("");
    } catch {
      setMailError(t.mailDown);
    } finally {
      setBusy(false);
    }
  }

  async function openMessage(uid: number) {
    if (!session) return;
    setOpenUid(uid);
    setBody("");
    setBodyBusy(true);
    try {
      const result = await readMail(session.email, session.password, uid);
      if (!result.ok) {
        setMailError(result.error === "auth" ? t.mailBad : t.mailDown);
        return;
      }
      setBody(result.text);
    } catch {
      setMailError(t.mailDown);
    } finally {
      setBodyBusy(false);
    }
  }

  function signOut() {
    setSession(null);
    setMessages([]);
    setOpenUid(null);
    setBody("");
    setMailError(null);
  }

  return (
    <div className="min-h-screen">
      {mailOpen ? (
        <div
          className="fixed inset-0 z-40 flex items-start justify-center overflow-y-auto bg-black/55 px-4 py-16 backdrop-blur-sm sm:py-20"
          onMouseDown={() => setMailOpen(false)}
        >
          <div
            id="mail-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={t.mailKicker}
            tabIndex={-1}
            onMouseDown={(event) => event.stopPropagation()}
            className="panel w-full max-w-xl rounded-xl outline-none"
          >
            <MailBar
              lang={lang}
              error={mailError}
              busy={busy}
              session={session}
              messages={messages}
              openUid={openUid}
              body={body}
              bodyBusy={bodyBusy}
              onSignIn={signIn}
              onSignOut={signOut}
              onOpen={openMessage}
              onClose={() => {
                setOpenUid(null);
                setBody("");
              }}
              onDismiss={() => setMailOpen(false)}
            />
          </div>
        </div>
      ) : null}
      <header className="sticky top-0 z-30 border-b border-line bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#tools" className="flex min-w-0 items-center gap-3">
            <Mark />
            <span className="truncate font-display text-lg font-semibold tracking-tight">{t.brand}</span>
          </a>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMailOpen(true)}
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-line bg-surface px-3 text-sm font-medium text-fg"
            >
              <Mail className="size-4 text-steel" />
              {t.mailKicker}
            </button>
            <label className="sr-only" htmlFor="lang">
              {t.language}
            </label>
            <select
              id="lang"
              value={lang}
              onChange={(event) => {
                if (isLang(event.target.value)) chooseLang(event.target.value);
              }}
              className="h-11 w-28 rounded-lg border border-line bg-surface px-2 text-sm text-fg sm:w-36"
            >
              {languageOptions.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => {
                const next = theme === "dark" ? "light" : "dark";
                setTheme(next);
                applyTheme(next);
              }}
              aria-label={theme === "dark" ? t.themeLight : t.themeDark}
              className="inline-flex size-11 items-center justify-center rounded-lg border border-line bg-surface text-fg"
            >
              {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="eyebrow text-xs font-medium uppercase text-steel">{t.eyebrow}</p>
        <h1 className="display-title mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-6xl">
          {t.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{t.lede}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <p className="panel rounded-xl px-4 py-4 text-base font-medium leading-relaxed text-fg">{t.freeClaim}</p>
          <p className="panel rounded-xl px-4 py-4 text-base font-medium leading-relaxed text-fg">{t.privacyClaim}</p>
        </div>
        <p className="mt-4 text-sm text-subtle">{t.unofficial}</p>

        <section id="tools" className="mt-10 scroll-mt-28">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-2xl font-semibold tracking-tight">{t.toolsHeading}</h2>
            <div className="flex flex-wrap gap-2" role="group" aria-label={t.toolsHeading}>
              {(
                [
                  ["all", t.filterAll],
                  ["live", t.filterLive],
                  ["soon", t.filterSoon],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  aria-pressed={filter === id}
                  onClick={() => setFilter(id)}
                  className={
                    "h-11 rounded-lg border px-4 text-sm font-medium " +
                    (filter === id
                      ? "border-accent bg-accent text-accent-fg"
                      : "border-line bg-surface text-fg")
                  }
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {active ? (
            <ToolDetail lang={lang} id={active.id} status={active.status} />
          ) : (
            <p className="panel mt-4 rounded-xl px-5 py-8 text-muted">{t.empty}</p>
          )}

          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((tool) => {
              const Icon = toolIcon[tool.id];
              const on = active?.id === tool.id;
              return (
                <li key={tool.id}>
                  <button
                    type="button"
                    onClick={() => setSelected(tool.id)}
                    aria-pressed={on}
                    className={
                      "panel flex h-full w-full flex-col items-start gap-3 rounded-xl p-4 text-left " +
                      (on ? "mark-selected" : "")
                    }
                  >
                    <span className="flex w-full items-center justify-between gap-3">
                      <span className="inline-flex size-11 items-center justify-center rounded-lg bg-raised text-steel">
                        <Icon className="size-5" />
                      </span>
                      <StatusPill status={tool.status} label={tool.status === "live" ? t.live : t.soon} />
                    </span>
                    <span className="font-display text-lg font-semibold tracking-tight">{toolName(lang, tool.id)}</span>
                    <span className="text-sm leading-snug text-muted">{toolBody(lang, tool.id)}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-sm text-subtle">{t.moreSoon}</p>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm leading-relaxed text-subtle sm:px-6">
          <p className="text-fg">{t.brand}</p>
          <p className="text-fg">{t.freeClaim}</p>
          <p>{t.privacyClaim}</p>
          <p>{t.footerNote}</p>
        </div>
      </footer>
    </div>
  );
}

function Mark() {
  return (
    <svg viewBox="0 0 32 32" className="size-9 shrink-0" aria-hidden="true">
      <rect width="32" height="32" rx="8" className="fill-raised" />
      <circle cx="16" cy="12" r="5" className="fill-steel" />
      <path d="M7 27c1.4-6 4.5-8.4 9-8.4S23.6 21 25 27H7z" className="fill-fg" />
    </svg>
  );
}

function StatusPill({ status, label }: { status: ToolStatus; label: string }) {
  return (
    <span
      className={
        "rounded-md px-2 py-1 text-xs font-medium " +
        (status === "live" ? "bg-raised text-ok" : "bg-raised text-warn")
      }
    >
      {label}
    </span>
  );
}

function ToolDetail({ lang, id, status }: { lang: Lang; id: ToolId; status: ToolStatus }) {
  const t = copy[lang];
  const Icon = toolIcon[id];
  return (
    <article className="panel mt-4 rounded-xl p-5 sm:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-11 items-center justify-center rounded-lg bg-raised text-steel">
              <Icon className="size-5" />
            </span>
            <StatusPill status={status} label={status === "live" ? t.live : t.soon} />
          </div>
          <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{toolName(lang, id)}</h3>
          <p className="mt-2 leading-relaxed text-muted">{toolBody(lang, id)}</p>
          {status === "live" ? (
            <a
              href={toolUrl(id)}
              className="mt-5 inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-4 font-medium text-accent-fg"
            >
              {openLabel(lang, id)}
              <ArrowUpRight className="size-4" />
            </a>
          ) : (
            <p className="mt-5 text-sm text-subtle">
              {t.notYet}{" "}
              <a href={AVATAR_URL} className="text-steel underline-offset-4 hover:underline">
                {t.useAvatar}
              </a>
            </p>
          )}
        </div>
        {id === "avatar" ? (
          <ul className="grid w-full gap-2 sm:grid-cols-3 lg:max-w-md lg:grid-cols-1">
            {[t.regions, t.freeRun, t.priceFirst].map((item) => (
              <li key={item} className="rounded-lg bg-raised px-3 py-3 text-sm leading-snug text-fg">
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

function MailBar({
  lang,
  error,
  busy,
  session,
  messages,
  openUid,
  body,
  bodyBusy,
  onSignIn,
  onSignOut,
  onOpen,
  onClose,
  onDismiss,
}: {
  lang: Lang;
  error: string | null;
  busy: boolean;
  session: Session | null;
  messages: MailHeader[];
  openUid: number | null;
  body: string;
  bodyBusy: boolean;
  onSignIn: (email: string, password: string) => void;
  onSignOut: () => void;
  onOpen: (uid: number) => void;
  onClose: () => void;
  onDismiss: () => void;
}) {
  const t = copy[lang];
  const [localError, setLocalError] = useState<string | null>(null);
  const shown = localError ?? error;

  return (
    <div className="flex max-h-[min(40rem,calc(100vh-8rem))] flex-col gap-3 overflow-auto px-4 py-4 sm:px-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="eyebrow text-xs font-medium uppercase text-subtle">
          {t.mailKicker}
          <span className="text-line"> · </span>
          <span className="text-steel">Purelymail</span>
        </p>
        <div className="flex items-center gap-1">
          {session ? (
            <button type="button" onClick={onSignOut} className="h-11 px-2 text-sm text-muted">
              {t.logout}
            </button>
          ) : null}
          <button type="button" onClick={onDismiss} className="h-11 rounded-lg px-3 text-sm text-muted">
            {t.close}
          </button>
        </div>
      </div>
      <p className="text-sm font-medium leading-relaxed text-fg">{t.freeClaim}</p>
      <p className="text-sm leading-relaxed text-muted">{t.privacyClaim}</p>
        {session ? (
          <p className="text-sm text-fg">{session.email}</p>
        ) : (
          <form
            className="flex flex-col gap-2 sm:flex-row"
            noValidate
            onSubmit={(event) => {
              event.preventDefault();
              const form = event.currentTarget;
              const address = form.elements.namedItem("email");
              const password = form.elements.namedItem("password");
              const emailValue = address instanceof HTMLInputElement ? address.value : "";
              const passValue = password instanceof HTMLInputElement ? password.value : "";
              const mailbox = normalizeMailbox(emailValue);
              if (!mailbox) {
                setLocalError(t.mailInvalid);
                return;
              }
              if (!passValue) return;
              if (address instanceof HTMLInputElement) address.value = mailbox;
              setLocalError(null);
              onSignIn(mailbox, passValue);
            }}
          >
            <label className="sr-only" htmlFor="mail-email">
              {t.mailLabel}
            </label>
            <input
              id="mail-email"
              name="email"
              type="email"
              autoComplete="username"
              inputMode="email"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              required
              placeholder={t.mailPlaceholder}
              onChange={() => setLocalError(null)}
              className="h-11 min-w-0 flex-1 rounded-lg border border-line bg-bg px-3 text-fg outline-none placeholder:text-subtle"
            />
            <label className="sr-only" htmlFor="mail-pass">
              {t.passLabel}
            </label>
            <input
              id="mail-pass"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder={t.passPlaceholder}
              className="h-11 min-w-0 flex-1 rounded-lg border border-line bg-bg px-3 text-fg outline-none placeholder:text-subtle"
            />
            <button
              type="submit"
              disabled={busy}
              className="h-11 shrink-0 rounded-lg bg-accent px-4 font-medium text-accent-fg disabled:opacity-60 sm:min-w-32"
            >
              {busy ? t.signingIn : t.signIn}
            </button>
          </form>
        )}
        <p className={shown ? "text-sm text-bad" : "text-sm text-subtle"} role={shown ? "alert" : undefined}>
          {shown ?? t.mailHint}
        </p>
        {session ? (
          <section aria-label={t.inbox} className="flex flex-col gap-2">
            <h2 className="font-display text-lg font-semibold tracking-tight">{t.inbox}</h2>
            {messages.length === 0 ? <p className="text-sm text-muted">{t.emptyInbox}</p> : null}
            <ul className="flex max-h-80 flex-col gap-2 overflow-auto">
              {messages.map((message) => {
                const open = openUid === message.uid;
                const when = message.date
                  ? new Intl.DateTimeFormat(lang, { dateStyle: "medium", timeStyle: "short" }).format(new Date(message.date))
                  : "";
                return (
                  <li key={message.uid} className="rounded-lg bg-raised">
                    <button type="button" onClick={() => (open ? onClose() : onOpen(message.uid))} className="flex w-full flex-col gap-1 px-3 py-3 text-left">
                      <span className="flex items-baseline justify-between gap-3">
                        <span className="truncate font-medium">{message.from || "—"}</span>
                        <span className="shrink-0 text-xs text-subtle">{when}</span>
                      </span>
                      <span className="truncate text-sm text-muted">{message.subject || "—"}</span>
                    </button>
                    {open ? (
                      <div className="border-t border-line px-3 py-3">
                        {bodyBusy ? <p className="text-sm text-muted">…</p> : <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-fg">{body}</pre>}
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}
    </div>
  );
}
