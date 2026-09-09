import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading } from "@/components/site/Section";

export const faqs = [
  {
    q: "What is SnapCut AI?",
    a: "SnapCut AI is an AI-powered image background removal platform. Upload an image, and you get a clean transparent PNG back in seconds.",
  },
  {
    q: "How does background removal work?",
    a: "The AI detects the main subject in your image and automatically separates it from the background, then renders the subject onto a transparent canvas.",
  },
  { q: "What image formats are supported?", a: "JPG, JPEG, PNG and WEBP, up to 12 MB per image." },
  {
    q: "Is SnapCut AI free?",
    a: "Yes. You can start on the free plan with limited daily usage, and upgrade to Pro for higher limits and high-resolution downloads.",
  },
  {
    q: "Are my images stored?",
    a: "No. Images are processed securely and temporary files are removed after processing — nothing is kept permanently.",
  },
  {
    q: "Can I use SnapCut AI for business?",
    a: "Yes. Business plans add bulk processing, API access, higher limits and priority support.",
  },
];

export function FaqSection() {
  return (
    <Section className="bg-background">
      <SectionHeading eyebrow="FAQ" title="Questions, answered" />
      <div className="mx-auto mt-10 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
