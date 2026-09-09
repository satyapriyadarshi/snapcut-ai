import {
  Eye,
  FileImage,
  Gauge,
  Lock,
  MousePointerClick,
  MoveDown,
  Sparkles,
  Stars,
} from "lucide-react";

import { Section, SectionHeading } from "@/components/site/Section";

const features = [
  {
    icon: MousePointerClick,
    title: "One-Click Background Removal",
    text: "Remove image backgrounds automatically with a single click.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Processing",
    text: "Advanced AI detects the main subject automatically.",
  },
  {
    icon: Stars,
    title: "High-Quality Output",
    text: "Generate clean transparent images suitable for professional use.",
  },
  { icon: FileImage, title: "Multiple Formats", text: "Support JPG, JPEG, PNG and WEBP." },
  { icon: MoveDown, title: "Drag & Drop", text: "Upload images quickly with an intuitive interface." },
  { icon: Eye, title: "Instant Preview", text: "See the processed image before downloading." },
  { icon: Gauge, title: "Fast Processing", text: "Get results within seconds." },
  {
    icon: Lock,
    title: "Secure Image Handling",
    text: "Images are processed securely and are not permanently stored.",
  },
];

export function Features() {
  return (
    <Section className="bg-background">
      <SectionHeading
        eyebrow="Features"
        title="Everything you need. Nothing you don't."
        description="A focused toolset built around one job: a clean cut-out, fast."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-base font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
