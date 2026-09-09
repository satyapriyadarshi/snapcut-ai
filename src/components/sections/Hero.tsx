import { Link } from "@tanstack/react-router";
import { ShieldCheck, Sparkles } from "lucide-react";

import { BackgroundRemover } from "@/components/BackgroundRemover";
import { Button } from "@/components/ui/button";
import shoeAfter from "@/assets/sample-shoe-cut.png";
import shoeBefore from "@/assets/sample-shoe.jpg";

export function Hero() {
  return (
    <section className="surface-soft relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            Professional background removal. One click. Powered by AI.
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Remove Any Background in <span className="text-gradient-brand">One Click.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            SnapCut AI uses artificial intelligence to instantly remove image backgrounds and give
            you clean, professional results — without complicated editing software.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/remover">Remove Background — Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-4 text-center">
            {[
              ["< 5s", "Average result"],
              ["4 formats", "JPG · PNG · WEBP"],
              ["0 clicks", "Manual selection"],
            ].map(([big, small]) => (
              <div key={small} className="rounded-2xl border border-border bg-card/70 p-3">
                <p className="text-base font-semibold text-foreground">{big}</p>
                <p className="mt-1 text-xs text-muted-foreground">{small}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <BackgroundRemover compact />
          <div className="mt-4 grid grid-cols-2 gap-4">
            <figure className="overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={shoeBefore}
                alt="Product photo of a sneaker before background removal"
                width={900}
                height={900}
                className="aspect-square w-full object-cover"
              />
              <figcaption className="px-3 py-2 text-xs text-muted-foreground">Before</figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="checkerboard">
                <img
                  src={shoeAfter}
                  alt="The same sneaker with a transparent background"
                  width={900}
                  height={900}
                  className="aspect-square w-full object-contain"
                />
              </div>
              <figcaption className="px-3 py-2 text-xs font-medium text-primary">After</figcaption>
            </figure>
          </div>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            Your images are processed securely.
          </p>
        </div>
      </div>
    </section>
  );
}
