import Link from "next/link";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import type { Locale } from "@/lib/i18n";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Header({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const links = [
    { href: "#servicios", label: dict.nav.services },
    { href: "#proceso", label: dict.nav.process },
    { href: "#equipo", label: dict.nav.team },
    { href: "#faq", label: dict.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="Landa Software Solutions">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-8 lg:flex">
          <a
            href="#contacto"
            className="rounded-md bg-brand px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            {dict.nav.contact}
          </a>
          <LanguageSwitch lang={lang} label={dict.nav.language} />
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <LanguageSwitch lang={lang} label={dict.nav.language} />
          <MobileMenu
            links={[...links, { href: "#contacto", label: dict.nav.contact }]}
            label={dict.nav.menu}
          />
        </div>
      </div>
    </header>
  );
}

function LanguageSwitch({ lang, label }: { lang: Locale; label: string }) {
  const option = (code: Locale) => (
    <Link
      href={`/${code}`}
      hrefLang={code}
      aria-current={lang === code ? "true" : undefined}
      className={
        lang === code
          ? "text-brand-light"
          : "text-white/70 transition hover:text-white"
      }
    >
      {code.toUpperCase()}
    </Link>
  );

  return (
    <div aria-label={label} className="flex items-center gap-1.5 text-sm font-medium">
      {option("es")}
      <span className="text-white/40">/</span>
      {option("en")}
    </div>
  );
}
