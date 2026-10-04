import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// --- Data Models ---
const tabs = ["About Me", "Experience", "Education", "Skills"];

const aboutDetails = [
  { label: "Name", value: "Mark Henry" },
  { label: "Nationality", value: "Germany" },
  { label: "Phone", value: "+(2) 870 174 302" },
  { label: "Email", value: "hello@henry.com" },
  { label: "Experience", value: "12+ years" },
  { label: "Freelance", value: "Available" },
  { label: "Skype", value: "henry.halk23" },
  { label: "Language", value: "German, English" },
];

const experienceData = [
  {
    id: 1,
    date: "03/2016 – Running",
    company: "Axtra",
    role: "Lead digital marketer",
  },
  {
    id: 2,
    date: "03/2008 – 07/2011",
    company: "Axtra",
    role: "JavaScript developer",
  },
  {
    id: 3,
    date: "03/2008 – 07/2011",
    company: "Axtra",
    role: "Product designer",
  },
  { id: 4, date: "03/2008 – 07/2011", company: "Axtra", role: "UX researcher" },
];

const educationData = [
  {
    id: 1,
    date: "003/2008 – 07/2011",
    company: "Axtra",
    role: "BA Business Management",
  },
  {
    id: 2,
    date: "03/2008 – 07/2011",
    company: "Axtra",
    role: "BA Business Management",
  },
  {
    id: 3,
    date: "03/2008 – 07/2011",
    company: "Axtra",
    role: "BA Business Management",
  },
];

const skillsData = [
  { id: 1, name: "React JS", percentage: "90%", icon: "⚛️" },
  { id: 2, name: "Figma", percentage: "70%", icon: "🎨" },
  { id: 3, name: "Framer", percentage: "80%", icon: "⬛" },
  { id: 4, name: "Framer", percentage: "80%", icon: "⬛" },
  { id: 5, name: "Framer", percentage: "80%", icon: "⬛" },
  { id: 6, name: "Framer", percentage: "80%", icon: "⬛" },
];

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState("About Me");
  const sectionRef = useRef<HTMLElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  // Initial Scroll Animation (Left first, then Right)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Left side slow entrance from bottom
      gsap.fromTo(
        ".resume-left-anim",
        { y: 80, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out", // Super smooth deceleration
        },
      );

      // 2. Right side smooth delayed entrance from bottom
      gsap.fromTo(
        ".resume-right-anim",
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.6, // Waits for the left side to finish landing
          ease: "power4.out",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animation for changing tabs
  useEffect(() => {
    if (rightContentRef.current) {
      gsap.fromTo(
        rightContentRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      );
    }
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 bg-[#f8f8f8] font-['Sora',sans-serif] min-h-screen"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-[1300px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* === LEFT COLUMN: Title & Tabs === */}
          <div className="w-full lg:w-[40%] flex flex-col">
            <div className="resume-left-anim relative z-10 mb-10">
              <p className="text-[#ff8a24] font-semibold text-lg mb-3">
                Resume
              </p>
              <h2 className="text-5xl lg:text-[64px] font-bold text-[#080808] leading-[1.1] tracking-tight relative inline-block">
                <span className="absolute top-2 -left-4 w-[75px] h-[75px] bg-[#ffb646] rounded-full mix-blend-multiply opacity-90 -z-10"></span>
                All over my <br /> details find <br /> here...
              </h2>
            </div>

            {/* Tab Buttons */}
            <div className="flex flex-col gap-3">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`resume-left-anim group flex items-center justify-between px-8 py-5 rounded-lg text-lg font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-[#080808] text-white shadow-xl"
                        : "bg-white text-[#080808] hover:bg-gray-50 shadow-sm"
                    }`}
                  >
                    {tab}

                    {/* Hide/View Arrow Fly Animation */}
                    <div className="relative overflow-hidden w-6 h-6 flex items-center justify-center shrink-0">
                      {/* Arrow that flies OUT to top-right */}
                      <ArrowUpRight
                        size={20}
                        className={`absolute transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:-translate-y-6 ${isActive ? "text-white" : "text-[#080808]"}`}
                      />
                      {/* Arrow that flies IN from bottom-left */}
                      <ArrowUpRight
                        size={20}
                        className={`absolute -translate-x-6 translate-y-6 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 ${isActive ? "text-white" : "text-[#ff8a24]"}`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* === RIGHT COLUMN: Dynamic Content === */}
          <div
            className="resume-right-anim w-full lg:w-[60%] lg:pt-8"
            ref={rightContentRef}
          >
            {/* 1. About Me Content */}
            {activeTab === "About Me" && (
              <div>
                <h3 className="text-[40px] font-bold text-[#080808] mb-6">
                  Based in German
                </h3>
                <p className="text-[#858585] text-[16px] leading-[1.8] mb-6">
                  Mark Henry,{" "}
                  <strong className="text-[#080808] font-semibold">
                    Product Designer
                  </strong>
                  , based in German. That is where I come in. A lover of words,
                  a wrangler of copy. Here to create copy that not only reflects
                  who you are and what you stand for,
                </p>
                <p className="text-[#858585] text-[16px] leading-[1.8] mb-12">
                  but words that truly land with those that read them, calling
                  your audience in and making them want more.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                  {aboutDetails.map((detail, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-12"
                    >
                      <span className="text-[#858585] w-[100px]">
                        {detail.label}
                      </span>
                      <span className="text-[#080808] text-xl font-semibold">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. Experience Content */}
            {activeTab === "Experience" && (
              <div>
                <h3 className="text-[40px] font-bold text-[#080808] mb-10">
                  Experience
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {experienceData.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#efefef] p-8 rounded-2xl flex flex-col gap-4 border border-transparent transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg hover:border-gray-100"
                    >
                      <span className="text-gray-500 text-sm">{item.date}</span>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#ff8a24]"></span>
                        <span className="text-gray-700">{item.company}</span>
                      </div>
                      <h4 className="text-2xl font-bold text-[#080808] leading-tight">
                        {item.role}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Education Content */}
            {activeTab === "Education" && (
              <div>
                <h3 className="text-[40px] font-bold text-[#080808] mb-10">
                  Education
                </h3>
                <div className="flex flex-col gap-6">
                  {educationData.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#efefef] p-8 rounded-2xl flex flex-col md:flex-row md:items-center gap-4 md:gap-16 border border-transparent transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg hover:border-gray-100"
                    >
                      <span className="text-gray-500 text-sm md:w-[150px] shrink-0">
                        {item.date}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 rounded-full bg-[#ff8a24]"></span>
                          <span className="text-gray-700">{item.company}</span>
                        </div>
                        <h4 className="text-[22px] font-bold text-[#080808]">
                          {item.role}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Skills Content */}
            {activeTab === "Skills" && (
              <div>
                <h3 className="text-[40px] font-bold text-[#080808] mb-10">
                  Skills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {skillsData.map((skill) => (
                    <div
                      key={skill.id}
                      className="bg-[#efefef] p-6 rounded-2xl flex items-center gap-4 border border-transparent transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg hover:border-gray-100"
                    >
                      <div className="text-3xl grayscale opacity-80">
                        {skill.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-[#080808]">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          ({skill.percentage})
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
