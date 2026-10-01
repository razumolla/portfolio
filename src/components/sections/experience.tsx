import { EntryList } from "@/components/shared/entry-list";
import { Section } from "@/components/shared/section";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" index="03" eyebrow="Experience" title="Where I've worked.">
      <EntryList items={experiences} />
    </Section>
  );
}
