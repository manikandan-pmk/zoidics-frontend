import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import image from "../assets/about.jpg";

gsap.registerPlugin(ScrollTrigger);

// --- Data Models ---
const whatWeDoList = [
  "Web Development",
  "Mobile App Development",
  "AI Integration",
  "AI Chatbots",
  "Business Automation",
  "SEO & Digital Solutions",
  "Custom Software",
  "API & System Integration",
];

const AboutPage: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // "Hide and Seek" Center Reveal Animation for Left Side (Image)
      gsap.fromTo(
        leftColRef.current,
        {
          clipPath: "inset(50% 50% 50% 50% round 24px)", // Hidden in exact center
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

      // Staggered Reveal for Right Side Content
      const textElements =
        rightColRef.current?.querySelectorAll(".animate-item");
      if (textElements) {
        gsap.fromTo(
          textElements,
          {
            y: 40,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
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
      className="w-full py-24 bg-[#ffe9d9] font-['Sora',sans-serif] overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-[1300px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* === Left Column: Image & Abstract Shape === */}
          <div
            ref={leftColRef}
            className="relative w-full flex justify-center lg:justify-start"
          >
            {/* Orange Abstract Pill Shape behind image */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[450px] h-[400px] sm:h-[500px] bg-[#ffb646] -z-10"
              style={{
                borderRadius: "200px",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Main Agency/Team Image */}
            <img
              src={image}
              alt="Zoidics Team"
              className="relative z-10 w-[85%] max-w-[420px] h-auto object-cover object-bottom rounded-xl filter drop-shadow-xl"
            />
          </div>

          {/* === Right Column: Content === */}
          <div
            ref={rightColRef}
            className="flex flex-col gap-6 w-full max-w-[620px]"
          >
            {/* Header Text */}
            <div className="animate-item">
              <p className="text-[#ff8a24] font-bold text-sm mb-3 uppercase tracking-widest">
                About Zoidics
              </p>
              <h2 className="text-[40px] md:text-[52px] lg:text-[56px] font-bold text-[#080808] leading-[1.1] tracking-tight mb-4 relative z-10">
                <span className="absolute top-1 -left-3 w-[60px] h-[60px] bg-[#ffb646] rounded-full mix-blend-multiply opacity-70 -z-10"></span>
                We Build Digital Solutions That Move Your Business Forward.
              </h2>
            </div>

            {/* Main Paragraphs */}
            <div className="animate-item flex flex-col gap-4 text-[#444] text-[16px] leading-[1.7] font-medium">
              <p>
                <strong className="text-[#080808]">Zoidics</strong> is a
                Chennai-based software development team helping businesses,
                startups, and individuals turn ideas into modern digital
                products. We specialize in Web Development, App Development, AI
                Integration, Chatbots, Automation, SEO, and Custom Software
                Solutions.
              </p>
              <p>
                From a simple business website to a complete web application,
                mobile app, AI-powered solution, or automated business workflow
                — we handle the journey from idea → design → development →
                deployment.
              </p>
            </div>

            {/* "What We Do" Grid */}
            <div className="animate-item mt-2">
              <h3 className="text-[20px] font-bold text-[#080808] mb-4">
                What We Do
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
                {whatWeDoList.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-[#ff8a24] shrink-0 mt-0.5"
                    />
                    <span className="text-[#080808] text-[15px] font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* "Our Approach" Callout Box */}
            <div className="animate-item bg-white/60 border-l-4 border-[#ff8a24] p-5 rounded-r-lg mt-4 shadow-sm">
              <h3 className="text-[18px] font-bold text-[#080808] mb-2">
                Our Approach
              </h3>
              <p className="text-[#555] text-[15px] leading-[1.6]">
                We focus on building solutions that are simple, scalable,
                secure, and easy to use. We understand your business
                requirements, plan the right solution, develop it with modern
                technologies, and help you take it live.
              </p>
            </div>

            {/* Tagline & Button Area */}
            <div className="animate-item flex flex-col sm:flex-row sm:items-center justify-between gap-8 mt-4 pt-4 border-t border-black/10">
              {/* Tagline */}
              <div className="text-[18px] font-bold text-[#080808] leading-tight max-w-[200px]">
                Your idea. <br />
                <span className="text-[#ff8a24]">Our technology.</span> <br />
                Built for what's next.
              </div>

              {/* Fly In / Out Animated Button */}
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-4 bg-[#080808] text-white px-8 py-4 rounded-lg font-bold text-[15px] overflow-hidden transition-colors hover:bg-[#1a1a1a] shadow-lg shrink-0"
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
                    className="absolute text-[#ffb646] -translate-x-6 translate-y-6 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
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

export default AboutPage;
