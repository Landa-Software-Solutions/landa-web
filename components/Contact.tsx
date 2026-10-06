import type { ReactNode } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { EMAIL, LINKEDIN_URL } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { LinkedInIcon, MailIcon, PinIcon } from "./Icons";

export function Contact({ dict }: { dict: Dictionary }) {
  const { contact } = dict;

  return (
    <section id="contacto" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{contact.text}</p>

          <ul className="mt-10 space-y-6">
            <li className="flex items-center gap-4">
              <IconBadge>
                <MailIcon className="size-5" />
              </IconBadge>
              <div>
                <p className="text-sm font-bold text-ink">{contact.emailLabel}</p>
                <a href={`mailto:${EMAIL}`} className="text-sm text-brand hover:underline">
                  {EMAIL}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <IconBadge>
                <PinIcon className="size-5" />
              </IconBadge>
              <p className="text-sm text-ink">{contact.location}</p>
            </li>
            <li className="flex items-center gap-4">
              <IconBadge>
                <LinkedInIcon className="size-4" />
              </IconBadge>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink hover:text-brand"
              >
                {contact.linkedin}
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-xl bg-surface p-6 sm:p-8">
          <ContactForm dict={contact.form} email={EMAIL} />
        </div>
      </div>
    </section>
  );
}

function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand text-white">
      {children}
    </span>
  );
}
