import type { Dictionary } from "@/app/[lang]/dictionaries";
import { ChatIcon, CloudIcon, CodeIcon, DocumentIcon } from "./Icons";
import { SectionTitle } from "./Section";

const icons = [ChatIcon, DocumentIcon, CodeIcon, CloudIcon];

export function Process({ dict }: { dict: Dictionary }) {
  return (
    <section id="proceso" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle>{dict.process.title}</SectionTitle>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-line">
          {dict.process.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <li key={step.title} className="lg:px-7 lg:first:pl-0 lg:last:pr-0">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <Icon className="size-7 text-brand" />
                </div>
                <h3 className="mt-5 text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
