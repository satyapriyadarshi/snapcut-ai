import { Check, X } from "lucide-react";

import { Section, SectionHeading } from "@/components/site/Section";

const rows = [
  ["Multiple tools", "One click"],
  ["Manual selection", "Automatic AI detection"],
  ["Time consuming", "Results in seconds"],
  ["Requires learning", "No learning required"],
  ["Expensive software", "Affordable"],
];

const points = [
  "Extremely simple interface",
  "One-click operation",
  "Fast processing",
  "High-quality results",
  "Affordable",
  "No unnecessary editing tools",
  "Beginner-friendly",
  "Works in any modern browser",
];

export function WhySnapCut() {
  return (
    <Section className="bg-secondary/40">
      <SectionHeading
        eyebrow="Why SnapCut AI"
        title="Simple by Design. Powerful with AI."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
          <div className="grid grid-cols-2 border-b border-border text-sm font-semibold">
            <div className="p-4 text-muted-foreground">Traditional editing</div>
            <div className="bg-primary/[0.06] p-4 text-primary">SnapCut AI</div>
          </div>
          {rows.map(([a, b]) => (
            <div key={a} className="grid grid-cols-2 border-b border-border last:border-0 text-sm">
              <div className="flex items-start gap-2 p-4 text-muted-foreground">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
                {a}
              </div>
              <div className="flex items-start gap-2 bg-primary/[0.03] p-4 font-medium">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {b}
              </div>
            </div>
          ))}
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-sm font-medium"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-foreground">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
