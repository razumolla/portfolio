"use client";

import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#top" className="font-display text-2xl leading-none">
          {siteConfig.shortName}
          <span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="type-label transition-colors hover:text-primary">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <LuX aria-hidden /> : <LuMenu aria-hidden />}
        </Button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-foreground px-5 md:hidden">
          {navItems.map((item) => (
            <li key={item.href} className="border-b last:border-b-0">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-4 font-display text-3xl"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
