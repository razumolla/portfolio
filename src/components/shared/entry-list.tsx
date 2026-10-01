import type { TimelineEntry } from "@/types";

/** Ruled rows of period / title / subtitle. Used by Experience and Education. */
export function EntryList({ items }: { items: TimelineEntry[] }) {
  return (
    <ol className="border-t">
      {items.map((item) => (
        <li
          key={item.id}
          className="group grid gap-2 border-b py-6 sm:grid-cols-[200px_1fr] sm:gap-8 md:py-8"
        >
          <p className="type-label text-muted-foreground sm:pt-3">{item.period}</p>
          <div>
            <h3 className="font-display text-3xl leading-tight transition-colors group-hover:text-primary md:text-4xl">
              {item.title}
            </h3>
            <p className="mt-1 text-muted-foreground">{item.subtitle}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
