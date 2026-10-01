"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";

function Toaster(props: ToasterProps) {
  return (
    <Sonner
      theme="light"
      position="bottom-center"
      style={
        {
          "--normal-bg": "var(--foreground)",
          "--normal-text": "var(--background)",
          "--normal-border": "var(--foreground)",
          "--border-radius": "0px",
        } as React.CSSProperties
      }
      {...props}
    />
  );
}

export { Toaster };
