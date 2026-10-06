import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { publicFileExists } from "@/lib/assets";
import { SectionTitle } from "./Section";

type Member = Dictionary["team"]["members"][number];

export function Team({ dict }: { dict: Dictionary }) {
  return (
    <section id="equipo" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle intro={dict.team.intro}>{dict.team.title}</SectionTitle>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-line">
          {dict.team.members.map((member) => (
            <MemberCard
              key={member.name}
              member={member}
              expertiseLabel={dict.team.expertiseLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberCard({
  member,
  expertiseLabel,
}: {
  member: Member;
  expertiseLabel: string;
}) {
  const initials = member.name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <article className="flex flex-col gap-6 sm:flex-row lg:px-10 lg:first:pl-0 lg:last:pr-0">
      <div className="relative size-32 shrink-0 overflow-hidden rounded-xl bg-navy">
        {publicFileExists(member.photo) ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="128px"
            className="object-cover"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-gradient-to-br from-brand to-navy text-3xl font-bold text-white">
            {initials}
          </div>
        )}
      </div>

      <div>
        <h3 className="text-lg font-bold text-ink">{member.name}</h3>
        <p className="mt-0.5 text-sm font-semibold text-brand">{member.role}</p>
        {member.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="mt-4 text-sm leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
        <p className="mt-5 text-sm font-bold text-ink">{expertiseLabel}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {member.expertise.map((skill) => (
            <li
              key={skill}
              className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink/80 ring-1 ring-line"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
