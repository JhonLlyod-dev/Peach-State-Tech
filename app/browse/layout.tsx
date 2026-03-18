

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Posts | Peach State Tech",
  description: "Browse Georgia tech startups, latest news and resources to discover emerging companies, trends and opportunities in a fast growing tech hub.",
  keywords: [
      'Peach State Tech',
      'Blog', 'Peach State Blog',
      'Peach State Tech Blog', 'Georgia Peach State',
      'Georgia Peach State Tech', 'Georgia Blog','Georgia Peach State Tech Blog'
  ],
  openGraph: {
    title: "Browse Posts | Peach State Tech",
    description: "Browse Georgia tech startups, latest news and resources to discover emerging companies, trends and opportunities in a fast growing tech hub.",
    url: "https://peachstate.tech/browse",
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
    canonical: 'https://peachstate.tech/browse',
  },
};

export default function BrowseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
