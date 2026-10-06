import type { Dictionary } from "@/app/[lang]/dictionaries";
import { PlusIcon } from "./Icons";
import { SectionTitle } from "./Section";

export function Faq({ dict }: { dict: Dictionary }) {
  return (
    <section id="faq" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle>{dict.faq.title}</SectionTitle>

        <div className="mt-12 grid items-start gap-4 md:grid-cols-2">
          {dict.faq.items.map((item) => (
            <details
              key={item.q}
              className="group rounded-lg border border-line bg-white px-5 shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 text-[0.95rem] font-semibold text-ink">
                {item.q}
                <PlusIcon className="size-5 shrink-0 text-muted transition group-open:rotate-45" />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
