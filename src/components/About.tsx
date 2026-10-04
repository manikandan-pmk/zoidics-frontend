import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // "Hide and Seek" Center Reveal Animation for Left Side (Image)
      gsap.fromTo(
        leftColRef.current,
        {
          clipPath: "inset(50% 50% 50% 50% round 24px)", // Hidden in the exact center
          scale: 0.8,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          clipPath: "inset(0% 0% 0% 0% round 24px)", // Fully revealed
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
        },
      );

      // "Hide and Seek" Staggered Center Reveal for Right Side (Text & Stats)
      const textElements =
        rightColRef.current?.querySelectorAll(".animate-item");
      if (textElements) {
        gsap.fromTo(
          textElements,
          {
            clipPath: "inset(50% 0% 50% 0%)", // Hidden vertically in center
            opacity: 0,
            y: 20,
          },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 bg-white font-['Sora',sans-serif] overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-[1300px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* === Left Column: Image & Abstract Shape === */}
          <div
            ref={leftColRef}
            className="relative w-full flex justify-center lg:justify-start"
          >
            {/* Black Abstract Pill Shape */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[400px] h-[450px] sm:h-[550px] bg-[#080808] -z-10"
              style={{
                borderRadius: "200px",
                transform: "translate(-50%, -50%) rotate(-25deg)",
              }}
            />

            {/* Main Team/Agency Image */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=100&w=500&h=650"
              alt="Zoidics Team"
              className="relative z-10 w-[85%] max-w-[420px] h-auto object-cover object-bottom filter drop-shadow-2xl rounded-2xl"
            />

            {/* Floating Experience Badge */}
            <div className="absolute bottom-10 right-0 sm:right-[-20px] lg:right-10 z-20 flex flex-col items-start gap-1">
              <div className="w-[85px] h-[85px] bg-[#ffb646] rounded-full flex items-center justify-center text-4xl font-bold text-[#080808] shadow-lg">
                2+
              </div>
              <div
                className="text-[32px] leading-[1.1] font-bold text-transparent tracking-wide uppercase"
                style={{ WebkitTextStroke: "1.5px #b0b0b0" }}
              >
                Years of <br /> experience
              </div>
            </div>
          </div>

          {/* === Right Column: Content === */}
          <div
            ref={rightColRef}
            className="flex flex-col gap-8 w-full max-w-[600px] lg:pl-4"
          >
            {/* Headlines */}
            <div className="animate-item">
              <p className="text-[#ff8a24] font-bold tracking-widest uppercase text-sm mb-4">
                Hello, We're
              </p>
              <h2 className="text-[48px] lg:text-[60px] font-bold text-[#080808] leading-[1.1] tracking-tight relative z-10">
                {/* Orange highlight circle directly behind 'Z' */}
                <span className="absolute top-2 -left-4 w-[65px] h-[65px] bg-[#ffb646] rounded-full mix-blend-multiply opacity-90 -z-10"></span>
                ZOIDICS, <br />
                Your Digital <br />
                Growth Partner
              </h2>
            </div>

            {/* Description Paragraph */}
            <p className="animate-item text-[#666666] text-[17px] leading-[1.8] font-medium">
              Have a business idea? We help you turn it into a digital product
              that works for your customers and your business. From websites and
              apps to custom software, we build solutions designed around your
              goals.
            </p>

            {/* Stats Row (Updated for Agency Context) */}
            <div className="animate-item flex items-center justify-between w-full max-w-[480px] py-4 border-t border-gray-100 mt-2">
              <div className="flex flex-col gap-1">
                <span className="text-[32px] font-bold text-[#080808]">
                  40+
                </span>
                <span className="text-[13px] text-gray-500 font-semibold uppercase tracking-wider">
                  Projects Delivered
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[32px] font-bold text-[#080808]">
                  25+
                </span>
                <span className="text-[13px] text-gray-500 font-semibold uppercase tracking-wider">
                  Happy Clients
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[32px] font-bold text-[#080808]">
                  100%
                </span>
                <span className="text-[13px] text-gray-500 font-semibold uppercase tracking-wider">
                  Satisfaction
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="animate-item mt-2">
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-4 bg-[#080808] text-white px-8 py-5 rounded-md font-medium text-[16px] overflow-hidden transition-colors hover:bg-[#ffb646] hover:text-[#080808]"
              >
                Get in Touch
                {/* Arrow Hide/Seek Hover Animation */}
                <div className="relative w-5 h-5 overflow-hidden flex items-center justify-center">
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

export default About;
