import type { Dictionary } from "@/app/[lang]/dictionaries";
import { EMAIL, LINKEDIN_URL } from "@/lib/site";
import { LinkedInIcon, MailIcon } from "./Icons";
import { Logo } from "./Logo";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="bg-navy py-12 text-sm text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:items-center">
        <Logo />
        <div className="space-y-1">
          <p>{dict.footer.tagline}</p>
          <p>{dict.footer.location}</p>
        </div>
        <div className="space-y-2">
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 hover:text-white">
            <MailIcon className="size-4" />
            {EMAIL}
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 hover:text-white"
          >
            <LinkedInIcon className="size-4" />
            LinkedIn
          </a>
        </div>
        <p className="text-xs leading-relaxed text-white/60 lg:text-right">
          {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
