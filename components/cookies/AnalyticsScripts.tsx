// components/cookies/AnalyticsScripts.tsx
"use client";

import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { useCookieConsent } from "@/components/CookieConsentContext";

export default function AnalyticsScripts() {
  const { consent } = useCookieConsent();

  if (!consent?.analytics) return null;

  return (
    <>
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="UIZPu25FYF3nYc4FdpsxOw"
        strategy="afterInteractive"
      />
      <Analytics />
    </>
  );
}