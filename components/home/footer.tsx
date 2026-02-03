import Link from "next/link";
import { FiGithub, FiTwitter } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-primary/20 border border-primary/30" />
              <span className="font-semibold text-lg">Bits&Pieces</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              A modern UI system built for speed, clarity, and premium dark-mode
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Library
              </p>
              <Link href="/docs" className="block hover:text-foreground">
                Documentation
              </Link>
              <Link href="/docs/components" className="block hover:text-foreground">
                Components
              </Link>
              <Link href="/docs" className="block hover:text-foreground">
                Blocks
              </Link>
              <Link href="/docs" className="block hover:text-foreground">
                Templates
              </Link>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Project
              </p>
              <Link href="/license" className="block hover:text-foreground">
                License
              </Link>
              <Link href="/contribution" className="block hover:text-foreground">
                Contribute
              </Link>
              <Link href="/docs" className="block hover:text-foreground">
                Changelog
              </Link>
            </div>
          </div>

          <div className="flex md:justify-end">
            <div className="flex items-center gap-3">
              <Link
                href="https://twitter.com"
                className="p-2 rounded-lg border border-border/70 bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <FiTwitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/itstheanurag/bitsandpieces"
                className="p-2 rounded-lg border border-border/70 bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <FiGithub className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Bits&Pieces. Open Source.</span>
          <span className="uppercase tracking-[0.3em]">Crafted for builders</span>
        </div>
      </div>
    </footer>
  );
}
