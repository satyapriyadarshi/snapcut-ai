import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Section, SectionHeading } from "@/components/site/Section";
import deviceAfter from "@/assets/sample-device-cut.png";
import deviceBefore from "@/assets/sample-device.jpg";
import personAfter from "@/assets/sample-person-cut.png";
import personBefore from "@/assets/sample-person.jpg";
import shoeAfter from "@/assets/sample-shoe-cut.png";
import shoeBefore from "@/assets/sample-shoe.jpg";

const examples = [
  { before: shoeBefore, after: shoeAfter, alt: "sneaker" },
  { before: personBefore, after: personAfter, alt: "portrait" },
  { before: deviceBefore, after: deviceAfter, alt: "headphones" },
];

export function Showcase() {
  return (
    <Section className="bg-background">
      <SectionHeading
        eyebrow="Before / After"
        title="Drag the handle. See the difference."
        description="Real results on products, people and devices — edges, shadows and fine detail intact."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {examples.map((e) => (
          <BeforeAfterSlider key={e.alt} {...e} />
        ))}
      </div>
    </Section>
  );
}
