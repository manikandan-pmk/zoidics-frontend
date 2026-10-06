import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, trackPageView, disableGA } from "../analytics";
import { getCookiePreferences } from "../utils/cookieConsent";

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    const handleConsent = () => {
      const preferences = getCookiePreferences();

      if (!preferences?.analytics) {
        // Visitor rejected, or turned analytics off after accepting: stop tracking
        disableGA();
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