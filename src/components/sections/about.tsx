import { Section } from "@/components/shared/section";
import { SpecSheet } from "@/components/shared/spec-sheet";
import { siteConfig, stack } from "@/data/site";

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="A developer who keeps learning.">
      <p className="max-w-3xl text-xl leading-relaxed md:text-2xl md:leading-relaxed">
        {siteConfig.about}
      </p>
      <div className="mt-12 md:mt-16">
        <SpecSheet rows={stack} />
      </div>
    </Section>
  );
}
