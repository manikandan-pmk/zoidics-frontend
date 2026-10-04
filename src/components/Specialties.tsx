import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Globe,
  Smartphone,
  Bot,
  MessageSquare,
  Settings,
  TrendingUp,
  ShoppingCart,
  Cloud,
  CodeXml,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Helper to assign icons based on dynamic service name
const getIconForService = (name: string) => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes("web"))
    return <Globe size={18} strokeWidth={2} className="text-[#8b5cf6]" />;
  if (lowerName.includes("app"))
    return <Smartphone size={18} strokeWidth={2} className="text-[#6366f1]" />;
  if (lowerName.includes("chatbot"))
    return (
      <MessageSquare size={18} strokeWidth={2} className="text-[#4338ca]" />
    );
  if (lowerName.includes("e-commerce"))
    return (
      <ShoppingCart size={18} strokeWidth={2} className="text-[#14b8a6]" />
    );
  if (lowerName.includes("integration"))
    return <Bot size={18} strokeWidth={2} className="text-[#a21caf]" />;
  if (lowerName.includes("automation"))
    return <Settings size={18} strokeWidth={2} className="text-[#be123c]" />;
  if (lowerName.includes("seo") || lowerName.includes("growth"))
    return <TrendingUp size={18} strokeWidth={2} className="text-[#0369a1]" />;
  if (lowerName.includes("cloud"))
    return <Cloud size={18} strokeWidth={2} className="text-[#6d28d9]" />;
  return <CodeXml size={18} strokeWidth={2} className="text-[#1d4ed8]" />; // Default icon
};

const DesktopServicePill = ({
  service,
  extraClass = "",
}: {
  service: any;
  extraClass?: string;
}) => (
  <article
    className={`desktop-pill opacity-0 bg-white rounded-full flex items-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] w-[260px] lg:w-[280px] h-[72px] overflow-hidden group hover:scale-[1.03] hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.12)] transition-all duration-300 z-10 cursor-pointer ${extraClass}`}
  >
    <div className="flex items-center flex-1 pl-2 py-2 relative z-20 bg-white h-full rounded-l-full">
      <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center shrink-0 bg-white shadow-sm">
        {service.icon}
      </div>
      <div className="ml-3 flex-1">
        <h3 className="font-bold text-[#080808] text-[13px] leading-[1.2] whitespace-pre-line">
          {service.title}
        </h3>
      </div>
    </div>

    <div className="w-[100px] h-full relative shrink-0">
      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />
      <img
        src={service.img}
        alt={service.title.replace("\n", " ")}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          // Fallback image in case backend image is broken
          (e.target as HTMLImageElement).src =
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=200";
        }}
      />
    </div>
  </article>
);

