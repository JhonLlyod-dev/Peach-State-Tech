// components/cookies/CookieBanner.tsx
"use client";

import { useCookieConsent } from "@/components/CookieConsentContext";

export default function CookieBanner() {
  const { showBanner, acceptAll, rejectNonEssential, openSettings } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="motion-preset-slide-up mx-auto max-w-4xl rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-xl dark:shadow-black/40 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <h2 className="font-bold text-zinc-900 dark:text-zinc-50 text-base sm:text-lg mb-1">
              We value your privacy
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              We use necessary cookies to make our site work. With your consent, we&apos;d also
              like to use analytics cookies to understand how visitors interact with our site.
              Read our{" "}
              <a href="/privacy" className="text-peach font-semibold hover:underline">
                Privacy Policy
              </a>{" "}
              for more.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 shrink-0">
            <button
              onClick={rejectNonEssential}
              className="order-3 sm:order-1 text-sm font-semibold px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
            >
              Reject Non-Essential
            </button>
            <button
              onClick={openSettings}
              className="order-2 text-sm font-semibold px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
            >
              Customize
            </button>
            <button
              onClick={acceptAll}
              className="order-1 sm:order-3 text-sm font-semibold px-4 py-2.5 rounded-lg bg-gradient-peach text-white hover:bg-peach/80 transition-colors cursor-pointer"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}