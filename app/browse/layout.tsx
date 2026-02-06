

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Posts | Peach State Tech",
  description: "Browse Georgia tech startups, news, and resources.",
  keywords: [
      'Peach State Tech',
      'Blog', 'Peach State Blog',
      'Peach State Tech Blog', 'Georgia Peach State',
      'Georgia Peach State Tech', 'Georgia Blog','Georgia Peach State Tech Blog'
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function BrowseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
