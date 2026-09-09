import {
  Briefcase,
  Camera,
  GraduationCap,
  Megaphone,
  PenTool,
  ShoppingBag,
  Store,
} from "lucide-react";

import { Section, SectionHeading } from "@/components/site/Section";

const cases = [
  {
    icon: ShoppingBag,
    title: "E-commerce Sellers",
    text: "Create clean product images for online stores.",
  },
  {
    icon: Camera,
    title: "Social Media Creators",
    text: "Create professional visuals for posts, reels and advertisements.",
  },
  {
    icon: PenTool,
    title: "Graphic Designers",
    text: "Speed up repetitive background-removal tasks.",
  },
  {
    icon: GraduationCap,
    title: "Students",
    text: "Create images for presentations, projects and assignments.",
  },
  { icon: Megaphone, title: "Marketers", text: "Prepare campaign visuals quickly." },
  {
    icon: Store,
    title: "Small Businesses",
    text: "Create professional marketing material without hiring expensive designers.",
  },
  {
    icon: Briefcase,
    title: "Content Creators",
    text: "Prepare thumbnails and creative assets faster.",
  },
];

export function UseCases() {
  return (
    <Section className="bg-secondary/40">
      <SectionHeading
        eyebrow="Use cases"
        title="Built for Everyone Who Works With Images"
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cases.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/15 text-accent-foreground">
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
