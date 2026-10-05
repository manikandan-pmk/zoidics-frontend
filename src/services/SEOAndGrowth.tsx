import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  CheckCircle2,
  Search,
  BarChart3,
  Code2,
  FileText,
  MapPin,
  ShoppingCart,
  Link as LinkIcon,
  MousePointerClick,
  Globe,
  ArrowRightLeft,
  Rocket,
  PenTool,
} from "lucide-react";
import Seo from "../components/Seo";

gsap.registerPlugin(ScrollTrigger);

// --- Content Data ---
const workProcess = [
  {
    step: "01",
    title: "Understand",
    desc: "We start by learning your business, your customers, your competitors and the goals you want your website to achieve.",
  },
  {
    step: "02",
    title: "Audit",
    desc: "We review your website's technical health, content, structure, speed, search visibility and tracking, to find what is helping and what is holding you back.",
  },
  {
    step: "03",
    title: "Plan",
    desc: "We build a clear strategy covering target keywords, page priorities, content topics, technical fixes and a roadmap, so effort goes where it matters most.",
  },
  {
    step: "04",
    title: "Optimize",
    desc: "We implement the plan: technical fixes, on-page improvements, content, internal linking, structured data and conversion improvements.",
  },
  {
    step: "05",
    title: "Track",
    desc: "We set up analytics and goal tracking, so you can see where visitors come from, what they do and which actions lead to enquiries or sales.",
  },
  {
    step: "06",
    title: "Report",
    desc: "We share clear, plain-language reports on visibility, traffic, leads and progress, along with what we recommend next.",
  },
  {
    step: "07",
    title: "Improve & Scale",
    desc: "SEO is ongoing. We keep refining based on data, search changes and your business goals, and expand into new pages, topics and channels as you grow.",
  },
];

const technologies = [
  {
    area: "Search & Analytics",
    tech: "Google Search Console, Google Analytics, Google Tag Manager",
  },
  {
    area: "Technical SEO",
    tech: "Site audits, crawl/indexing fixes, XML sitemaps, robots.txt, canonical tags, structured data",
  },
  {
    area: "Performance",
    tech: "Core Web Vitals, page speed optimization, image and code optimization",
  },
  {
    area: "Research",
    tech: "Keyword research, competitor analysis, search intent mapping, content gap analysis",
  },
  {
    area: "Local Presence",
    tech: "Google Business Profile, local listings, maps and location optimization",
  },
  {
    area: "Website Platforms",
    tech: "Next.js, React.js, WordPress and custom-built websites",
  },
  {
    area: "Conversion Tracking",
    tech: "Event and goal tracking, form and call tracking, heatmaps and user behavior tools",
  },
  {
    area: "Integrations",
    tech: "WhatsApp and email lead tracking, CRM integration, third-party analytics tools",
  },
];

const features = [
  {
    title: "Technical SEO",
    desc: "Site audits, crawl and indexing fixes, site structure, speed, Core Web Vitals, and mobile optimization.",
    icon: Code2,
  },
  {
    title: "On-Page SEO",
    desc: "Titles, meta descriptions, headings, content structure, internal linking, image optimization, schema markup.",
    icon: FileText,
  },
  {
    title: "Keyword Research",
    desc: "Identifying what your customers search for and planning pages around those exact searches.",
    icon: Search,
  },
  {
    title: "Content Strategy",
    desc: "Service pages, blog articles, and landing page copy written for both people and search engines.",
    icon: PenTool,
  },
  {
    title: "Local SEO",
    desc: "Google Business Profile optimization, local keywords, location pages, listings and review strategy.",
    icon: MapPin,
  },
  {
    title: "E-Commerce SEO",
    desc: "Product and category page optimization, structured data, site search and crawl management.",
    icon: ShoppingCart,
  },
  {
    title: "Link Building",
    desc: "Ethical outreach, quality listings and content-led link earning, with absolutely no spam tactics.",
    icon: LinkIcon,
  },
  {
    title: "Conversion Optimization",
    desc: "Improving page layouts, calls to action, forms and user journeys, so more visitors take action.",
    icon: MousePointerClick,
  },
  {
    title: "Analytics & Reporting",
    desc: "Tracking setup, dashboards, goal and lead tracking, along with regular performance reports.",
    icon: BarChart3,
  },
  {
    title: "SEO for New Websites",
    desc: "Building SEO into the site from day one, including structure, speed, metadata and tracking.",
    icon: Globe,
  },
  {
    title: "Website Migrations",
    desc: "Protecting your search visibility when you redesign, change domains or move platforms.",
    icon: ArrowRightLeft,
  },
  {
    title: "Digital Growth",
    desc: "Strategic advice on improving visibility across search, Google Maps and other digital channels.",
    icon: Rocket,
  },
];

const performanceList = [
  "Data-driven: decisions based on search data, analytics and real user behavior, not guesswork.",
  "Ethical: we follow search engine guidelines and avoid shortcuts that can put your website at risk.",
  "Transparent: you always know what we did, why we did it and what it is achieving.",
  "User-focused: what helps visitors also helps search engines, so we improve the experience, not just rankings.",
  "Technically sound: a fast, well-structured website gives all your marketing a stronger base.",
  "Measurable: tracking tied to enquiries, calls, bookings and sales, not just traffic numbers.",
];

