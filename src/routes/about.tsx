import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { CtaBand } from "@/components/sections/CtaBand";
import { Section, SectionHeading } from "@/components/site/Section";

const title = "About — SnapCut AI";
const description =
  "SnapCut AI is a focused AI background removal platform built for sellers, creators, students and small businesses who need clean images fast.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: Page,
});

const flow = [
  "User",
  "React frontend",
  "Backend / n8n workflow",
  "Background removal AI",
  "Temporary storage",
  "Preview & download",
];

function Page() {
  return (
    <>
      <section className="surface-soft">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            We build one thing, and we build it well
          </h1>
          <p className="mt-4 text-muted-foreground">
            SnapCut AI exists because most people don't need a full editing suite — they need a
            clean cut-out, right now.
          </p>
        </div>
      </section>

      <Section className="bg-background">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Our approach" title="Simple on purpose" />
            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <p>
                Professional editing software is powerful, expensive and slow to learn. Freelance
                designers cost money and time. For a product photo or a profile picture, that's far
                more machinery than the job deserves.
              </p>
              <p>
                SnapCut AI replaces the whole process with one upload. The AI finds the subject,
                separates it from the background and returns a transparent PNG you can drop straight
                into a store listing, a slide deck or a thumbnail.
              </p>
              <p>
                We deliberately don't add layers, brushes or filters. Every decision protects the
                same four-step flow: upload, process, preview, download.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
            <h2 className="text-lg font-semibold">How a request travels</h2>
            <ol className="mt-6 space-y-3">
              {flow.map((step, i) => (
                <li key={step} className="flex items-center gap-3 text-sm">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {i + 1}
                  </span>
                  <span className="font-medium">{step}</span>
                  {i < flow.length - 1 && (
                    <ArrowRight className="ml-auto h-4 w-4 text-border" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
            <p className="mt-6 rounded-2xl bg-secondary p-4 text-xs text-muted-foreground">
              API keys and credentials stay on the backend. The frontend only ever talks to our own
              service layer, so the AI provider can be swapped without touching the interface.
            </p>
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
