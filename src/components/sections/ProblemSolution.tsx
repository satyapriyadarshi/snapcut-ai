import { ArrowRight, Check, Clock, GraduationCap, IndianRupee, Users, X } from "lucide-react";

import { Section, SectionHeading } from "@/components/site/Section";

const problems = [
  { icon: IndianRupee, text: "Professional image-editing software can be expensive." },
  { icon: GraduationCap, text: "Advanced editing tools are difficult for beginners to learn." },
  { icon: Clock, text: "Manual background removal takes a lot of time." },
  { icon: Users, text: "Hiring professional designers increases cost." },
];

const solution = [
  "Detects the main subject automatically",
  "Separates the subject from the background",
  "Removes the background cleanly",
  "Generates a transparent PNG result",
  "Shows the result instantly",
  "Lets you download it right away",
];

export function ProblemSolution() {
  return (
    <Section className="bg-background">
      <SectionHeading
        eyebrow="Problem → Solution"
        title="Clean images shouldn't take an afternoon"
        description="People need professional visuals for e-commerce, marketing, social media, education and content creation — but the usual tools get in the way."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-destructive/10 text-destructive">
              <X className="h-4 w-4" aria-hidden="true" />
            </span>
            The problem today
          </h3>
          <ul className="mt-5 space-y-4">
            {problems.map(({ icon: Icon, text }) => (
              <li key={text} className="flex gap-3 text-sm text-muted-foreground">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
                {text}
              </li>
            ))}
            <li className="flex gap-3 text-sm text-muted-foreground">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
              Most people just need a quick fix for a simple editing task.
            </li>
          </ul>
        </div>

        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]">
          <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" aria-hidden="true" />
        </div>

        <div className="rounded-3xl border border-primary/25 bg-primary/[0.04] p-6 shadow-[var(--shadow-card)]">
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/15 text-primary">
              <Check className="h-4 w-4" aria-hidden="true" />
            </span>
            The SnapCut AI way
          </h3>
          <ul className="mt-5 space-y-4">
            {solution.map((text) => (
              <li key={text} className="flex gap-3 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-2xl bg-card p-4 text-sm font-semibold text-primary">
            “Professional background removal. One click. Powered by AI.”
          </p>
        </div>
      </div>
    </Section>
  );
}
