import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Discover Top Trends at Peachstate.tech for Georgia Tech Startup News",
  authors: [{ name: "Peach State Tech" }],
  description:
    "Stay ahead of Georgia Tech trends with peachstate.tech! Discover the latest innovations, insights, and updates shaping the future of technology in Georgia.",
  keywords: [
    "Georgia tech",
    "Atlanta startups",
    "Georgia startups",
    "Tech news Georgia",
    "Peach State Tech",
    "Technology blog Georgia",
    "Peach State Tech",
    "Blog",
    "Peach State Blog",
    "Peach State Tech Blog",
    "Georgia Peach State",
    "Georgia Peach State Tech",
    "Georgia Blog",
    "Georgia Peach State Tech Blog",
  ],
  openGraph: {
    title: "Peach State Tech",
    description:
      "Stay ahead of Georgia Tech trends with peachstate.tech! Discover the latest innovations, insights, and updates shaping the future of technology in Georgia.",
    url: "https://www.peachstate.tech",
    siteName: "Peach State Tech",
    type: "website",
    images: [
      {
        url: "/happy.webp",
        width: 1200,
        height: 630,
        alt: "Peach State Tech",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.peachstate.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="UIZPu25FYF3nYc4FdpsxOw"
          async
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}