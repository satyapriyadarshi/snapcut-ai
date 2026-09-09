import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";

import { BackgroundRemover } from "@/components/BackgroundRemover";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FaqSection } from "@/components/sections/FaqSection";

const title = "Background Remover — SnapCut AI";
const description =
  "Upload a JPG, PNG or WEBP image and let SnapCut AI remove the background. Preview the transparent result and download the PNG in seconds.";

export const Route = createFileRoute("/remover")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/remover" },
    ],
    links: [{ rel: "canonical", href: "/remover" }],
  }),
  component: RemoverPage,
});

function RemoverPage() {
  return (
    <>
      <section className="surface-soft">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-5xl">
              Remove the background from <span className="text-gradient-brand">any image</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Drop an image below. The AI detects the subject, cuts it out and hands you a
              transparent PNG — no editing skills needed.
            </p>
          </div>

          <div className="mt-10">
            <BackgroundRemover />
          </div>

          <p className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
            Secure Processing • Privacy First — your images are never permanently stored.
          </p>
        </div>
      </section>
      <HowItWorks />
      <FaqSection />
    </>
  );
}
