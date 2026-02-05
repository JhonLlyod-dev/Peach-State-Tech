import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Peach State Tech",
  description:
    "Thank you for contacting Peach State Tech. We’ve received your message and will get back to you shortly.",
  openGraph: {
    title: "Thank You for Reaching Out",
    description:
      "Your message has been received. Thanks for being part of the Peach State Tech community.",
    url: "https://peachstate.tech/thankyou",
    siteName: "Peach State Tech",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
