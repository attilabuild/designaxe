import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const powerGrotesk = localFont({
  src: [
    {
      path: "../font/fonnts.com-powergrotesk-ultralight.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../font/fonnts.com-powergrotesk-ultralightitalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../font/fonnts.com-powergrotesk-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../font/fonnts.com-powergrotesk-lightitalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../font/fonnts.com-powergrotesk-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/fonnts.com-powergrotesk-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../font/fonnts.com-powergrotesk-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../font/fonnts.com-powergrotesk-mediumitalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../font/fonnts.com-powergrotesk-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../font/fonnts.com-powergrotesk-bolditalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../font/fonnts.com-powergrotesk-ultrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../font/fonnts.com-powergrotesk-ultrabolditalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../font/fonnts.com-powergrotesk-heavy.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../font/fonnts.com-powergrotesk-heavyitalic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../font/fonnts.com-powergrotesk-black.otf",
      weight: "950",
      style: "normal",
    },
    {
      path: "../font/fonnts.com-powergrotesk-blackitalic.otf",
      weight: "950",
      style: "italic",
    },
  ],
  variable: "--font-power-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DesigAxe : Design That Hooks. Code That Delivers.",
    template: "%s | Designaxe"
  },
  description: "I'm AttilaBuild, founder of Designaxe. I help founders, creators, and businesses turn raw ideas into clean, modern, and conversion-focused digital products. From brand identity to complete websites and applications, everything is built with clarity, precision, and speed.",
  keywords: [
    "web design",
    "web development",
    "app development",
    "SaaS development",
    "branding",
    "digital products",
    "Next.js",
    "React",
    "WordPress",
    "Designaxe",
    "founder",
    "startup",
    "MVP",
    "e-commerce",
    "conversion optimization",
    "attilabuild",
    "designaxe",
    "attila feher"
  ],
  authors: [{ name: "AttilaBuild", url: "https://instagram.com/attilabuild" }],
  creator: "AttilaBuild",
  publisher: "Designaxe",
  metadataBase: new URL("https://designaxe.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://designaxe.com",
    title: "Designaxe : Design That Hooks. Code That Delivers.",
    description: "I'm AttilaBuild, founder of Designaxe. I help founders, creators, and businesses turn raw ideas into clean, modern, and conversion-focused digital products.",
    siteName: "Designaxe",
    images: [
      {
        url: "/metaog.png",
        width: 1200,
        height: 630,
        alt: "DesigAaxe - Design That Hooks. Code That Delivers.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Designaxe : Design That Hooks. Code That Delivers.",
    description: "I'm AttilaBuild, founder of Designaxe. I help founders, creators, and businesses turn raw ideas into clean, modern, and conversion-focused digital products.",
    creator: "@attilabuild",
    images: ["/metaog.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "technology",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${powerGrotesk.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
