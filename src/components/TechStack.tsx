import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- High-Quality Official Brand SVGs ---
const icons = {
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
  mysql: (
    <svg viewBox="0 0 128 128" className="w-8 h-8">
      <path
        fill="#00758F"
        d="M109.5 88.5c-3.1 8-15.3 17.5-35.3 22-17.7 4-43.2 4-55.5-3.5C6.4 99.5 0 88 0 74c0-10.5 5.3-22.5 14-31 10.4-10.2 25.4-17.3 40-20.5 15.6-3.4 35.8-3.4 49 1.5 12.4 4.5 21 14 24 26 2.5 10 1.5 23-5.5 32-1.7 2.2-4.1 4.5-6.5 6.5-1.5-1.8-3-3.6-4.5-5.5 2.1-1.6 4-3.5 5.5-5.5 5.5-7.5 6.4-18.5 4-27-2.6-10-10.4-17.5-21.5-21.5-12.5-4.4-31.4-4.5-45.5-1.5-13.6 3-27.6 9.5-37 18.5-7.5 7.5-12 17.5-12 26.5 0 11.5 5.5 21 15.5 27 10.6 6.5 33 6.5 49 3 17.5-3.8 28.5-12 31-18.5 1.5-3.6 1.8-6.5 1.8-10.5h-50v14h36.5c-1 8.5-6.5 17-15 22.5-9.5 6-23.5 8.5-34.5 7-12-1.5-22.5-7.5-28.5-16.5-5.5-8.5-6.5-18.5-3.5-27.5 3.5-10.5 12.5-20 23.5-26 11.5-6.5 26.5-9.5 39.5-8 12.5 1.5 23 7.5 29 16.5 2.1-1.5 4.3-3 6.5-4.5-7-10.5-19.5-17.5-33.5-19-14.5-1.5-31 1.5-44 9C24 43 14 54.5 10 66.5c-4 11-2.5 23 4 33 6.5 10.5 19 17.5 32.5 19.5 13 .2 29-2.5 41-10.5 11-7.5 18-18.5 19-31 .2-4.5 0-9.2-1.5-13.5z"
      />
      <path
        fill="#F29111"
        d="M109.5 88.5c1.5 1.8 3 3.6 4.5 5.5 2.4-2 4.8-4.3 6.5-6.5 7-9 8-22 5.5-32-3-12-11.6-21.5-24-26-13.2-4.9-33.4-4.9-49-1.5-14.6 3.2-29.6 10.3-40 20.5C4.3 57 0 69 0 80c0 14 6.4 25.5 18.7 33 12.3 7.5 37.8 7.5 55.5 3.5 20-4.5 32.2-14 35.3-22-2.2 1.5-4.4 3-6.5 4.5-6 9-16.5 15-29 16.5-13 1.5-28 4.5-39.5 8-11 6-20 15.5-23.5 26-3 9-2 19 3.5 27.5 6 9 16.5 15 28.5 16.5 11 1.5 25-1 34.5-7 8.5-5.5 14-14 15-22.5H62v-14h50c0 4-.3 6.9-1.8 10.5-2.5 6.5-13.5 14.7-31 18.5-16 3.5-38.4 3.5-49-3-10-6-15.5-15.5-15.5-27 0-9 4.5-19 12-26.5 9.4-9 23.4-15.5 37-18.5 14.1-3 33-3 45.5 1.5 11.1 4 18.9 11.5 21.5 21.5 2.4 8.5 1.5 19.5-4 27-1.5 2-3.4 3.9-5.5 5.5z"
      />
    </svg>
  ),
  typeorm: (
    <svg viewBox="0 0 128 128" className="w-8 h-8">
      <path
        fill="#E535AB"
        d="M64 0L6 33.5v61L64 128l58-33.5v-61L64 0zm0 13.5l46.5 26.8L64 67.2 17.5 40.3 64 13.5zm-5.5 101L17.5 91v-40l41 23.6v40zM70 114.5v-40l40.5-23.6v40L70 114.5z"
      />
      <path fill="#FFF" d="M43.5 40.5h41v8h-16v33h-9v-33h-16v-8z" />
    </svg>
  ),
  prisma: (
    <svg viewBox="0 0 128 128" className="w-8 h-8">
      <path
        fill="#2D3748"
        d="M30 102.5l34 19.5 34-19.5v-77L64 6l-34 19.5v77z"
      />
      <path fill="#FFF" d="M64 14l24 67H40l24-67zm0 16.5L48 76h32L64 30.5z" />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 128 128" className="w-8 h-8">
      <path fill="#3178C6" d="M6 6h116v116H6z" />
      <path
        fill="#FFF"
        d="M68 62.5c1-1.9 2.5-3.3 4.5-4.2 2-1 4.4-1.4 7-1.4 3.3 0 6 .7 8 2 2.1 1.4 3.7 3.3 4.7 5.7l-8.2 4.8c-.6-1.3-1.4-2.3-2.6-3-1.1-.6-2.4-1-3.9-1-2.2 0-3.9.5-5 1.4-1.1 1-1.7 2.2-1.7 3.8 0 1.1.4 2.1 1.1 3 .8.8 1.7 1.5 3 2 1.2.4 2.7 1 4.5 1.5 2.5.7 4.8 1.5 6.9 2.4 2 .9 3.8 2 5.2 3.5 1.4 1.5 2.4 3.2 3 5.2.6 2 .9 4.2.9 6.8 0 3.2-.7 6.1-2 8.7-1.4 2.5-3.3 4.7-5.8 6.4-2.4 1.7-5.3 2.9-8.6 3.6-3.3.8-6.8 1.1-10.5 1.1-3.8 0-7.4-.5-10.7-1.6-3.3-1.1-6.2-2.7-8.7-4.7-2.5-2-4.5-4.5-5.9-7.4l8.8-5.2c1 1.9 2.2 3.5 3.8 4.7 1.6 1.2 3.4 2.1 5.5 2.6 2 .5 4.2.7 6.4.7 2.6 0 4.6-.5 6.2-1.4 1.5-1 2.3-2.3 2.3-4.1 0-1.1-.4-2.1-1.1-2.9-.7-.8-1.7-1.5-3-1.9-1.2-.5-2.8-1-4.6-1.4-2.5-.6-4.7-1.4-6.8-2.3-2.1-.9-3.8-2.1-5.2-3.5-1.4-1.4-2.5-3.2-3.1-5.2-.6-2-.9-4.2-.9-6.7 0-3 .7-5.8 2.1-8.3zm-46 5h33v9.5h-11.5v40H33.5v-40H22v-9.5z"
      />
    </svg>
  ),
  react: (
    <svg viewBox="-11.5 -10.2 23 20.4" className="w-8 h-8 text-[#61dafb]">
      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  next: (
    <svg viewBox="0 0 128 128" className="w-8 h-8">
      <circle cx="64" cy="64" r="64" fill="#000" />
      <path
        d="M42.4 88.6V39.4h11.1l32 51.5v.2h-11v-50H85.3L53.2 37.1v-.2h11v51.7H42.4z"
        fill="#FFF"
      />
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
  aws: (
    <div className="text-[#FF9900] font-bold text-[22px] leading-none">aws</div>
  ),
  tailwind: (
    <svg viewBox="0 0 128 128" className="w-8 h-8">
      <path
        fill="#06B6D4"
        d="M30 64c-8 0-13 4-15 12 3-4 6.5-5.5 11-4.5 2.7.6 4.6 2.6 6.8 4.7 5.9 5.9 13.1 13.6 27.3 13.6 8 0 13-4 15-12-3 4-6.5 5.5-11 4.5-2.7-.6-4.6-2.6-6.8-4.7C51.4 71.7 44.2 64 30 64zm20-28c-8 0-13 4-15 12 3-4 6.5-5.5 11-4.5 2.7.6 4.6 2.6 6.8 4.7 5.9 5.9 13.1 13.6 27.3 13.6 8 0 13-4 15-12-3 4-6.5 5.5-11 4.5-2.7-.6-4.6-2.6-6.8-4.7-5.8-5.9-13-13.6-27.3-13.6z"
      />
    </svg>
  ),
};

const technologies = [
  {
    id: 1,
    name: "Python",
    icon: icons.python,
    color: "hover:border-[#3776AB] hover:shadow-[#3776AB]/20",
  },
  {
    id: 2,
    name: "MySQL",
    icon: icons.mysql,
    color: "hover:border-[#00758F] hover:shadow-[#00758F]/20",
  },
  {
    id: 3,
    name: "TypeORM",
    icon: icons.typeorm,
    color: "hover:border-[#E535AB] hover:shadow-[#E535AB]/20",
  },
  {
    id: 4,
    name: "Prisma",
    icon: icons.prisma,
    color: "hover:border-[#2D3748] hover:shadow-[#2D3748]/20",
  },
  {
    id: 5,
    name: "TypeScript",
    icon: icons.typescript,
    color: "hover:border-[#3178C6] hover:shadow-[#3178C6]/20",
  },
  {
    id: 6,
    name: "React",
    icon: icons.react,
    color: "hover:border-[#61dafb] hover:shadow-[#61dafb]/20",
  },
  {
    id: 7,
    name: "Next.js",
    icon: icons.next,
    color: "hover:border-black hover:shadow-black/20",
  },
  {
    id: 8,
    name: "Node.js",
    icon: icons.node,
    color: "hover:border-[#339933] hover:shadow-[#339933]/20",
  },
  {
    id: 9,
    name: "AWS",
    icon: icons.aws,
    color: "hover:border-[#FF9900] hover:shadow-[#FF9900]/20",
  },
  {
    id: 10,
    name: "Tailwind CSS",
    icon: icons.tailwind,
    color: "hover:border-[#06B6D4] hover:shadow-[#06B6D4]/20",
  },
];

const TechStack: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const pillsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Staggered Pop-Up Entrance Animation
      gsap.fromTo(
        ".tech-pill",
        { y: 60, opacity: 0, scale: 0.8 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "back.out(1.4)",
        },
      );

      // 2. Continuous Organic Floating Animation (runs infinitely)
      pillsRef.current.forEach((pill, i) => {
        if (!pill) return;
        gsap.to(pill.querySelector(".tech-icon-wrap"), {
          y: -6,
          duration: 1.5 + Math.random() * 0.5, // Randomized duration for organic feel
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: Math.random() * 2, // Randomized start time
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full py-24 lg:py-32 bg-[#f8f8f8] font-['Sora',sans-serif]" // Premium Light Background
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-[1300px]">
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[#ff8a24] font-bold text-[15px] tracking-widest uppercase mb-4">
            Our Stack
          </span>
          <h2 className="text-[44px] lg:text-[56px] font-bold text-[#080808] leading-[1.1] tracking-tight relative inline-block z-10">
            <span className="absolute top-[10%] left-[-5%] w-[60px] h-[60px] bg-[#ffb646] rounded-full mix-blend-multiply opacity-50 -z-10"></span>
            Built With Modern <br /> Technology
          </h2>
        </div>

        {/* Floating "Cloud" Pill Grid */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-[1000px] mx-auto">
          {technologies.map((tech, i) => (
            <div
              key={tech.id}
              ref={(el) => (pillsRef.current[i] = el)}
              className={`tech-pill group relative flex items-center gap-4 bg-white px-8 py-5 rounded-full shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border-2 border-transparent cursor-pointer transition-all duration-400 ease-out hover:-translate-y-2 hover:shadow-xl ${tech.color}`}
            >
              {/* Icon Container with continuous float animation */}
              <div className="tech-icon-wrap flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </div>

              {/* Tech Name */}
              <span className="text-[17px] font-bold text-[#080808] group-hover:text-black transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
