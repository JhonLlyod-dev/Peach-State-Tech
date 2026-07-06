// components/cookies/CookieSettingsLink.tsx
"use client";

import { useCookieConsent } from "@/components/CookieConsentContext";

export default function CookieSettingsLink() {
  const { openSettings } = useCookieConsent();

  return (
    <button
      onClick={openSettings}
      className="text-left text-zinc-400 hover:text-gradient-peach transition cursor-pointer"
    >
      Cookie Settings
    </button>
  );
}