const whyChooseUs = [
  {
    title: "Business-first thinking.",
    desc: "We focus on the customers and enquiries you want, not on vanity metrics.",
  },
  {
    title: "Development and SEO under one roof.",
    desc: "Our web development experience means technical SEO issues are fixed properly in the code, not patched around.",
  },
  {
    title: "Custom strategy, not a template.",
    desc: "We build the exact plan around your industry, competitors and goals.",
  },
  {
    title: "End-to-end ownership.",
    desc: "Audit, implementation, tracking and reporting are handled by one cohesive team.",
  },
  {
    title: "Honest expectations.",
    desc: "SEO takes time. We tell you clearly what is realistic and show progress with real data.",
  },
];

const SEOAndGrowth = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade up generic elements
      gsap.utils.toArray<HTMLElement>(".gsap-fade-up").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
        );
      });

      // Staggered grid items
      gsap.utils.toArray<HTMLElement>(".gsap-stagger-grid").forEach((grid) => {
        const items = grid.querySelectorAll(".gsap-stagger-item");
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: grid,
              start: "top 80%",
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
     <Seo
      title="SEO & Growth Services"
      description="Zoidics Software Service provides SEO and growth services that help businesses improve search visibility, attract the right customers, increase organic traffic, and generate more enquiries and sales through technical SEO, content, local SEO, e-commerce SEO, analytics, and conversion optimization."
      keywords="SEO services, SEO company Chennai, SEO services Chennai, search engine optimization, technical SEO, on-page SEO, keyword research, local SEO, e-commerce SEO, SEO audit, Google Search Console, Google Analytics, content strategy, link building, conversion optimization, website SEO, SEO for React, SEO for Next.js, SEO for WordPress, digital growth services"
      url="https://zoidics.com/services/seo-growth"
    />
    <div
      ref={containerRef}
      className="w-full font-['Sora',sans-serif] bg-white text-[#080808] overflow-hidden"
    >
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12 bg-[#ffebda]">
        <div className="container mx-auto max-w-[1200px] relative z-10 flex flex-col items-start text-left">
          <p className="gsap-fade-up text-[#ff8a24] font-bold text-[13px] mb-6 uppercase tracking-[0.15em]">
            SEO & Growth
          </p>
          <h1 className="gsap-fade-up text-[48px] md:text-[64px] lg:text-[76px] font-bold leading-[1.05] tracking-tight mb-8 relative z-10 max-w-[1000px]">
            <span className="absolute -left-4 top-2 w-[60px] md:w-[75px] h-[60px] md:h-[75px] bg-[#ffce85] rounded-full -z-10 mix-blend-multiply"></span>
            SEO & Growth Built to Bring the Right Customers to Your Business.
          </h1>

          <div className="gsap-fade-up max-w-[650px]">
            <p className="text-[18px] md:text-[22px] text-[#080808] font-bold mb-5 leading-[1.4]">
              Visible. Measurable. Sustainable. Growth based on strong
              foundations, not shortcuts.
            </p>
            <p className="text-[16px] md:text-[18px] text-[#444] leading-[1.7] mb-10">
              At Zoidics, we help businesses get found by the people who are
              already searching for what they offer. We combine technical SEO,
              quality content, analytics and conversion improvements to make
              your website easier to find, easier to use and better at turning
              visitors into enquiries and customers.
            </p>

            {/* Hover Fly In/Out Button */}
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-3 bg-[#080808] text-white px-8 py-4 rounded-[12px] font-bold text-[15px] overflow-hidden transition-colors hover:bg-[#1a1a1a] shadow-lg shrink-0 whitespace-nowrap"
            >
              Start Your Project
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
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="w-full py-24 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center mb-16 gsap-fade-up">
            <h2 className="text-[36px] md:text-[44px] font-bold mb-4">
              How We Work
            </h2>
            <p className="text-[#666] text-[15px] md:text-[16px] max-w-[500px] mx-auto leading-relaxed">
              A proven, transparent process to take your website from invisible
              to high-performing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 gsap-stagger-grid">
            {workProcess.map((item, index) => (
              <div
                key={index}
                className={`gsap-stagger-item p-8 rounded-[16px] bg-[#f9f9f9] border border-black/[0.03] flex flex-col items-start ${
                  index === 6 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="text-[#ffcd85] font-extrabold text-[36px] leading-none mb-4">
                  {item.step}
                </div>
                <h3 className="text-[18px] font-bold text-[#080808] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#777] text-[14px] leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES & FEATURES ================= */}
      <section className="w-full py-24 px-6 lg:px-12 bg-[#fafafa]">
        <div className="container mx-auto max-w-[1200px]">
          {/* Tech Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 gsap-fade-up">
            <div>
              <p className="text-[#ff8a24] font-bold tracking-widest uppercase text-sm mb-4">
                TOOLS & PRACTICES
              </p>
              <h2 className="text-[40px] md:text-[56px] font-bold text-[#080808] leading-none relative z-10">
                <span className="absolute -left-3 top-1 w-12 h-12 bg-[#ffce85] rounded-full -z-10 mix-blend-multiply"></span>
                What we use
              </h2>
            </div>
            <p className="text-[#666] max-w-md text-[16px] leading-relaxed">
              We choose proven tools that suit your goals instead of using the
              same checklist for every business.
            </p>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-32 gsap-stagger-grid">
            {technologies.map((item, index) => (
              <div
                key={index}
                className="gsap-stagger-item border-t-2 border-black/10 pt-6"
              >
                <h3 className="text-[20px] font-bold text-[#080808] mb-3">
                  {item.area}
                </h3>
                <p className="text-[#555] text-[15px] leading-[1.6]">
                  {item.tech}
                </p>
              </div>
            ))}
          </div>

          {/* Features Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 gsap-fade-up">
            <div>
              <p className="text-[#ff8a24] font-bold tracking-widest uppercase text-sm mb-4">
                SERVICES
              </p>
              <h2 className="text-[40px] md:text-[56px] font-bold text-[#080808] leading-none relative z-10">
                <span className="absolute -left-3 top-1 w-12 h-12 bg-[#ffce85] rounded-full -z-10 mix-blend-multiply"></span>
                What we provide
              </h2>
            </div>
            <p className="text-[#666] max-w-md text-[16px] leading-relaxed">
              Need something that isn't listed? If it helps your business get
              found and convert better online, we can look at it.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gsap-stagger-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="gsap-stagger-item bg-white p-6 rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-black/5 flex flex-col items-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#ffebda] text-[#ff8a24] flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-[18px] font-bold text-[#080808] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#666] text-[14px] leading-[1.6]">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PERFORMANCE & WHY CHOOSE US ================= */}
      <section className="w-full py-24 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Performance List */}
          <div className="gsap-fade-up">
            <h2 className="text-[32px] md:text-[40px] font-bold mb-6">
              Built for Long-Term Growth
            </h2>
            <p className="text-[#555] mb-8 text-[16px]">
              Lasting results come from doing the basics well and consistently.
              Our approach is:
            </p>
            <div className="flex flex-col gap-5">
              {performanceList.map((item, index) => {
                const [boldText, ...rest] = item.split(":");
                return (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2
                      size={22}
                      className="text-[#ff8a24] shrink-0 mt-0.5"
                    />
                    <p className="text-[#444] text-[15px] leading-[1.6]">
                      <strong className="text-[#080808]">{boldText}:</strong>
                      {rest.join(":")}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="gsap-fade-up">
            <h2 className="text-[32px] md:text-[40px] font-bold mb-8">
              Why Choose Zoidics?
            </h2>
            <div className="flex flex-col gap-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="border-l-2 border-[#ff8a24] pl-5">
                  <h3 className="text-[18px] font-bold text-[#080808] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#666] text-[15px] leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 inline-block bg-[#ffebda] text-[#080808] px-5 py-4 rounded-lg font-bold text-[15px]">
              You bring the business.{" "}
              <span className="text-[#ff8a24]">
                We help the right customers find it.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXACT MATCH CTA SECTION ================= */}
      <section className="w-full py-16 px-6 lg:px-12 bg-[#ffebda] flex justify-center">
        <div className="container max-w-[1200px] gsap-fade-up">
          <div className="bg-[#0b0b0b] rounded-[32px] p-10 md:p-16 lg:p-20 flex flex-col items-start w-full relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl w-full">
              <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-tight mb-6">
                <span className="text-[#ffb646]">Ready to Grow</span>
                <br />
                <span className="text-white">Your Online Presence?</span>
              </h2>

              <p className="text-[#a1a1a1] text-[16px] md:text-[18px] leading-[1.6] mb-12 max-w-lg">
                Tell us about your business and your goals, and we'll help you
                build a practical, measurable plan to be found by more of the
                right customers.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 w-full">
                {/* Hover Fly In/Out Email Link */}
                <a
                  href="mailto:connect@zoidics.com"
                  className="group text-[#ffb646] font-bold text-[18px] md:text-[20px] flex items-center gap-3 w-fit whitespace-nowrap"
                >
                  connect@zoidics.com
                  <div className="relative w-5 h-5 overflow-hidden flex items-center justify-center">
                    <ArrowUpRight
                      size={22}
                      strokeWidth={2.5}
                      className="absolute transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:-translate-y-6"
                    />
                    <ArrowUpRight
                      size={22}
                      strokeWidth={2.5}
                      className="absolute text-white -translate-x-6 translate-y-6 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                    />
                  </div>
                </a>

                {/* Hover Fly In/Out White Button */}
                <a
                  href="/contact"
                  className="group bg-white text-[#080808] font-bold text-[16px] px-8 py-4 rounded-[12px] flex items-center justify-center gap-3 w-fit hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  Start a Conversation
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
    </div>
    </>
  );
};

export default SEOAndGrowth;
