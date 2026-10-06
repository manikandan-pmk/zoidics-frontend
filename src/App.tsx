import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import ScrollToTop from "./components/ScrollToTop";
import GoogleAnalytics from "./components/GoogleAnalytics";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import Services from "./pages/Services";
import CookieConsent from "./components/CookieConsent";

function AppLayout() {
  const location = useLocation();

  const isLegalPage =
    location.pathname === "/privacy-policy" ||
    location.pathname === "/terms-and-conditions";

  return (
    <>
      <ScrollToTop />

      {/* Consent-based GA tracking (loads GA only after analytics is accepted) */}
      <GoogleAnalytics />

      {!isLegalPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/projects" element={<Project />} />

        <Route path="/services" element={<Services />} />

        <Route path="/services/:serviceSlug" element={<Services />} />

        <Route path="/contact" element={<Contact />} />

        {/* Old service URLs -> one real URL per service (avoids duplicate pages for Google) */}
        <Route
          path="/web-development"
          element={<Navigate to="/services/web-development" replace />}
        />
        <Route
          path="/app-development"
          element={<Navigate to="/services/app-development" replace />}
        />
        <Route
          path="/ai-integration"
          element={<Navigate to="/services/ai-integration" replace />}
        />
        <Route
          path="/ai-chatbot"
          element={<Navigate to="/services/ai-chatbots" replace />}
        />
        <Route
          path="/business-automation"
          element={<Navigate to="/services/business-automation" replace />}
        />
        <Route
          path="/seo-growth"
          element={<Navigate to="/services/seo-growth" replace />}
        />
        <Route
          path="/ecommerce-solutions"
          element={<Navigate to="/services/ecommerce-solutions" replace />}
        />
        <Route
          path="/billing-system"
          element={<Navigate to="/services/billing-systems" replace />}
        />
        <Route
          path="/cloud-solutions"
          element={<Navigate to="/services/cloud-deployment" replace />}
        />
        <Route
          path="/custom-software"
          element={<Navigate to="/services/custom-software" replace />}
        />

        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      {!isLegalPage && <Footer />}

      <CookieConsent />

      <Chatbot />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;