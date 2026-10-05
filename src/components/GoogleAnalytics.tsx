import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, trackPageView } from "../analytics";
import { getCookiePreferences } from "../utils/cookieConsent";

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    const handleConsent = () => {
      const preferences = getCookiePreferences();

      if (!preferences?.analytics) {
        return;
      }

      initGA();

      const path = location.pathname + location.search;

      trackPageView(path);
    };

    handleConsent();

    window.addEventListener("cookieConsentChanged", handleConsent);

    return () => {
      window.removeEventListener("cookieConsentChanged", handleConsent);
    };
  }, [location]);

  return null;
};

export default GoogleAnalytics;
