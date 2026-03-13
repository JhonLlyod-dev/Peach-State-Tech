import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Peach State Tech",
  description:
    "Learn about Peach State Tech—our mission, vision, and how we promote Georgia-based tech companies through high-quality, search-optimized coverage.",
  keywords: [
    "About Peach State Tech",
    "Georgia tech media",
    "Tech marketing Georgia",
    "Startup promotion Georgia",
  ],
  openGraph: {
    title: "About Peach State Tech",
    description:
      "Discover how Peach State Tech supports Georgia’s startups and tech leaders through trusted media coverage.",
    url: "https://peachstate.tech/about",
    siteName: "Peach State Tech",
    type: "article",
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
    canonical: 'https://peachstate.tech/about',
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}