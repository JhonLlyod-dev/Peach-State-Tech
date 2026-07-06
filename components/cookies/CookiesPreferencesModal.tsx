// components/cookies/CookiePreferencesModal.tsx
"use client";

import { useEffect, useState } from "react";
import { X, ShieldCheck, BarChart3 } from "lucide-react";
import { useCookieConsent } from "@/components/CookieConsentContext";

export default function CookiePreferencesModal() {
  const { showModal, closeSettings, consent, acceptAll, rejectNonEssential, savePreferences } =
    useCookieConsent();

  const [analyticsEnabled, setAnalyticsEnabled] = useState(consent?.analytics ?? false);

  useEffect(() => {
    if (showModal) {
      setAnalyticsEnabled(consent?.analytics ?? false);
    }
  }, [showModal, consent]);

  useEffect(() => {
    if (!showModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSettings();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [showModal, closeSettings]);

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Cookie preferences"
    >
      <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm" onClick={closeSettings} />

      <div className="motion-preset-pop relative w-full max-w-lg rounded-2xl bg-white dark:bg-zinc-800 shadow-2xl dark:shadow-black/50 border border-zinc-200 dark:border-zinc-700 max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between p-6 border-b border-zinc-100 dark:border-zinc-700">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              Cookie Preferences
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Manage which cookies you allow us to use.
            </p>
          </div>
          <button
            onClick={closeSettings}
            aria-label="Close"
            className="shrink-0 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/40 p-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-peach shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 text-sm">
                  Necessary Cookies
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                  Required for the site to function properly. These cannot be disabled.
                </p>
              </div>
            </div>
            <span className="shrink-0 text-xs font-semibold text-zinc-400 dark:text-zinc-500 px-2.5 py-1 rounded-full bg-zinc-200/70 dark:bg-zinc-700">
              Always On
            </span>
          </div>

          <div className="flex items-start justify-between gap-4 rounded-xl border border-zinc-200 dark:border-zinc-700 p-4">
            <div className="flex items-start gap-3">
              <BarChart3 className="text-peach shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 text-sm">
                  Analytics Cookies
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                  Helps us understand site usage via Ahrefs Analytics and Vercel Analytics.
                </p>
              </div>
            </div>
            <button
              role="switch"
              aria-checked={analyticsEnabled}
              onClick={() => setAnalyticsEnabled((v) => !v)}
              className={`shrink-0 relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                analyticsEnabled ? "bg-gradient-peach" : "bg-zinc-300 dark:bg-zinc-600"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                  analyticsEnabled ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 p-6 pt-0">
          <button
            onClick={rejectNonEssential}
            className="text-sm font-semibold px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
          >
            Reject Non-Essential
          </button>
          <button
            onClick={() => savePreferences({ analytics: analyticsEnabled })}
            className="text-sm font-semibold px-4 py-2.5 rounded-lg border border-peach text-peach hover:bg-peach/10 transition-colors cursor-pointer"
          >
            Save Preferences
          </button>
          <button
            onClick={acceptAll}
            className="text-sm font-semibold px-4 py-2.5 rounded-lg bg-gradient-peach text-white hover:bg-peach/80 transition-colors cursor-pointer sm:ml-auto"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}