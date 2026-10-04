import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import hero from "../assets/hero.png"; // Tumhara local image import

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text fade-in animation
      gsap.from(".animate-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });

      // Background organic blobs scaling in
      gsap.from(".animate-blob", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Main image sliding in softly
      gsap.from(imageRef.current, {
        x: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.6,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      // Exact Peach background matching the reference
      className="relative w-full min-h-screen bg-[#fff3ea] overflow-hidden flex items-center font-['Sora',sans-serif] pt-[80px]"
    >
      {/* Decorative Dotted Grid Pattern at bottom left */}
      <div
        className="absolute bottom-10 left-10 w-48 h-48 opacity-30 pointer-events-none z-0 hidden lg:block"
        style={{
          backgroundImage: "radial-gradient(#000 2px, transparent 2px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* === Organic Concentric Waves Background (Right Side) === */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0 flex items-center justify-end">
        {/* Outer Faint Line */}
        <div className="animate-blob absolute right-[-20%] w-[120vh] h-[120vh] border-[1.5px] border-[#ffb646]/30 rounded-full" />
        {/* Inner Distinct Line */}
        <div className="animate-blob absolute right-[-10%] w-[100vh] h-[100vh] border-[1.5px] border-[#ffb646]/60 rounded-full" />
        {/* Solid Yellow Blob */}
        <div className="animate-blob absolute right-[-5%] w-[85vh] h-[85vh] bg-[#ffb646] rounded-full shadow-2xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between relative z-10 h-full py-12 lg:py-0">
        {/* === Left Column: Text Content === */}
        <div ref={textRef} className="w-full lg:w-[50%] pt-12 lg:pt-0 z-20">
          <div className="animate-text flex items-center gap-4 mb-6">
            <span className="w-12 h-[1.5px] bg-[#080808]"></span>
            <span className="text-[15px] font-bold tracking-widest text-[#080808] uppercase">
              WE'RE ZOIDICS ✌️
            </span>
          </div>

          <h1 className="animate-text text-[clamp(48px,5.5vw,90px)] font-bold leading-[1.05] tracking-tight text-[#080808] mb-6 relative z-10">
            {/* Orange Highlight Circle Behind 'W' */}
            <div className="absolute -z-10 top-[2%] left-[1%] w-[65px] h-[65px] lg:w-[85px] lg:h-[85px] bg-[#ffb646] rounded-full mix-blend-multiply opacity-90" />
            We Turn Ideas <br /> Into Digital <br /> Products.
          </h1>

          <p className="animate-text text-base lg:text-lg text-black/60 font-medium mb-10 leading-relaxed max-w-[500px]">
            We design and develop high-performance web applications, mobile
            apps, SaaS platforms, and custom software built around real business
            needs.
          </p>

          <div className="animate-text flex flex-wrap gap-4 mb-16">
            <a
              href="/contact"
              className="group flex items-center gap-3 bg-[#080808] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#ffb646] hover:text-[#080808] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Let's Talk
              <div className="relative w-5 h-5 overflow-hidden flex items-center justify-center shrink-0">
                <ArrowUpRight
                  size={18}
                  strokeWidth={2}
                  className="absolute transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:-translate-y-6"
                />
                <ArrowUpRight
                  size={18}
                  strokeWidth={2}
                  className="absolute -translate-x-6 translate-y-6 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 text-[#080808]"
                />
              </div>
            </a>

            <a
              href="/projects"
              className="group flex items-center gap-3 bg-transparent border-[1.5px] border-black/15 text-[#080808] px-8 py-4 rounded-lg font-medium hover:border-[#080808] transition-all duration-300"
            >
              My Work
              <div className="relative w-5 h-5 overflow-hidden flex items-center justify-center shrink-0">
                <ArrowUpRight
                  size={18}
                  strokeWidth={2}
                  className="absolute transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:-translate-y-6"
                />
                <ArrowUpRight
                  size={18}
                  strokeWidth={2}
                  className="absolute text-[#ffb646] -translate-x-6 translate-y-6 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </div>
            </a>
          </div>
        </div>

        {/* === Right Column: Image === */}
        <div
          ref={imageRef}
          className="w-full lg:w-[50%] relative mt-16 lg:mt-0 flex justify-center lg:justify-end items-center lg:pr-6"
        >
          {/* Main Hero Image from local assets */}
          <img
            src={hero}
            alt="Zoidics Digital Development"
            className="w-[95%] max-w-[650px] h-auto object-cover relative z-10 rounded-[24px] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
