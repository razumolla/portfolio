import { cn } from "@/lib/utils";

interface SectionProps extends React.ComponentProps<"section"> {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

/** Editorial section: sticky numbered rail on the left, content on the right. */
export function Section({
  index,
  eyebrow,
  title,
  description,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "grid scroll-mt-16 gap-8 border-t border-foreground py-14 md:grid-cols-[180px_1fr] md:gap-12 md:py-24",
        className,
      )}
      {...props}
    >
      <div className="flex items-baseline gap-4 md:sticky md:top-24 md:block md:self-start">
        <p className="font-display text-6xl leading-none text-primary md:text-8xl">{index}</p>
        <p className="type-label md:mt-4">{eyebrow}</p>
      </div>

      <div className="min-w-0">
        <h2 className="font-display text-4xl leading-none tracking-tight text-balance sm:text-5xl md:text-7xl">
          {title}
        </h2>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{description}</p>
        )}
        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  );
}
