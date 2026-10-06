import type { Dictionary } from "@/app/[lang]/dictionaries";
import { BuildingIcon, RocketIcon, StoreIcon } from "./Icons";
import { FeatureColumns, SectionTitle } from "./Section";

const icons = [BuildingIcon, RocketIcon, StoreIcon];

export function Audience({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle>{dict.audience.title}</SectionTitle>
        <FeatureColumns
          items={dict.audience.items.map((item, i) => {
            const Icon = icons[i];
            return { ...item, icon: <Icon className="size-10" /> };
          })}
        />
      </div>
    </section>
  );
}
