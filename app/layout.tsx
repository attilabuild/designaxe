import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Designaxe : Design That Hooks. Code That Delivers.",
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
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Designaxe - Design That Hooks. Code That Delivers.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Designaxe : Design That Hooks. Code That Delivers.",
    description: "I'm AttilaBuild, founder of Designaxe. I help founders, creators, and businesses turn raw ideas into clean, modern, and conversion-focused digital products.",
    creator: "@attilabuild",
    images: ["/og-image.jpg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
