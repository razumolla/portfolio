import { LuArrowUpRight } from "react-icons/lu";

import { socialLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-x-6 gap-y-3", className)}>
      {socialLinks.map(({ label, href }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 type-label transition-colors hover:text-primary"
          >
            {label}
            <LuArrowUpRight
              className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
