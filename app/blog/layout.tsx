import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Peach State Tech",
  description: "Peach State Tech Blogs Category Page",
}

export default function CategoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}