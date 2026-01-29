

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Posts | Peach State Tech",
  description: "Browse Georgia tech startups, news, and resources.",
};

export default function BrowseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
