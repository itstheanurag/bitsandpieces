import Link from "next/link";
import { FiGithub, FiTwitter } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-lg">
      <div className="container px-4 md:px-6 mx-auto py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary"></div>
            <span className="font-bold text-lg">Bits&Pieces</span>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <Link
              href="/docs"
              className="hover:text-foreground transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/components"
              className="hover:text-foreground transition-colors"
            >
              Components
            </Link>
            <Link
              href="/license"
              className="hover:text-foreground transition-colors"
            >
              License
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://twitter.com"
              className="p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              <FiTwitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/itstheanurag/bitsandpieces"
              className="p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              <FiGithub className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Bits&Pieces. Open Source.
        </div>
      </div>
    </footer>
  );
}
