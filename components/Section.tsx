import type { ReactNode } from "react";

export function SectionTitle({
  children,
  intro,
}: {
  children: ReactNode;
  intro?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {children}
      </h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

export function FeatureColumns({
  items,
}: {
  items: { icon: ReactNode; title: string; text: string }[];
}) {
  return (
    <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
      {items.map((item) => (
        <div key={item.title} className="md:px-8 md:first:pl-0 md:last:pr-0">
          <div className="text-brand">{item.icon}</div>
          <h3 className="mt-5 text-lg font-bold text-ink">{item.title}</h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
