import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection, faqs } from "@/components/sections/FaqSection";

const title = "FAQ — SnapCut AI";
const description =
  "Answers about supported formats, pricing, image privacy and business use of the SnapCut AI background remover.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="surface-soft">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mt-4 text-muted-foreground">
            Everything about formats, limits, privacy and business use.
          </p>
        </div>
      </section>
      <FaqSection />
      <CtaBand />
    </>
  );
}
