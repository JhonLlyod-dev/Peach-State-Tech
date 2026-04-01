import { Metadata } from "next";

export const metadata: Metadata = {
  title: "410 Gone | Peach State Tech",
  description: "This page is gone for good — it's been permanently removed and won't be coming back."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}