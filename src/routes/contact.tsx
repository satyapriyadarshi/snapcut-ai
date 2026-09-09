import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessagesSquare, Building2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const title = "Contact — SnapCut AI";
const description =
  "Talk to the SnapCut AI team about bulk processing, API access, custom integrations or support for your account.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

function Page() {
  const [sending, setSending] = useState(false);

  return (
    <section className="surface-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Let's talk about your images
          </h1>
          <p className="mt-4 text-muted-foreground">
            Questions about plans, bulk processing or connecting SnapCut AI to your own workflow?
            Send us a message and we'll reply within one business day.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              { icon: Mail, title: "Support", text: "hello@snapcut.ai" },
              { icon: Building2, title: "Sales", text: "sales@snapcut.ai" },
              { icon: MessagesSquare, title: "Response time", text: "Within 1 business day" },
            ].map(({ icon: Icon, title: t, text }) => (
              <li key={t} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{t}</span>
                  <span className="block text-sm text-muted-foreground">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <form
          className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSending(true);
            setTimeout(() => {
              setSending(false);
              (e.target as HTMLFormElement).reset();
              toast.success("Thanks — your message is on its way.");
            }, 700);
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required autoComplete="name" placeholder="Your name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div className="mt-4 grid gap-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" required placeholder="Bulk processing enquiry" />
          </div>
          <div className="mt-4 grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required rows={6} placeholder="How can we help?" />
          </div>
          <Button type="submit" size="lg" className="mt-6 w-full" disabled={sending}>
            {sending ? "Sending…" : "Send message"}
          </Button>
        </form>
      </div>
    </section>
  );
}
