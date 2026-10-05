import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

import api from "../api/axios";
import Seo from "../components/Seo";

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // =========================================================
  // GSAP ANIMATIONS
  // =========================================================

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left Side Animation
      gsap.fromTo(
        ".contact-left",
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      // Right Side Animation
      gsap.fromTo(
        ".contact-right",
        {
          x: 50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // =========================================================
  // HANDLE INPUT
  // =========================================================

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // =========================================================
  // SUBMIT FORM
  // =========================================================

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await api.post("/api/contact", formData);

      if (response.data.success) {
        setSuccessMessage(
          response.data.message || "Thank you for contacting us.",
        );

        // Clear form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error: any) {
      console.error("CONTACT API ERROR:", error);

      setErrorMessage(
        error?.response?.data?.message ||
          "Unable to submit your enquiry. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // UI
  // =========================================================

  return (
    <>
      {/* =====================================================
          SEO META TAGS
      ===================================================== */}

      <Seo
        title="Contact Us"
        description="Get in touch with Zoidics Software Service for web development, mobile app development, AI solutions, business automation, custom software, and digital solutions."
        keywords="contact Zoidics, Zoidics Software Service contact, web development company Chennai, software development Chennai, app development Chennai, AI development company, custom software development"
        url="https://zoidics.com/contact"
      />

      <section
        ref={sectionRef}
        className="w-full overflow-hidden bg-white py-24 font-['Sora',sans-serif] lg:py-32"
      >
        <div className="container mx-auto max-w-[1300px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            {/* =================================================
                LEFT
            ================================================= */}

            <div className="contact-left flex flex-col">
              <div className="mb-16">
                <p className="mb-3 text-lg font-semibold text-[#ff8a24]">
                  Contact
                </p>

                <h1 className="relative z-10 inline-block text-5xl font-bold leading-[1.1] tracking-tight text-[#080808] lg:text-[72px]">
                  <span className="absolute left-[-15px] top-2 -z-10 h-[75px] w-[75px] rounded-full bg-[#ffb646] opacity-90 mix-blend-multiply" />
                  Let's
                  <br />
                  connect
                </h1>
              </div>

              <div className="flex flex-col gap-8">
                {/* =================================================
                    EMAIL
                ================================================= */}

                <div className="flex items-start gap-6 border-b border-gray-200 pb-8">
                  <div className="mt-1">
                    <Mail
                      size={28}
                      strokeWidth={1.5}
                      className="text-[#080808]"
                    />
                  </div>

                  <div>
                    <p className="mb-1 text-[15px] text-[#858585]">Email us</p>

                    <a
                      href="mailto:connect@zoidics.com"
                      className="text-[20px] font-medium text-[#080808] transition-colors hover:text-[#ff8a24]"
                    >
                      connect@zoidics.com
                    </a>
                  </div>
                </div>

                {/* =================================================
                    PHONE
                ================================================= */}

                <div className="flex items-start gap-6 border-b border-gray-200 pb-8">
                  <div className="mt-1">
                    <Phone
                      size={28}
                      strokeWidth={1.5}
                      className="text-[#080808]"
                    />
                  </div>

                  <div>
                    <p className="mb-1 text-[15px] text-[#858585]">Call us</p>

                    <a
                      href="tel:+919025187388"
                      className="text-[20px] font-medium text-[#080808] transition-colors hover:text-[#ff8a24]"
                    >
                      +91 90251 87388
                    </a>
                  </div>
                </div>

                {/* =================================================
                    ADDRESS
                ================================================= */}

                <div className="flex items-start gap-6 border-b border-gray-200 pb-8">
                  <div className="mt-1">
                    <MapPin
                      size={28}
                      strokeWidth={1.5}
                      className="text-[#080808]"
                    />
                  </div>

                  <div>
                    <p className="mb-1 text-[15px] text-[#858585]">
                      Office address
                    </p>

                    <p className="text-[20px] font-medium leading-snug text-[#080808]">
                      Chennai,
                      <br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT
            ================================================= */}

            <div className="contact-right flex flex-col pt-2 lg:pt-8">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                {/* =================================================
                    NAME + EMAIL
                ================================================= */}

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* NAME */}

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-[15px] font-medium text-[#080808]"
                    >
                      Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name*"
                      className="w-full rounded-lg border border-gray-300 px-5 py-4 text-[15px] text-[#080808] placeholder-gray-400 transition-all focus:border-[#ff8a24] focus:outline-none focus:ring-1 focus:ring-[#ff8a24]"
                      required
                    />
                  </div>

                  {/* EMAIL */}

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-[15px] font-medium text-[#080808]"
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email*"
                      className="w-full rounded-lg border border-gray-300 px-5 py-4 text-[15px] text-[#080808] placeholder-gray-400 transition-all focus:border-[#ff8a24] focus:outline-none focus:ring-1 focus:ring-[#ff8a24]"
                      required
                    />
                  </div>
                </div>

                {/* =================================================
                    PHONE + SUBJECT
                ================================================= */}

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* PHONE */}

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="text-[15px] font-medium text-[#080808]"
                    >
                      Phone
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your number"
                      className="w-full rounded-lg border border-gray-300 px-5 py-4 text-[15px] text-[#080808] placeholder-gray-400 transition-all focus:border-[#ff8a24] focus:outline-none focus:ring-1 focus:ring-[#ff8a24]"
                    />
                  </div>

                  {/* SUBJECT */}

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="subject"
                      className="text-[15px] font-medium text-[#080808]"
                    >
                      Subject*
                    </label>

                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Your subject*"
                      className="w-full rounded-lg border border-gray-300 px-5 py-4 text-[15px] text-[#080808] placeholder-gray-400 transition-all focus:border-[#ff8a24] focus:outline-none focus:ring-1 focus:ring-[#ff8a24]"
                      required
                    />
                  </div>
                </div>

                {/* =================================================
                    MESSAGE
                ================================================= */}

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-[15px] font-medium text-[#080808]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message"
                    rows={4}
                    className="w-full resize-none rounded-lg border border-gray-300 px-5 py-4 text-[15px] text-[#080808] placeholder-gray-400 transition-all focus:border-[#ff8a24] focus:outline-none focus:ring-1 focus:ring-[#ff8a24]"
                    required
                  />
                </div>

                {/* =================================================
                    SUCCESS MESSAGE
                ================================================= */}

                {successMessage && (
                  <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                    {successMessage}
                  </div>
                )}

                {/* =================================================
                    ERROR MESSAGE
                ================================================= */}

                {errorMessage && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {errorMessage}
                  </div>
                )}

                {/* =================================================
                    SUBMIT
                ================================================= */}

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative mt-2 cursor-pointer inline-flex w-fit items-center justify-center gap-3 overflow-hidden rounded-lg bg-[#080808] px-8 py-4 text-[16px] font-medium text-white transition-colors hover:bg-[#1a1a1a] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Submit"}

                  {!loading && (
                    <div className="relative flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden">
                      <ArrowUpRight
                        size={20}
                        strokeWidth={2}
                        className="absolute transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:-translate-y-6"
                      />

                      <ArrowUpRight
                        size={20}
                        strokeWidth={2}
                        className="absolute -translate-x-6 translate-y-6 text-[#ffb646] transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                      />
                    </div>
                  )}
                </button>
              </form>

              {/* =================================================
    SOCIALS / CONNECT CHANNELS
================================================= */}

              <div className="mt-16 flex items-center gap-6 pt-4">
                <div className="hidden h-[1px] w-12 bg-gray-200 sm:block" />

                <span className="text-[20px] font-bold text-[#080808]">
                  Connect with us
                </span>

                <div className="flex items-center gap-5 text-[#080808]">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919025187388"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#25D366]"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp size={22} />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/zoidics_solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#E1306C]"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={22} />
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:connect@zoidics.com"
                    className="transition-colors hover:text-[#ffb646]"
                    aria-label="Email"
                  >
                    <FaEnvelope size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
