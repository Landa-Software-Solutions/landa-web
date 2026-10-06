import type { Dictionary } from "@/app/[lang]/dictionaries";
import { CloudIcon, CodeIcon, GlobeIcon, PhoneIcon } from "./Icons";
import { SectionTitle } from "./Section";

const icons = [GlobeIcon, PhoneIcon, CodeIcon, CloudIcon];

export function Services({ dict }: { dict: Dictionary }) {
  return (
    <section id="servicios" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle intro={dict.services.intro}>{dict.services.title}</SectionTitle>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {dict.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <article
                key={item.title}
                className="rounded-xl border border-line bg-white p-7 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <Icon className="size-8 shrink-0 text-brand" />
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                </div>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-muted sm:pl-12">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-block rounded-md bg-brand px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-dark"
          >
            {dict.services.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
