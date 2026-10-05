export type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const CONSENT_KEY = "zoidics_cookie_consent";

export const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export const getCookiePreferences = (): CookiePreferences | null => {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);

    if (!stored) {
      return null;
    }

    return {
      ...defaultPreferences,
      ...JSON.parse(stored),
      necessary: true,
    };
  } catch {
    return null;
  }
};

export const saveCookiePreferences = (preferences: CookiePreferences): void => {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(preferences));

  window.dispatchEvent(new Event("cookieConsentChanged"));
};

export const acceptAllCookies = (): void => {
  saveCookiePreferences({
    necessary: true,
    analytics: true,
    marketing: true,
  });
};

export const rejectNonEssentialCookies = (): void => {
  saveCookiePreferences({
    necessary: true,
    analytics: false,
    marketing: false,
  });
};
