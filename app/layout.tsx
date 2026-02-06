import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
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
  title: "Peach State Tech | Georgia Tech News, Startups & Innovation",
  description:
    "Peach State Tech highlights Georgia’s growing tech ecosystem—featuring startups, founders, investors, and innovation across the state.",
  keywords: [
    "Georgia tech",
    "Atlanta startups",
    "Georgia startups",
    "Tech news Georgia",
    "Peach State Tech",
    "Technology blog Georgia",
    'Peach State Tech',
    'Blog', 'Peach State Blog',
    'Peach State Tech Blog', 'Georgia Peach State',
    'Georgia Peach State Tech', 'Georgia Blog','Georgia Peach State Tech Blog'
  ],
  openGraph: {
    title: "Peach State Tech",
    description:
      "Connecting Georgia’s tech ecosystem with investors, entrepreneurs, and decision-makers.",
    url: "https://peachstatetech.com",
    siteName: "Peach State Tech",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
