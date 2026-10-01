import type { SpecRow } from "@/types";

/** Label / values table with hairline rules. */
export function SpecSheet({ rows }: { rows: SpecRow[] }) {
  return (
    <dl className="border-t">
      {rows.map((row) => (
        <div key={row.label} className="grid gap-1 border-b py-4 sm:grid-cols-[200px_1fr] sm:gap-8">
          <dt className="type-label text-muted-foreground sm:pt-1">{row.label}</dt>
          <dd className="text-lg">{row.items.join(" / ")}</dd>
        </div>
      ))}
    </dl>
  );
}
