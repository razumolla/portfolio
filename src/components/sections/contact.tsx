import { LuMail } from "react-icons/lu";

import { CopyButton } from "@/components/shared/copy-button";
import { Section } from "@/components/shared/section";
import { SocialLinks } from "@/components/shared/social-links";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title="Let's work together."
      description={siteConfig.contactNote}
    >
      <a
        href={`mailto:${siteConfig.email}`}
        className="font-display text-[clamp(1.9rem,6vw,5rem)] leading-none break-all underline decoration-primary decoration-2 underline-offset-8 transition-colors hover:text-primary"
      >
        {siteConfig.email}
      </a>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <a href={`mailto:${siteConfig.email}`}>
            <LuMail aria-hidden />
            Send an email
          </a>
        </Button>
        <CopyButton value={siteConfig.email} label="Email" />
      </div>

      <dl className="mt-14 grid border-t sm:grid-cols-[1fr_1fr_2fr]">
        <div className="border-b py-5 sm:pr-6">
          <dt className="type-label text-muted-foreground">Phone</dt>
          <dd className="mt-2 text-lg">
            <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-primary">
              {siteConfig.phone}
            </a>
          </dd>
        </div>
        <div className="border-b py-5 sm:pr-6">
          <dt className="type-label text-muted-foreground">Location</dt>
          <dd className="mt-2 text-lg">{siteConfig.address}</dd>
        </div>
        <div className="border-b py-5">
          <dt className="type-label text-muted-foreground">Elsewhere</dt>
          <dd className="mt-3">
            <SocialLinks />
          </dd>
        </div>
      </dl>
    </Section>
  );
}
