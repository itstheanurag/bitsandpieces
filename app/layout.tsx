import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/root/theme/provider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bits&Pieces - Premium React UI Components",
  description:
    "A high-performance toolkit for React developers who demand speed, accessibility, and pixel-perfect aesthetics. Built with Next.js, Tailwind CSS, and Framer Motion.",
  metadataBase: new URL("https://itstheanurag.github.io/bitsandpieces"),
  keywords: [
    "React",
    "UI Components",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Web Design",
  ],
  authors: [{ name: "Gaurav", url: "https://github.com/itstheanurag" }],
  openGraph: {
    title: "Bits&Pieces - Premium React UI Components",
    description:
      "A high-performance toolkit for React developers who demand speed, accessibility, and pixel-perfect aesthetics.",
    url: "https://itstheanurag.github.io/bitsandpieces",
    siteName: "Bits&Pieces",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Bits&Pieces Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bits&Pieces",
    description: "Premium React UI Components",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning={true}
        className={`${outfit.variable} ${jetbrainsMono.variable} antialiased bg-background font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
