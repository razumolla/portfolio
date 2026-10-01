import Image from "next/image";
import { LuArrowDownRight, LuDownload } from "react-icons/lu";

import { SocialLinks } from "@/components/shared/social-links";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="animate-fade-up py-12 md:py-20">
      <p className="flex items-center gap-3 type-label">
        <span className="size-2 rounded-full bg-primary" aria-hidden />
        {siteConfig.designation} — {siteConfig.address}
      </p>

      <div className="mt-8 grid gap-10 md:mt-10 lg:grid-cols-[1fr_280px] lg:items-end lg:gap-14">
        <h1 className="font-display text-[clamp(2.9rem,8.2vw,7rem)] leading-[0.98] tracking-tight text-balance">
          Hello, I&apos;m <em className="text-primary">{siteConfig.name}</em>, passionate about
          crafting {siteConfig.focus}.
        </h1>

        <figure className="w-48 sm:w-56 lg:w-full">
          {/* Paper-colored backdrop so multiply blends the photo's white background away */}
          <div className="border-b border-foreground bg-background">
            <Image
              src={siteConfig.profileImage}
              alt={siteConfig.name}
              width={1000}
              height={1257}
              sizes="280px"
              priority
              className="aspect-4/5 w-full object-cover object-top mix-blend-multiply grayscale"
            />
          </div>
          <figcaption className="mt-3 type-label text-muted-foreground">
            Fig. 1 — {siteConfig.shortName}
          </figcaption>
        </figure>
      </div>

      <div className="mt-10 flex flex-col gap-8 border-t border-foreground pt-6 md:mt-14 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href="#contact">
              Contact me
              <LuArrowDownRight aria-hidden />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer">
              Get resume
              <LuDownload aria-hidden />
            </a>
          </Button>
        </div>
        <SocialLinks />
      </div>
    </section>
  );
}
