import { KeyRound, Lock, ShieldCheck, Trash2 } from "lucide-react";

import { Section, SectionHeading } from "@/components/site/Section";

const items = [
  { icon: ShieldCheck, title: "Secure processing", text: "Every image is processed over an encrypted HTTPS connection." },
  { icon: Trash2, title: "No permanent storage", text: "Temporary files are deleted right after your image is processed." },
  { icon: KeyRound, title: "Keys stay on the server", text: "API credentials live on the backend and are never exposed to the browser." },
  { icon: Lock, title: "Responsible data handling", text: "Your uploads are never used for anything other than producing your result." },
];

export function PrivacySection() {
  return (
    <Section className="bg-secondary/40">
      <SectionHeading eyebrow="Privacy & security" title="Your Images. Your Privacy." />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, text }) => (
          <article key={title} className="rounded-3xl border border-border bg-card p-6">
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
