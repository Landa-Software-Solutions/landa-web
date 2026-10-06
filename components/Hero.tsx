import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { publicFileExists } from "@/lib/assets";

const HERO_IMAGE = "/hero.png";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy">
      {publicFileExists(HERO_IMAGE) ? (
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-right"
        />
      ) : (
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_75%_40%,#1e4fa8_0%,#0f2350_40%,#0a1630_75%)]" />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/20" />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {dict.hero.titleStart}{" "}
            <span className="text-brand-light">{dict.hero.titleHighlight}</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/85">
            {dict.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
            >
              {dict.hero.primaryCta}
            </a>
            <a
              href="#servicios"
              className="rounded-md border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {dict.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