const Specialties: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // State variables for dynamic data
  const [allServices, setAllServices] = useState<any[]>([]);
  const [groupedServices, setGroupedServices] = useState<any>({
    top: [],
    left: [],
    right: [],
    bottom: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch Services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Use relative path to leverage Vite Proxy (CORS fix)
        const response = await axios.get("/api/services");

        if (response.data.success) {
          const fetchedData = response.data.services;

          // Transform backend data to frontend format
          const formattedServices = fetchedData.map((s: any) => ({
            id: s.id,
            // Replace first space with newline for stacked text look
            title: s.name.replace(" ", "\n"),
            icon: getIconForService(s.name),
            // Ensure image URL points to the backend server if it's a relative upload path
            img: s.imageUrl
              ? s.imageUrl.startsWith("/")
                ? `http://localhost:3000${s.imageUrl}`
                : s.imageUrl
              : "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=200",
          }));

          setAllServices(formattedServices);

          // Distribute into layout groups safely
          setGroupedServices({
            top: formattedServices.slice(0, 1),
            left: formattedServices.slice(1, 4),
            right: formattedServices.slice(4, 7),
            bottom: formattedServices.slice(7, 9),
          });
        }
      } catch (err) {
        console.error("Error fetching services:", err);
        setError(
          "Failed to load services. Please ensure the backend is running.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Run GSAP Animations ONLY after data is loaded
  useEffect(() => {
    if (loading || error || allServices.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".header-anim",
        { y: 30, opacity: 0 },
        {
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        ".center-logo",
        { scale: 0.5, opacity: 0 },
        {
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.7)",
        },
      );

      gsap.fromTo(
        ".desktop-pill",
        { y: 30, opacity: 0, scale: 0.9 },
        {
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.5)",
          delay: 0.2,
        },
      );

      gsap.fromTo(
        ".mobile-circle-node",
        { opacity: 0, scale: 0 },
        {
          scrollTrigger: {
            trigger: ".mobile-orbit-container",
            start: "top 80%",
          },
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.5)",
          delay: 0.3,
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [loading, error, allServices]);

  if (loading) {
    return (
      <div className="min-h-[850px] w-full flex items-center justify-center bg-[#fafafa]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ff8a24]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[850px] w-full flex items-center justify-center bg-[#fafafa]">
        <p className="text-red-500 font-medium">{error}</p>
      </div>
    );
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="specialties-heading"
      className="relative w-full py-16 lg:py-24 bg-[#fafafa] font-['Sora',sans-serif] overflow-hidden flex flex-col items-center justify-center min-h-[850px]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1400px]">
        {/* Header Section */}
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24 gap-6 relative z-20">
          <div className="header-anim relative z-10 lg:w-1/2">
            <p className="text-[#ff8a24] font-bold text-[14px] lg:text-[16px] mb-2 tracking-wide uppercase">
              Services
            </p>
            <h2
              id="specialties-heading"
              className="text-[40px] sm:text-[48px] lg:text-[64px] font-bold text-[#080808] leading-[1.1] relative inline-block tracking-tight"
            >
              <span
                className="absolute top-1 lg:top-2 -left-3 w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] bg-[#ffb646] rounded-full mix-blend-multiply opacity-90 -z-10"
                aria-hidden="true"
              ></span>
              Our specialties
            </h2>
          </div>
          <div className="header-anim lg:w-[45%] lg:pb-3">
            <p className="text-[#666666] text-[15px] lg:text-[16px] leading-[1.8] font-medium">
              Synergistically seize front-end methods of empowerment without
              extensive core competencies. Progressively repurpose alternative
              platforms.
            </p>
          </div>
        </header>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] gap-4 items-center justify-center relative z-10">
          <div className="flex flex-col gap-10 w-full items-end pr-4">
            {groupedServices.left?.map((service: any, index: number) => (
              <DesktopServicePill
                key={service.id}
                service={service}
                extraClass={index === 1 ? "-mr-12" : "mr-0"}
              />
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-14 w-[450px]">
            <div className="flex w-full justify-center">
              {groupedServices.top?.map((service: any) => (
                <DesktopServicePill key={service.id} service={service} />
              ))}
            </div>

            <div className="center-logo relative flex items-center justify-center w-[260px] h-[100px] z-30 pointer-events-none drop-shadow-sm">
              <img
                src="/logo.png"
                alt="Zoidics Software Solution Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-row gap-8 items-center justify-center w-full">
              {groupedServices.bottom?.map((service: any) => (
                <DesktopServicePill key={service.id} service={service} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10 w-full items-start pl-4">
            {groupedServices.right?.map((service: any, index: number) => (
              <DesktopServicePill
                key={service.id}
                service={service}
                extraClass={index === 1 ? "-ml-12" : "ml-0"}
              />
            ))}
          </div>
        </div>

        {/* MOBILE ORBIT LAYOUT */}
        <div className="mobile-orbit-container flex lg:hidden relative w-full h-[400px] sm:h-[500px] items-center justify-center mt-8">
          <div className="center-logo z-20 w-[140px] sm:w-[180px] bg-white rounded-3xl p-4 shadow-xl border border-gray-100 flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Zoidics Software Solution Logo"
              className="w-full h-auto object-contain"
            />
          </div>

          {allServices.map((service: any, index: number) => {
            const angle = (index * 360) / allServices.length;
            return (
              <div
                key={service.id}
                className="absolute w-full h-full flex items-center justify-center pointer-events-none"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <div
                  className="pointer-events-auto"
                  style={{
                    transform: `translateY(clamp(-220px, -35vw, -160px)) rotate(-${angle}deg)`,
                  }}
                >
                  <article
                    className="mobile-circle-node flex flex-col items-center justify-center w-[75px] sm:w-[90px] gap-2 cursor-pointer group"
                    aria-label={service.title.replace("\n", " ")}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full shadow-[0_8px_20px_-6px_rgba(0,0,0,0.15)] border border-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-center leading-tight text-gray-800 drop-shadow-sm">
                      {service.title.replace("\n", " ")}
                    </span>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
