import { LuArrowUp } from "react-icons/lu";

import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-8 md:px-10">
        <p className="type-label text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 type-label transition-colors hover:text-primary"
        >
          Back to top
          <LuArrowUp className="size-3.5" aria-hidden />
        </a>
      </div>
    </footer>
  );
}
