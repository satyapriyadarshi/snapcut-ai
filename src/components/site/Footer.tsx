import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Github } from "lucide-react";

import logo from "@/assets/snapcut-logo.png.asset.json";

const groups = [
  {
    title: "Product",
    links: [
      { to: "/remover", label: "Background Remover" },
      { to: "/features", label: "Features" },
      { to: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/faq", label: "FAQ" },
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms of Service" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <img src={logo.url} alt="SnapCut AI" className="h-9 w-auto" width={180} height={45} />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            AI-powered image editing made simple.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href="https://instagram.com"
              aria-label="SnapCut AI on Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="SnapCut AI on LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://x.com"
              aria-label="SnapCut AI on X"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:text-primary"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M18.9 2H22l-6.9 7.9L23 22h-6.4l-5-6.6L5.8 22H2.7l7.4-8.4L1.5 2H8l4.5 6 6.4-6Zm-1.1 18h1.7L7.3 3.8H5.5L17.8 20Z" />
              </svg>
            </a>
          </div>
        </div>

        {groups.map((g) => (
          <nav key={g.title} aria-label={g.title}>
            <h2 className="text-sm font-semibold text-foreground">{g.title}</h2>
            <ul className="mt-4 space-y-3">
              {g.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-border py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-xs text-muted-foreground">
              © 2026 SnapCut AI. All rights reserved.
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <div className="text-xs font-medium text-foreground">
                Created by <span className="text-primary">Satya Priyadarshi</span>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/satya-priyadarshi-9851253b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Satya Priyadarshi on LinkedIn"
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                  <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                  LinkedIn
                </a>
                <span className="text-muted-foreground">•</span>
                <a
                  href="https://www.instagram.com/satya.priyadarshi87?stkn=OWxzcmN1cGV6OXVh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Satya Priyadarshi on Instagram"
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                  <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
                  Instagram
                </a>
                <span className="text-muted-foreground">•</span>
                <a
                  href="https://github.com/satyapriyadarshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Satya Priyadarshi on GitHub"
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github className="h-3.5 w-3.5" aria-hidden="true" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
