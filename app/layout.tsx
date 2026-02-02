import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/root/theme/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
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
