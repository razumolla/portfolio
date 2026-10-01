import { EntryList } from "@/components/shared/entry-list";
import { Section } from "@/components/shared/section";
import { educations } from "@/data/education";

export function Education() {
  return (
    <Section id="education" index="05" eyebrow="Education" title="My academic path.">
      <EntryList items={educations} />
    </Section>
  );
}
