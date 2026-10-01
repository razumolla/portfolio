import Image from "next/image";

import { Section } from "@/components/shared/section";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills" index="02" eyebrow="Skills" title="Tools I work with.">
      <ul className="grid grid-cols-2 border-t border-l sm:grid-cols-3 lg:grid-cols-5">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex flex-col gap-6 border-r border-b p-5 transition-colors hover:bg-surface"
          >
            <Image src={skill.icon} alt="" width={32} height={32} className="size-8" />
            <span className="type-label">{skill.name}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
