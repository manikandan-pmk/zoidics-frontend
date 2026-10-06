import React, { useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import gsap from "gsap";
import Seo from "../components/Seo";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Smartphone,
  Receipt,
  Settings2,
  Cloud,
  Code2,
  ShoppingCart,
  Search,
} from "lucide-react";

// ======================================================
// SERVICE COMPONENTS
// ======================================================

import WebDevelopment from "../services/WebDevelopment";
import AppDevelopment from "../services/AppDevelopment";
import AIChatbots from "../services/AIChatbots";
import AIIntegration from "../services/AIIntegration";
import BillingSystems from "../services/BillingSystems";
import BusinessAutomation from "../services/BusinessAutomation";
import CloudAndDeployment from "../services/CloudAndDeployment";
import CustomSoftware from "../services/CustomSoftware";
import EcommerceSolutions from "../services/EcommerceSolutions";
import SEOAndGrowth from "../services/SEOAndGrowth";

// ======================================================
// SERVICE LIST
// ======================================================

const services = [
  {
    title: "Web Development",
    slug: "web-development",
    icon: Code2,
  },
  {
    title: "App Development",
    slug: "app-development",
    icon: Smartphone,
  },
  {
    title: "AI Chatbots",
    slug: "ai-chatbots",
    icon: Bot,
  },
  {
    title: "AI Integration",
    slug: "ai-integration",
    icon: BrainCircuit,
  },
  {
    title: "Billing Systems",
    slug: "billing-systems",
    icon: Receipt,
  },
  {
    title: "Business Automation",
    slug: "business-automation",
    icon: Settings2,
  },
  {
    title: "Cloud & Deployment",
    slug: "cloud-deployment",
    icon: Cloud,
  },
  {
    title: "Custom Software",
    slug: "custom-software",
    icon: Code2,
  },
  {
    title: "E-Commerce Solutions",
    slug: "ecommerce-solutions",
    icon: ShoppingCart,
  },
  {
    title: "SEO & Growth",
    slug: "seo-growth",
    icon: Search,
  },
];

// ======================================================
// SERVICE COMPONENT MAP
// ======================================================

const serviceComponents: Record<string, React.ReactNode> = {
  "web-development": <WebDevelopment />,
  "app-development": <AppDevelopment />,
  "ai-chatbots": <AIChatbots />,
  "ai-integration": <AIIntegration />,
  "billing-systems": <BillingSystems />,
  "business-automation": <BusinessAutomation />,
  "cloud-deployment": <CloudAndDeployment />,
  "custom-software": <CustomSoftware />,
  "ecommerce-solutions": <EcommerceSolutions />,
  "seo-growth": <SEOAndGrowth />,
};

// ======================================================
// SERVICES PAGE
// ======================================================

const Services = () => {
  const location = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);

  // --------------------------------------------------
  // Get selected service from URL
  // --------------------------------------------------

  const pathname = location.pathname;

  const selectedSlug = pathname.startsWith("/services/")
    ? pathname.split("/")[2]
    : null;

  const selectedService = selectedSlug ? serviceComponents[selectedSlug] : null;

  // Only one <h1> per page: when a service is open, that service page
  // has its own <h1>, so this heading becomes a <p> (same look).
  const Heading = selectedSlug ? "p" : "h1";

  // --------------------------------------------------
  // Animations
  // --------------------------------------------------

  // Scroll smoothly to the rendered component when a new one is selected
  useEffect(() => {
    if (selectedSlug && contentRef.current) {
      // Small delay to allow React to render the component first
      setTimeout(() => {
        contentRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Add a soft fade-in animation to the newly mounted component
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        );
      }, 50);
    }
  }, [selectedSlug]);

  return (
    <main className="min-h-screen bg-[#fafafa] font-['Sora',sans-serif] text-[#080808]">
      {/* ==================================================
          SEO (only for /services; each service page has its own)
      ================================================== */}

      {!selectedService && (
        <Seo
          title="Our Services"
          description="Web and app development, AI chatbots, AI integration, billing systems, automation, cloud deployment, e-commerce and SEO services from Zoidics in Chennai."
          url="https://zoidics.com/services"
        />
      )}

      {/* ==================================================
          SERVICE SELECTOR HERO
      ================================================== */}

      <section className="px-5 pt-32 pb-20 md:px-10 lg:px-16 flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#ffb646] rounded-full mix-blend-multiply opacity-[0.03] blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          {/* ----------------------------------------------
              HEADER
          ---------------------------------------------- */}
          <div className="mb-14 flex flex-col items-center">
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.2em] text-[#ff8a24]">
              Our Services
            </p>

            <Heading className="max-w-4xl text-[40px] font-bold leading-[1.1] tracking-tight md:text-[56px] lg:text-[64px] text-center">
              {/* Wraps "Digital" to properly anchor the orange circle */}
              <span className="relative z-10 inline-block">
                <span className="absolute -left-3 lg:-left-5 top-0 lg:top-1 w-[50px] h-[50px] md:w-[65px] md:h-[65px] lg:w-[75px] lg:h-[75px] bg-[#ffce85] rounded-full -z-10 mix-blend-multiply"></span>
                Digital
              </span>{" "}
              solutions built
              <br className="hidden md:block" /> around your business.
            </Heading>

            <p className="mt-6 max-w-2xl text-[16px] leading-[1.7] text-[#555] md:text-[18px]">
              Explore our services and discover the right technology solution
              for your business, product or idea.
            </p>
          </div>

          {/* ==================================================
              SERVICE PILL LINKS (real <a href> so Google can crawl them)
          ================================================== */}

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = selectedSlug === service.slug;

              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className={`
                    group flex items-center gap-3 rounded-full bg-white px-5 py-3.5
                    shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300
                    hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:border-[#080808]
                    cursor-pointer
                    
                    ${
                      isActive
                        ? "border-2 border-[#080808] scale-[1.02]"
                        : "border border-black/5"
                    }
                  `}
                >
                  {/* ICON */}
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#ff8a24] text-white"
                        : "bg-[#fff8ef] text-[#ff8a24] group-hover:bg-[#ff8a24] group-hover:text-white"
                    }`}
                  >
                    <Icon size={18} />
                  </span>

                  {/* TITLE */}
                  <span
                    className={`whitespace-nowrap cursor-pointer text-[15px] font-bold transition-colors ${
                      isActive
                        ? "text-[#ff8a24]"
                        : "text-[#080808] group-hover:text-[#ff8a24]"
                    }`}
                  >
                    {service.title}
                  </span>

                  {/* FLY IN/OUT ARROW ANIMATION */}
                  <div className="relative ml-1 flex h-4 w-4 overflow-hidden items-center justify-center cursor-pointer">
                    <ArrowUpRight
                      size={16}
                      strokeWidth={2.5}
                      className={`absolute transition-transform duration-300 ease-out group-hover:-translate-y-5 group-hover:translate-x-5 ${
                        isActive ? "text-[#ff8a24]" : "text-gray-300"
                      }`}
                    />
                    <ArrowUpRight
                      size={16}
                      strokeWidth={2.5}
                      className="absolute -translate-x-5 translate-y-5 text-[#ff8a24] transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          SELECTED SERVICE CONTENT
      ================================================== */}

      {selectedService && (
        <div ref={contentRef} className="w-full">
          {/* Subtle separator line to bridge the header and the content */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent mb-10"></div>

          <section key={selectedSlug} className="w-full">
            {selectedService}
          </section>
        </div>
      )}
    </main>
  );
};

export default Services;