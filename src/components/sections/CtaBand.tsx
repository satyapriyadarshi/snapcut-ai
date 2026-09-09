import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="bg-background pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-3xl bg-[image:var(--gradient-brand)] px-6 py-14 text-center shadow-[var(--shadow-glow)]">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground text-balance sm:text-4xl">
            Professional background removal. One click.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
            Upload an image and download a clean transparent PNG in seconds — free to try, no
            software to install.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link to="/remover">Remove Background — Free</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
