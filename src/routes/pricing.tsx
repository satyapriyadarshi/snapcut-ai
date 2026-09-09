import { createFileRoute } from "@tanstack/react-router";

import { FaqSection } from "@/components/sections/FaqSection";
import { Pricing } from "@/components/sections/Pricing";

const title = "Pricing — SnapCut AI";
const description =
  "Start free with daily background removals, upgrade to Pro at ₹299/month for high-resolution output, or contact sales for bulk processing and API access.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="surface-soft">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Simple pricing for simple editing
          </h1>
          <p className="mt-4 text-muted-foreground">
            Free to start. Pro when you need volume and resolution. Business when you need the API.
          </p>
        </div>
      </section>
      <Pricing />
      <FaqSection />
    </>
  );
}
