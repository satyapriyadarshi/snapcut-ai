import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/sections/CtaBand";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Showcase } from "@/components/sections/Showcase";

const title = "How It Works — SnapCut AI";
const description =
  "Upload, let the AI process your image, then download a transparent PNG. See the three-step SnapCut AI background removal workflow.";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="surface-soft">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Upload. Process. Download.
          </h1>
          <p className="mt-4 text-muted-foreground">
            The entire SnapCut AI workflow fits in one screen — here's exactly what happens to your
            image.
          </p>
        </div>
      </section>
      <HowItWorks />
      <ProblemSolution />
      <Showcase />
      <CtaBand />
    </>
  );
}
