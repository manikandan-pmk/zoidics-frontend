import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as
  | string
  | undefined;

let isInitialized = false;

export const initGA = () => {
  if (!GA_MEASUREMENT_ID) {
    return;
  }

  // Always clear the opt-out flag, so a visitor who turns analytics back on is tracked again
  (window as unknown as Record<string, boolean>)[
    `ga-disable-${GA_MEASUREMENT_ID}`
  ] = false;

  if (isInitialized) {
    return;
  }

  ReactGA.initialize(GA_MEASUREMENT_ID, {
    // Page views are sent manually by GoogleAnalytics.tsx on every route change.
    // Without this, GA also auto-sends one on load, so the first page counts twice.
    gtagOptions: { send_page_view: false },
  });

  isInitialized = true;
};

export const trackPageView = (path: string) => {
  if (!isInitialized) {
    return;
  }

  ReactGA.send({
    hitType: "pageview",
    page: path,
    title: document.title,
  });
};

// Call when the visitor turns analytics off after having accepted it
export const disableGA = () => {
  if (!GA_MEASUREMENT_ID) {
    return;
  }

  (window as unknown as Record<string, boolean>)[
    `ga-disable-${GA_MEASUREMENT_ID}`
  ] = true;
};