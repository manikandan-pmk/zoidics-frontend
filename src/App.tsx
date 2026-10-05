import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import ScrollToTop from "./components/ScrollToTop";

import { trackPageView } from "./analytics";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import WebDevelopment from "./services/WebDevelopment";
import AppDevelopment from "./services/AppDevelopment";
import AIIntegration from "./services/AIIntegration";
import AIChatbots from "./services/AIChatbots";
import BusinessAutomation from "./services/BusinessAutomation";
import EcommerceSolutions from "./services/EcommerceSolutions";
import BillingSystems from "./services/BillingSystems";
import CloudAndDeployment from "./services/CloudAndDeployment";
import SEOAndGrowth from "./services/SEOAndGrowth";
import CustomSoftware from "./services/CustomSoftware";

import Services from "./pages/Services";
import CookieConsent from "./components/CookieConsent";

function AppLayout() {
  const location = useLocation();

  const isLegalPage =
    location.pathname === "/privacy-policy" ||
    location.pathname === "/terms-and-conditions";

  // Google Analytics page tracking
  useEffect(() => {
    const currentPath = location.pathname + location.search;

    trackPageView(currentPath);
  }, [location.pathname, location.search]);

  return (
    <>
      <ScrollToTop />

      {!isLegalPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/projects" element={<Project />} />

        <Route path="/services" element={<Services />} />

        <Route path="/services/:serviceSlug" element={<Services />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/web-development" element={<WebDevelopment />} />

        <Route path="/app-development" element={<AppDevelopment />} />

        <Route path="/ai-integration" element={<AIIntegration />} />

        <Route path="/ai-chatbot" element={<AIChatbots />} />

        <Route path="/business-automation" element={<BusinessAutomation />} />

        <Route path="/seo-growth" element={<SEOAndGrowth />} />

        <Route path="/ecommerce-solutions" element={<EcommerceSolutions />} />

        <Route path="/billing-system" element={<BillingSystems />} />

        <Route path="/cloud-solutions" element={<CloudAndDeployment />} />

        <Route path="/custom-software" element={<CustomSoftware />} />

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
