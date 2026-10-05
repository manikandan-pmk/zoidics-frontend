import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".flip-anim",
        {
          rotateX: -180,
          opacity: 0,
          transformOrigin: "center center",
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
          rotateX: 0,
          opacity: 1,
          duration: 2,
          stagger: 0.2,
          ease: "back.out(1.5)",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={sectionRef}
      className="w-full bg-[#080808] text-white pt-24 pb-8 font-['Sora',sans-serif] overflow-hidden"
      style={{ perspective: "1500px" }}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        {/* Top Half: Title & Contact Cards */}
        <div className="flex flex-col xl:flex-row justify-between gap-16 xl:gap-8 mb-20">
          <div className="flip-anim flex flex-col items-start xl:w-1/2">
            <h2 className="text-[56px] md:text-[80px] font-bold leading-[1.05] tracking-tight mb-8 relative z-10">
              <span className="relative inline-block">
                <span className="absolute top-2 left-[-10%] w-[80px] h-[80px] bg-[#ffb646] rounded-full mix-blend-screen opacity-90 -z-10"></span>
                Let's work
              </span>
              <br />
              together
            </h2>

            <div className="flex items-center gap-6 mt-4">
              <span className="text-lg font-medium text-white">
                Based in Chennai, India
              </span>
              <div className="w-[1px] h-6 bg-white/30"></div>
              <div className="flex items-center gap-5 text-white/80">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919025187388"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="hover:text-[#ffb646] transition-colors"
                >
                  <FaWhatsapp size={21} />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/zoidics_solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-[#ffb646] transition-colors"
                >
                  <FaInstagram size={21} />
                </a>

                {/* Email */}
                <a
                  href="mailto:connect@zoidics.com"
                  aria-label="Email"
                  className="hover:text-[#ffb646] transition-colors"
                >
                  <FaEnvelope size={21} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 xl:w-1/2 xl:justify-end">
            <a
              href="mailto:connect@zoidics.com"
              className="flip-anim group flex flex-col justify-between w-full sm:w-[320px] h-[220px] p-8 rounded-2xl border border-white/20 hover:border-[#ff8a24] transition-colors duration-300"
              style={{ backfaceVisibility: "hidden" }}
            >
              <p className="text-[19px] font-medium leading-[1.4] text-white">
                Looking for a hectic designer?
              </p>
              <div className="flex items-end justify-between mt-auto">
                <span className="text-[#ffb646] text-xl font-semibold">
                  connect@zoidics.com
                </span>
                <div className="relative overflow-hidden w-6 h-6 flex items-center justify-center shrink-0">
                  <ArrowUpRight
                    size={24}
                    className="absolute text-white transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:-translate-y-6"
                  />
                  <ArrowUpRight
                    size={24}
                    className="absolute text-[#ffb646] -translate-x-6 translate-y-6 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                  />
                </div>
              </div>
            </a>
            <a
              href="tel:+919025187388"
              className="flip-anim group flex flex-col justify-between w-full sm:w-[320px] h-[220px] p-8 rounded-2xl border border-white/20 hover:border-[#ff8a24] transition-colors duration-300"
              style={{ backfaceVisibility: "hidden" }}
            >
              <p className="text-[19px] font-medium leading-[1.4] text-white">
                Want a more in-depth look at my history?
              </p>
              <div className="flex items-end justify-between mt-auto">
                <span className="text-[#ffb646] text-xl font-semibold">
                  +91 90251 87388
                </span>
                <div className="relative overflow-hidden w-6 h-6 flex items-center justify-center shrink-0">
                  <ArrowUpRight
                    size={24}
                    className="absolute text-white transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:-translate-y-6"
                  />
                  <ArrowUpRight
                    size={24}
                    className="absolute text-[#ffb646] -translate-x-6 translate-y-6 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Middle: Huge Typography */}
        <div
          className="flip-anim w-full flex justify-center mb-16 px-4"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h1
            className="text-[18vw] lg:text-[200px] font-black text-[#ffe9d9] leading-[0.8] tracking-tighter w-full text-center select-none uppercase"
            style={{ fontStretch: "expanded" }}
          >
            ZOIDICS
          </h1>
        </div>

        {/* Bottom Bar: Copyright, Links & Back to Top */}
        <div
          className="flip-anim border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          <p className="text-white/60 text-sm font-medium">
            © 2026 Zoidics, All Rights Reserved
          </p>

          <div className="flex items-center gap-6 text-sm font-medium text-white/60">
            <Link
              to="/privacy-policy"
              className="hover:text-[#ffb646] transition-colors"
            >
              Privacy Policy
            </Link>
            <div className="w-1 h-1 rounded-full bg-white/30"></div>
            <Link
              to="/terms-and-conditions"
              className="hover:text-[#ffb646] transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-white hover:text-[#ffb646] transition-colors font-medium text-sm"
          >
            Back to Top
            <ArrowUp
              size={18}
              className="transform group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
