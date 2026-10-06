import type { Dictionary } from "@/app/[lang]/dictionaries";
import { DocumentIcon, RocketIcon, UsersIcon } from "./Icons";
import { FeatureColumns, SectionTitle } from "./Section";

const icons = [UsersIcon, RocketIcon, DocumentIcon];

export function Why({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle>
          {dict.why.titleStart}
          <br />
          <span className="text-brand">{dict.why.titleHighlight}</span>
        </SectionTitle>
        <FeatureColumns
          items={dict.why.items.map((item, i) => {
            const Icon = icons[i];
            return { ...item, icon: <Icon className="size-10" /> };
          })}
        />
      </div>
    </section>
  );
}
