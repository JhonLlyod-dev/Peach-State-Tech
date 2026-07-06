// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import ThemeToggle from "../components/ThemeToggle";
import { CookieConsentProvider } from "@/components/CookieConsentContext";
import AnalyticsScripts from "@/components/cookies/AnalyticsScripts";
import CookieBanner from "@/components/cookies/CookieBanner";
import CookiePreferencesModal from "@/components/cookies/CookiesPreferencesModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.peachstate.tech"),
  title: {
    default: "Peach State Tech | Georgia Tech, Startup & Innovation News",
    template: "%s | Peach State Tech",
  },
  authors: [{ name: "Peach State Tech" }],
  description:
    "Peach State Tech covers Georgia's startup, AI, and venture capital news — from Atlanta innovation labs to emerging tech companies shaping the state's economy.",
  keywords: [
    "Georgia tech",
    "Atlanta startups",
    "Georgia startups",
    "Tech news Georgia",
    "Peach State Tech",
    "Technology blog Georgia",
    "Georgia Peach State Tech Blog",
  ],
  openGraph: {
    title: "Peach State Tech",
    description:
      "Stay ahead of Georgia Tech trends with peachstate.tech! Discover the latest innovations, insights, and updates shaping the future of technology in Georgia.",
    url: "https://www.peachstate.tech",
    siteName: "Peach State Tech",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "Peach State Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peach State Tech",
    description:
      "Georgia's startup, AI, and venture capital news — from Atlanta innovation labs to the companies shaping the state's tech economy.",
    images: ["/logo1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://www.peachstate.tech",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdf6f0" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CookieConsentProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ThemeToggle />
            <CookieBanner />
            <CookiePreferencesModal />
            <AnalyticsScripts />
          </CookieConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}