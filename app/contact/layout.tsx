import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Peach State Tech | Tech News, Tutorials & Digital Insights",
  description:
    "Be part of Peach State Tech. Contact us for questions, feedback, or collaborations about technology news, tutorials, and digital insights.",
  keywords: [
    "Peach State Tech",
    "contact Peach State Tech",
    "tech blog contact",
    "technology news",
    "tech tutorials",
    "digital insights",
  ],
  openGraph: {
    title: "Contact Peach State Tech",
    description:
      "Have questions or ideas? Get in touch with Peach State Tech and be part of our growing tech community.",
    url: "https://peachstate.tech/contact",
    siteName: "Peach State Tech",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
