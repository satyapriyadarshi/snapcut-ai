import { Download, Upload, Wand2 } from "lucide-react";

import { Section, SectionHeading } from "@/components/site/Section";

const steps = [
  {
    n: "01",
    icon: Upload,
    title: "Upload",
    text: "Upload your image using drag-and-drop or file selection.",
  },
  {
    n: "02",
    icon: Wand2,
    title: "AI Processing",
    text: "Our AI automatically detects the subject and removes the background.",
  },
  {
    n: "03",
    icon: Download,
    title: "Download",
    text: "Preview your result and download the transparent image.",
  },
];

export function HowItWorks() {
  return (
    <Section className="bg-secondary/40">
      <SectionHeading
        eyebrow="How it works"
        title="Three steps. That's the whole product."
        description="No layers, no masks, no learning curve."
      />
      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map(({ n, icon: Icon, title, text }) => (
          <li
            key={n}
            className="group rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-3xl font-bold text-border">{n}</span>
            </div>
            <h3 className="mt-6 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
