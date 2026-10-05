import { useEffect, useState } from "react";
import {
  acceptAllCookies,
  defaultPreferences,
  getCookiePreferences,
  rejectNonEssentialCookies,
  saveCookiePreferences,
  type CookiePreferences,
} from "../utils/cookieConsent";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const existingConsent = getCookiePreferences();

    if (!existingConsent) {
      setShowBanner(true);
    } else {
      setPreferences(existingConsent);
    }
  }, []);

  const handleAcceptAll = () => {
    acceptAllCookies();

    setPreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });

    setShowBanner(false);
    setShowSettings(false);
  };

  const handleReject = () => {
    rejectNonEssentialCookies();

    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    });

    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    saveCookiePreferences(preferences);

    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[9999] flex justify-center sm:bottom-5">
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#111111]/95 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        {!showSettings ? (
          <div className="flex flex-col gap-4 px-5 py-4 sm:px-6 sm:py-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Content */}
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d99a24]/10 text-lg">
                🍪
              </div>

              <div>
                <h2 className="text-sm font-semibold text-white sm:text-base">
                  We use cookies
                </h2>

                <p className="mt-1 max-w-2xl text-xs leading-5 text-gray-400 sm:text-sm">
                  We use essential cookies to keep Zoidics working and analytics
                  cookies to improve your experience.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex shrink-0 flex-wrap gap-2">
              <button
                type="button"
                onClick={handleReject}
                className="rounded-lg border cursor-pointer border-white/10 px-3.5 py-2 text-xs font-medium text-gray-300 transition hover:border-white/20 hover:bg-white/5 sm:px-4 sm:text-sm"
              >
                Reject
              </button>

              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="rounded-lg border border-[#d99a24]/40 px-3.5 cursor-pointer py-2 text-xs font-medium text-[#e5ad3b] transition hover:bg-[#d99a24]/10 sm:px-4 sm:text-sm"
              >
                Customize
              </button>

              <button
                type="button"
                onClick={handleAcceptAll}
                className="rounded-lg bg-[#d99a24] px-4 py-2 cursor-pointer text-xs font-semibold text-black transition hover:bg-[#e8ae3b] sm:px-5 sm:text-sm"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          /* ================= SETTINGS ================= */
          <div className="px-5 py-5 sm:px-6">
            <div className="mb-5 flex items-start justify-between">
              <div>
                <h2 className="text-base font-semibold text-white sm:text-lg">
                  Cookie Preferences
                </h2>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Choose which cookies you want to allow.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="text-lg text-gray-500 transition hover:text-white"
                aria-label="Close cookie settings"
              >
                ×
              </button>
            </div>

            <div className="space-y-2">
              {/* Necessary */}
              <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-white">Necessary</p>

                  <p className="mt-0.5 text-xs text-gray-500">
                    Required for the website to work.
                  </p>
                </div>

                <span className="text-xs font-medium text-green-400">
                  Always on
                </span>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-white">Analytics</p>

                  <p className="mt-0.5 text-xs text-gray-500">
                    Helps us understand website usage.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setPreferences((prev) => ({
                      ...prev,
                      analytics: !prev.analytics,
                    }))
                  }
                  className={`relative h-5 w-9 rounded-full transition ${
                    preferences.analytics ? "bg-[#d99a24]" : "bg-gray-700"
                  }`}
                  aria-label="Toggle analytics cookies"
                >
                  <span
                    className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${
                      preferences.analytics ? "left-4" : "left-0.5"
                    }`}
                  />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-white">Marketing</p>

                  <p className="mt-0.5 text-xs text-gray-500">
                    Used for relevant marketing.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setPreferences((prev) => ({
                      ...prev,
                      marketing: !prev.marketing,
                    }))
                  }
                  className={`relative h-5 w-9 rounded-full transition ${
                    preferences.marketing ? "bg-[#d99a24]" : "bg-gray-700"
                  }`}
                  aria-label="Toggle marketing cookies"
                >
                  <span
                    className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${
                      preferences.marketing ? "left-4" : "left-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={handleReject}
                className="rounded-lg border border-white/10 px-4 py-2 text-xs font-medium text-gray-300 transition hover:bg-white/5"
              >
                Reject All
              </button>

              <button
                type="button"
                onClick={handleSavePreferences}
                className="rounded-lg bg-[#d99a24] px-4 py-2 text-xs font-semibold text-black transition hover:bg-[#e8ae3b]"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
