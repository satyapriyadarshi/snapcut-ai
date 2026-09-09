import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/Section";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "/month",
    highlight: false,
    features: [
      "Limited background removals per day",
      "Standard resolution",
      "PNG download",
      "Basic processing",
    ],
    cta: "Start Free",
    to: "/signup" as const,
  },
  {
    name: "Pro",
    price: "₹299",
    period: "/month",
    highlight: true,
    features: [
      "Higher monthly limits",
      "High-resolution downloads",
      "Faster processing",
      "Priority processing",
      "No watermark",
    ],
    cta: "Upgrade to Pro",
    to: "/signup" as const,
  },
  {
    name: "Business",
    price: "Custom",
    period: " pricing",
    highlight: false,
    features: [
      "Bulk processing",
      "API access",
      "Higher limits",
      "Priority support",
      "Custom integration",
    ],
    cta: "Contact Sales",
    to: "/contact" as const,
  },
];

export function Pricing() {
  return (
    <Section className="bg-background">
      <SectionHeading
        eyebrow="Pricing"
        title="Start free. Upgrade when you scale."
        description="Monthly plans today, pay-per-use credits and business API access as you grow."
      />
      <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-3xl border p-7 transition-all duration-300 ${
              p.highlight
                ? "border-primary bg-card shadow-[var(--shadow-glow)] lg:-translate-y-3"
                : "border-border bg-card hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            }`}
          >
            {p.highlight && (
              <span className="absolute -top-3 left-7 rounded-full bg-[image:var(--gradient-brand)] px-3 py-1 text-xs font-semibold text-primary-foreground">
                Recommended
              </span>
            )}
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold tracking-tight">{p.price}</span>
              <span className="text-sm text-muted-foreground">{p.period}</span>
            </p>
            <ul className="mt-6 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="mt-8 w-full"
              size="lg"
              variant={p.highlight ? "default" : "outline"}
            >
              <Link to={p.to}>{p.cta}</Link>
            </Button>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-xs text-muted-foreground">
        Prices in INR. Pay-per-use credits and API billing coming soon.
      </p>
    </Section>
  );
}
