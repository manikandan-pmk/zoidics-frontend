import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CallToAction: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth slide-up entrance for the entire banner
      gsap.fromTo(
        bannerRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full py-16 lg:py-24 bg-[#ffe9d9] font-['Sora',sans-serif]"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        {/* Banner Wrapper (Holds the absolute orange corner shapes) */}
        <div ref={bannerRef} className="relative w-full z-10">
          {/* Decorative Orange Accents behind the main black banner[cite: 27] */}
          {/* Top Left Mini Tab */}
          <div className="absolute -top-3 left-12 w-24 h-10 bg-[#ffb646] rounded-t-3xl -z-10" />
          {/* Bottom Left Corner */}
          <div className="absolute -bottom-4 -left-3 w-24 h-24 bg-[#ffb646] rounded-bl-3xl -z-10" />
          {/* Top Right Corner */}
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#ffb646] rounded-tr-3xl -z-10" />

          {/* Main Black Banner */}
          <div className="w-full bg-[#080808] rounded-[24px] lg:rounded-[32px] px-8 py-10 lg:px-12 lg:py-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-10 xl:gap-6 shadow-2xl">
            {/* 1. Headline */}
            <div className="flex-shrink-0">
              <h2 className="text-[36px] md:text-[44px] font-bold leading-[1.1] tracking-tight">
                <span className="text-[#ffb646]">Have an idea</span>
                <br />
                <span className="text-white">worth building?</span>
              </h2>
            </div>

            {/* 2. Description Text */}
            <div className="flex-1 max-w-lg xl:max-w-[380px]">
              <p className="text-white/70 text-[15px] lg:text-[16px] leading-[1.7] font-medium">
                Tell us about your project. We'll help you turn it into a clear
                plan and a successful product.
              </p>
            </div>

            {/* 3. Email Link */}
            <div className="flex-shrink-0 xl:ml-auto">
              <a
                href="mailto:connect@zoidics.com"
                className="group flex items-center gap-3 text-[#ffb646] text-[17px] font-semibold transition-colors hover:text-white"
              >
                connect@zoidics.com
                {/* Fly In / Fly Out Hover Arrow for Email */}
                <div className="relative overflow-hidden w-5 h-5 flex items-center justify-center shrink-0">
                  <ArrowUpRight
                    size={20}
                    strokeWidth={2.5}
                    className="absolute transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:-translate-y-6"
                  />
                  <ArrowUpRight
                    size={20}
                    strokeWidth={2.5}
                    className="absolute text-white -translate-x-6 translate-y-6 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                  />
                </div>
              </a>
            </div>

            {/* 4. CTA Button */}
            <div className="flex-shrink-0">
              <a
                href="/contact"
                className="group flex items-center gap-3 bg-white text-[#080808] px-8 py-5 rounded-xl font-bold text-[16px] transition-all duration-300 hover:bg-[#ffb646]"
              >
                Start a Conversation
                {/* Fly In / Fly Out Hover Arrow for Button */}
                <div className="relative overflow-hidden w-5 h-5 flex items-center justify-center shrink-0">
                  <ArrowUpRight
                    size={20}
                    strokeWidth={2.5}
                    className="absolute transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:-translate-y-6"
                  />
                  <ArrowUpRight
                    size={20}
                    strokeWidth={2.5}
                    className="absolute text-[#080808] -translate-x-6 translate-y-6 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
