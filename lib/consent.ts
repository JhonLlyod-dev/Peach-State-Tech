// lib/consent.ts
export const CONSENT_COOKIE_NAME = "psc_cookie_consent";
export const CONSENT_COOKIE_DAYS = 180;

export type CookiePreferences = {
  necessary: true;
  analytics: boolean;
};

export type StoredConsent = CookiePreferences & {
  timestamp: number;
};