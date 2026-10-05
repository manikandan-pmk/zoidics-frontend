import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- High-Quality Official Brand SVGs & Unique Icons ---
const icons = {
  next: (
    <svg viewBox="0 0 128 128" className="w-8 h-8">
      <circle cx="64" cy="64" r="64" fill="#000" />
      <path
        d="M42.4 88.6V39.4h11.1l32 51.5v.2h-11v-50H85.3L53.2 37.1v-.2h11v51.7H42.4z"
        fill="#FFF"
      />
    </svg>
  ),
  reactNative: (
    <svg viewBox="-11.5 -10.2 23 20.4" className="w-8 h-8 text-[#61dafb]">
      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  node: (
    <svg viewBox="0 0 128 128" className="w-8 h-8">
      <path
        fill="#339933"
        d="M64 4.5l56 31.9v63.7L64 123.5l-56-31.9V36.4L64 4.5zm0 10.3l-47 26.8v53.5l47 26.8 47-26.8V41.6L64 14.8z"
      />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 128 128" className="w-8 h-8">
      <path
        fill="#3776AB"
        d="M63.9 4.3c-28.7 0-27.4 12.5-27.4 12.5l.1 12.8h27.8v4H36.6S22 32.2 22 55.6c0 23.3 12 22.3 12 22.3h6v-10.7s-.2-12.7 12.6-12.7h28.1s11.5-.4 11.5-11.7V25s1.2-20.7-28.3-20.7zM50.8 13.5c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5z"
      />
      <path
        fill="#FFD43B"
        d="M64.6 123.7c28.7 0 27.4-12.5 27.4-12.5l-.1-12.8H64.1v-4h27.8s14.6 1.4 14.6-22c0-23.3-12-22.3-12-22.3h-6v10.7s.2 12.7-12.6 12.7H47.8s-11.5.4-11.5 11.7v18.1s-1.2 20.7 28.3 20.7zm13.1-9.2c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"
      />
    </svg>
  ),
  postgres: (
    <svg viewBox="0 0 128 128" className="w-8 h-8">
      <path
        fill="#336791"
        d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm25.9 89.9c-4.2 3.1-12.2 6.5-25.9 6.5-18.1 0-31.5-7.7-31.5-24 0-14.8 12.3-22.2 29.5-22.2 4.7 0 8.9.5 12.4 1.4V46.5c0-10.4-7.5-15.6-21.5-15.6-6.8 0-14 1.8-19.8 4.7l-2.3-8.8c7.1-3.6 16.4-5.6 25.8-5.6 19.8 0 32.5 9.4 32.5 27.1v40.8z"
      />
    </svg>
  ),
  ai: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8 text-[#10a37f]"
    >
      <path d="M12 2a10 10 0 0 1 7.54 16.63l1.19 2.54a1 1 0 0 1-1.32 1.32l-2.54-1.19A10 10 0 1 1 12 2z" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  ),
  payments: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8 text-[#635bff]"
    >
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  ),
  aws: (
    <div className="text-[#FF9900] font-bold text-[18px] tracking-tighter leading-none">
      aws
    </div>
  ),
  automation: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8 text-[#ff6d00]"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
};

const technologies = [
  {
    id: 1,
    name: "Next.js",
    category: "Full-Stack Web",
    icon: icons.next,
    color: "hover:border-black hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]",
  },
  {
    id: 2,
    name: "React Native",
    category: "Mobile Apps",
    icon: icons.reactNative,
    color:
      "hover:border-[#61dafb] hover:shadow-[0_10px_30px_rgba(97,218,251,0.2)]",
  },
  {
    id: 3,
    name: "Node.js",
    category: "Backend Engine",
    icon: icons.node,
    color:
      "hover:border-[#339933] hover:shadow-[0_10px_30px_rgba(51,153,51,0.2)]",
  },
  {
    id: 4,
    name: "Python",
    category: "AI & Backend",
    icon: icons.python,
    color:
      "hover:border-[#3776AB] hover:shadow-[0_10px_30px_rgba(55,118,171,0.2)]",
  },
  {
    id: 5,
    name: "PostgreSQL",
    category: "Database",
    icon: icons.postgres,
    color:
      "hover:border-[#336791] hover:shadow-[0_10px_30px_rgba(51,103,145,0.2)]",
  },
  {
    id: 6,
    name: "OpenAI / Claude",
    category: "AI Integration",
    icon: icons.ai,
    color:
      "hover:border-[#10a37f] hover:shadow-[0_10px_30px_rgba(16,163,127,0.2)]",
  },
  {
    id: 7,
    name: "Stripe / Razorpay",
    category: "Secure Billing",
    icon: icons.payments,
    color:
      "hover:border-[#635bff] hover:shadow-[0_10px_30px_rgba(99,91,255,0.2)]",
  },
  {
    id: 8,
    name: "AWS Infrastructure",
    category: "Cloud & DevOps",
    icon: icons.aws,
    color:
      "hover:border-[#FF9900] hover:shadow-[0_10px_30px_rgba(255,153,0,0.2)]",
  },
  {
    id: 9,
    name: "n8n / Zapier",
    category: "Automation",
    icon: icons.automation,
    color:
      "hover:border-[#ff6d00] hover:shadow-[0_10px_30px_rgba(255,109,0,0.2)]",
  },
];

const TechStack: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const pillsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered Entrance Animation
      gsap.fromTo(
        ".tech-pill",
        { y: 50, opacity: 0, scale: 0.85 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.06,
          ease: "back.out(1.4)",
        },
      );

      // Continuous Organic Floating Loop
      pillsRef.current.forEach((pill) => {
        if (!pill) return;
        gsap.to(pill, {
          y: -5,
          duration: 1.8 + Math.random() * 0.8,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: Math.random() * 2,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full py-24 lg:py-32 bg-[#fafafa] font-['Sora',sans-serif] relative overflow-hidden"
    >
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffb646] rounded-full mix-blend-multiply opacity-5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-[1300px] relative z-10">
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[#ff8a24] font-bold text-[14px] tracking-[0.2em] uppercase mb-3">
            Our Stack
          </span>
          <h2 className="text-[40px] lg:text-[56px] font-bold text-[#080808] leading-[1.1] tracking-tight relative inline-block z-10">
            <span className="absolute top-[10%] left-[-4%] w-[55px] h-[55px] bg-[#ffb646] rounded-full mix-blend-multiply opacity-40 -z-10" />
            Built With Modern Technology
          </h2>
          <p className="text-[#666] text-[16px] max-w-[600px] mt-4 leading-relaxed">
            We use a robust, production-tested tech stack tailored for
            scalability, high security, and lightning-fast performance[cite: 3].
          </p>
        </div>

        {/* Floating Technology Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 max-w-[1050px] mx-auto">
          {technologies.map((tech, i) => (
            <div
              key={tech.id}
              ref={(el) => {
                pillsRef.current[i] = el;
              }}
              className={`tech-pill group relative flex items-center gap-4 bg-white p-5 rounded-[20px] shadow-[0_4px_25px_-8px_rgba(0,0,0,0.06)] border border-black/[0.05] cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 ${tech.color}`}
            >
              {/* Icon Container with Pop Effect */}
              <div className="w-14 h-14 rounded-[14px] bg-[#fdfaf6] border border-black/[0.03] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </div>

              {/* Text Meta */}
              <div className="flex flex-col">
                <span className="text-[12px] font-semibold text-[#888] uppercase tracking-wider mb-0.5">
                  {tech.category}
                </span>
                <span className="text-[17px] font-bold text-[#080808] group-hover:text-[#ff8a24] transition-colors">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
