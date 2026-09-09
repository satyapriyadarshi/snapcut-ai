import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection, faqs } from "@/components/sections/FaqSection";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { PrivacySection } from "@/components/sections/PrivacySection";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Showcase } from "@/components/sections/Showcase";
import { UseCases } from "@/components/sections/UseCases";
import { WhySnapCut } from "@/components/sections/WhySnapCut";

const title = "SnapCut AI — AI Background Remover";
const description =
  "Remove image backgrounds instantly with SnapCut AI. Upload an image, let AI remove the background, and download a clean transparent image in seconds.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "SnapCut AI",
          applicationCategory: "MultimediaApplication",
          operatingSystem: "Web",
          description,
          offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
        }),
      },
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
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <Showcase />
      <UseCases />
      <WhySnapCut />
      <Pricing />
      <PrivacySection />
      <FaqSection />
      <CtaBand />
    </>
  );
}
