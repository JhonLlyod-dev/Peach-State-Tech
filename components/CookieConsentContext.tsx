// context/CookieConsentContext.tsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { getCookie, setCookie } from "@/lib/cookies";
import {
  CONSENT_COOKIE_NAME,
  CONSENT_COOKIE_DAYS,
  type CookiePreferences,
  type StoredConsent,
} from "@/lib/consent";

type CookieConsentContextValue = {
  mounted: boolean;
  consent: StoredConsent | null;
  showBanner: boolean;
  showModal: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (prefs: Pick<CookiePreferences, "analytics">) => void;
  openSettings: () => void;
  closeSettings: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

function readConsent(): StoredConsent | null {
  const raw = getCookie(CONSENT_COOKIE_NAME);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as StoredConsent;
    if (typeof parsed.analytics === "boolean") return parsed;
    return null;
  } catch {
    return null;
  }
}

function persistConsent(analytics: boolean): StoredConsent {
  const value: StoredConsent = {
    necessary: true,
    analytics,
    timestamp: Date.now(),
  };
  setCookie(CONSENT_COOKIE_NAME, JSON.stringify(value), CONSENT_COOKIE_DAYS);
  return value;
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [consent, setConsent] = useState<StoredConsent | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
    setMounted(true);
  }, []);

  const acceptAll = useCallback(() => {
    setConsent(persistConsent(true));
    setShowModal(false);
  }, []);

  const rejectNonEssential = useCallback(() => {
    setConsent(persistConsent(false));
    setShowModal(false);
  }, []);

  const savePreferences = useCallback(
    (prefs: Pick<CookiePreferences, "analytics">) => {
      setConsent(persistConsent(prefs.analytics));
      setShowModal(false);
    },
    []
  );

  const openSettings = useCallback(() => setShowModal(true), []);
  const closeSettings = useCallback(() => setShowModal(false), []);

  const showBanner = mounted && consent === null;

  return (
    <CookieConsentContext.Provider
      value={{
        mounted,
        consent,
        showBanner,
        showModal,
        acceptAll,
        rejectNonEssential,
        savePreferences,
        openSettings,
        closeSettings,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider");
  }
  return ctx;
}