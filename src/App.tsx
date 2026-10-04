import "./App.css";

import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

/* =========================================================
   LAYOUT
========================================================= */

function AppLayout() {
  const location = useLocation();

  const hideNavbarFooter =
    location.pathname === "/privacy-policy" ||
    location.pathname === "/terms-and-conditions";

  return (
    <>
      {/* Navbar hidden on Privacy Policy & Terms */}
      {!hideNavbarFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/projects" element={<Project />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />
      </Routes>

      
      {!hideNavbarFooter && <Footer />}

     
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