import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const QuoteIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-[#080808] mb-6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.983 3v7.391C9.983 16.095 6.252 19.961 2 21l-2-2.054c2.836-1.07 4.966-3.791 4.966-6.844H0V3h9.983zM24 3v7.391c0 5.704-3.731 9.57-7.983 10.609l-2-2.054c2.836-1.07 4.966-3.791 4.966-6.844H14V3h10z" />
  </svg>
);

const Testimonial: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // State variables for dynamic data
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch Testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // Vite proxy ke thru call lag rahi hai
        const response = await axios.get("/api/testimonials");
        if (response.data.success) {
          // Sirf published testimonials ko filter kar rahe hain (optional security)
          const fetchedData = response.data.testimonials.filter(
            (t: any) => t.isPublished,
          );
          setTestimonials(fetchedData);
        }
      } catch (err) {
        console.error("Error fetching testimonials:", err);
        setError("Failed to load testimonials.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Run GSAP Animations ONLY after data is fully loaded
  useEffect(() => {
    if (loading || error || testimonials.length === 0) return;

    const ctx = gsap.context(() => {
      // Title Animation (Slides in from the left)
      gsap.fromTo(
        ".testimonial-title",
        { x: -50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
      );

      // Feedback Cards Animation (Staggered fade up)
      gsap.fromTo(
        ".feedback-card",
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".feedback-grid",
            start: "top 75%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [loading, error, testimonials]);

  // Loading UI
  if (loading) {
    return (
      <div className="w-full py-32 bg-white flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ff8a24]"></div>
      </div>
    );
  }

  // Error UI
  if (error) {
    return (
      <div className="w-full py-32 bg-white flex items-center justify-center min-h-[400px]">
        <p className="text-red-500 font-medium">{error}</p>
      </div>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="w-full py-32 bg-white font-['Sora',sans-serif]"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        {/* Main Grid: 1 col for title, 3 cols for testimonials */}
        <div className="feedback-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* === Title Section === */}
          <div className="testimonial-title lg:col-span-1 pr-4">
            <p className="text-[#ff8a24] font-semibold text-[17px] mb-4">
              Testimonial
            </p>
            <h2 className="text-[44px] xl:text-[52px] font-bold text-[#080808] leading-[1.1] tracking-tight relative z-10">
              <span className="relative inline-block">
                {/* Orange highlight circle precisely positioned behind 'C' */}
                <span className="absolute top-[8%] left-[-10%] w-[54px] h-[54px] bg-[#ffb646] rounded-full mix-blend-multiply opacity-90 -z-10"></span>
                Client
              </span>
              <br />
              feedback
            </h2>
          </div>

          {/* === Feedback Cards === */}
          {testimonials.map((feedback) => (
            <div
              key={feedback.id}
              className="feedback-card flex flex-col h-full lg:col-span-1 pt-2 lg:pt-0"
            >
              <QuoteIcon />

              {/* Replaced .text with .message based on backend structure */}
              <p className="text-[#333333] text-[17px] leading-[1.8] font-medium whitespace-pre-line mb-10 flex-grow">
                {feedback.message}
              </p>

              {/* Author Area with Avatar & Role */}
              <div className="flex items-center gap-4 mt-auto">
                {/* Image check: relative upload path handle */}
                {feedback.imageUrl ? (
                  <img
                    src={
                      feedback.imageUrl.startsWith("/")
                        ? `http://localhost:3000${feedback.imageUrl}`
                        : feedback.imageUrl
                    }
                    alt={feedback.name}
                    className="w-12 h-12 rounded-full object-cover shadow-sm border border-gray-100"
                    onError={(e) => {
                      // Fallback fallback to line if image broken
                      (e.target as HTMLImageElement).style.display = "none";
                      (
                        e.target as HTMLImageElement
                      ).nextElementSibling?.removeAttribute("style");
                    }}
                  />
                ) : (
                  <span className="w-10 h-[1px] bg-gray-300"></span>
                )}

                {/* Hidden fallback line, only shows up if image errors out */}
                <span
                  className="w-10 h-[1px] bg-gray-300"
                  style={{ display: feedback.imageUrl ? "none" : "block" }}
                ></span>

                <div>
                  <h4 className="text-[19px] font-bold text-[#080808] leading-tight">
                    {feedback.name}
                  </h4>
                  {/* Shows Role and Company if available */}
                  {(feedback.role || feedback.company) && (
                    <p className="text-[13px] font-medium text-gray-500 mt-1">
                      {feedback.role}
                      {feedback.role && feedback.company ? ", " : ""}
                      {feedback.company}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
