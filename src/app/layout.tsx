import "./globals.css";

import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { DebugBar } from "@/components/utility/debug-bar";
import { ThemeProvider } from "@/components/utility/theme-provider";
import { siteConfig } from "@/data/config";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.metadata.title,
  description: siteConfig.description,
  keywords: [...siteConfig.metadata.keywords],
  authors: [...siteConfig.metadata.authors],
  creator: siteConfig.metadata.creator,
  publisher: siteConfig.metadata.publisher,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.metadata.title.default,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.metadata.openGraph.image,
        width: 1200,
        height: 630,
        alt: siteConfig.metadata.openGraph.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metadata.title.default,
    description: siteConfig.description,
    images: [siteConfig.metadata.openGraph.image],
    creator: siteConfig.metadata.twitter.creator,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showDebugBar = process.env.DEBUG_BAR === "true";

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex min-h-screen flex-col antialiased [--header-height:calc(var(--spacing)*14)] lg:[--header-height:calc(var(--spacing)*23)]",
          inter.variable,
          dmSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          {showDebugBar ? <DebugBar /> : null}
        </ThemeProvider>
      </body>
    </html>
  );
}

