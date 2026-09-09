import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/sections/CtaBand";
import { Features } from "@/components/sections/Features";
import { PrivacySection } from "@/components/sections/PrivacySection";
import { UseCases } from "@/components/sections/UseCases";
import { WhySnapCut } from "@/components/sections/WhySnapCut";

const title = "Features — SnapCut AI";
const description =
  "One-click removal, AI subject detection, transparent PNG output, drag and drop uploads, instant preview and secure image handling.";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/features" },
    ],
    links: [{ rel: "canonical", href: "/features" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="surface-soft">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Built around one job, done perfectly
          </h1>
          <p className="mt-4 text-muted-foreground">
            Every feature in SnapCut AI supports the same simple flow: upload, remove, download.
          </p>
        </div>
      </section>
      <Features />
      <WhySnapCut />
      <UseCases />
      <PrivacySection />
      <CtaBand />
    </>
  );
}
