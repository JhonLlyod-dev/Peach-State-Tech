import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Peach State Tech - Latest Tech News & Insights",
  description:
    "Explore the latest tech news, startup stories, and industry insights from Peach State Tech. Stay updated on Georgia’s growing tech ecosystem and innovations.",
  
  keywords: [
    "Peach State Tech blog",
    "Georgia tech news",
    "startup insights Georgia",
    "technology trends USA",
    "tech industry updates",
  ],

  openGraph: {
    title: "Peach State Tech Blog - Tech News & Insights",
    description:
      "Read the latest articles on technology, startups, and innovation from Peach State Tech.",
    url: "https://www.peachstate.tech/blog",
    siteName: "Peach State Tech",
    type: "website",
    images: [
      {
        url: "/happy.webp",
        width: 1200,
        height: 630,
        alt: "Peach State Tech Blog",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.peachstate.tech/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}