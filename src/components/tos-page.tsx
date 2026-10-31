import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { copy, detectLang, isLang, languageOptions, RTL, type Lang } from "@/lib/messages";
import { tosDocs } from "@/lib/tos-copy";

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

function Mark() {
  return (
    <svg viewBox="0 0 32 32" className="size-9 shrink-0" aria-hidden="true">
      <rect width="32" height="32" rx="8" className="fill-raised" />
      <circle cx="16" cy="12" r="5" className="fill-steel" />
      <path d="M7 27c1.4-6 4.5-8.4 9-8.4S23.6 21 25 27H7z" className="fill-fg" />
    </svg>
  );
}

export function TosPage() {
  const [lang, setLang] = useState<Lang>("de");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("consolecheat-lang");
    const next = isLang(stored) ? stored : detectLang(navigator.languages);
    setLang(next);
    applyLang(next);
    const current = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    setTheme(current);
  }, []);

  const t = copy[lang];
  const tos = tosDocs[lang];

  useEffect(() => {
    document.title = `${tos.title} · consolecheat`;
  }, [tos.title]);

  function chooseLang(next: Lang) {
    setLang(next);
    applyLang(next);
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-line bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <Mark />
            <span className="truncate font-display text-lg font-semibold tracking-tight">{t.brand}</span>
          </a>
          <div className="flex items-center gap-2">
            <label className="sr-only" htmlFor="tos-lang">
              {t.language}
            </label>
            <select
              id="tos-lang"
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

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="eyebrow text-xs font-medium uppercase text-steel">{tos.kicker}</p>
        <h1 className="display-title mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{tos.title}</h1>
        <a href="/" className="mt-4 inline-block text-sm text-steel underline-offset-4 hover:underline">
          {tos.back}
        </a>
        <div className="mt-8 flex flex-col gap-8">
          {tos.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl font-semibold tracking-tight">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm leading-relaxed text-subtle sm:px-6">
          <p className="text-fg">{t.brand}</p>
          <p className="text-fg">{t.freeClaim}</p>
          <p>{t.privacyClaim}</p>
          <p>{t.footerNote}</p>
          <p>
            <a href="/tos" className="text-steel underline-offset-4 hover:underline">
              {t.tosLink}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
