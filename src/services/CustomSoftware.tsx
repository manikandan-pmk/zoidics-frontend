import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  CheckCircle2,
  MonitorCog,
  Users,
  Wrench,
  Laptop,
  PieChart,
  Workflow,
  CalendarClock,
  Receipt,
  Store,
  Database,
  Link as LinkIcon,
  Bot,
  RefreshCw,
} from "lucide-react";
import Seo from "../components/Seo";

gsap.registerPlugin(ScrollTrigger);

// --- Content Data ---
const workProcess = [
  {
    step: "01",
    title: "Understand",
    desc: "We start by learning how your business runs today: your processes, your team, the tools you use, and where time, accuracy or visibility is being lost.",
  },
  {
    step: "02",
    title: "Plan",
    desc: "We define the scope, modules, user roles, workflows, data structure, technology stack and a phased roadmap, so the project stays focused and delivers early value.",
  },
  {
    step: "03",
    title: "Design",
    desc: "We create clear, usable interfaces and system flows that your team can learn quickly, and share them for your feedback before development begins.",
  },
  {
    step: "04",
    title: "Develop",
    desc: "Our team builds the frontend, backend, APIs, database, authentication, integrations and business logic, delivering in stages so you can review progress.",
  },
  {
    step: "05",
    title: "Test",
    desc: "We test functionality, workflows, user permissions, data accuracy, performance and security, using real scenarios from your business.",
  },
  {
    step: "06",
    title: "Deploy",
    desc: "We take your software live with server and database configuration, secure access, data migration, backups and training for your team.",
  },
  {
    step: "07",
    title: "Maintain & Improve",
    desc: "After launch, we provide bug fixes, updates, security improvements, new features and technical support, keeping the software evolving with your business.",
  },
];

const technologies = [
  {
    area: "Frontend",
    tech: "React.js, Next.js, Tailwind CSS, JavaScript / TypeScript",
  },
  { area: "Backend", tech: "Node.js, Express.js, REST APIs, Python / FastAPI" },
  {
    area: "Mobile",
    tech: "React Native, Flutter for companion Android and iOS apps",
  },
  { area: "Databases", tech: "PostgreSQL, MySQL, MongoDB" },
  {
    area: "Authentication & Security",
    tech: "JWT auth, role-based access, secure APIs, data validation, audit logs, SSL",
  },
  {
    area: "Integrations",
    tech: "Payments, WhatsApp/SMS, email, Google, Maps, CRMs, Accounting, AI APIs",
  },
  {
    area: "Reporting & Data",
    tech: "Dashboards, charts, scheduled reports, PDF/Excel export, data import tools",
  },
  {
    area: "Deployment",
    tech: "VPS / cloud servers, Docker, Nginx, PM2, CI/CD, automated backups",
  },
];

const features = [
  {
    title: "Management Systems",
    desc: "Inventory, order, project, staff, clinic, property and other management software designed around your operations.",
    icon: MonitorCog,
  },
  {
    title: "CRM & Customer Management",
    desc: "Lead tracking, customer records, follow-ups, pipelines and complete communication history.",
    icon: Users,
  },
  {
    title: "Internal Tools",
    desc: "Admin panels, approval systems, and team coordination tools that replace spreadsheets and manual work.",
    icon: Wrench,
  },
  {
    title: "Customer & Vendor Portals",
    desc: "Secure logins where customers, partners or suppliers manage their own information, orders or requests.",
    icon: Laptop,
  },
  {
    title: "Dashboards & Reporting",
    desc: "One place to see sales, operations, performance and key numbers, updated automatically from your own data.",
    icon: PieChart,
  },
  {
    title: "Workflow & Process Software",
    desc: "Multi-step processes with clear roles, approvals, notifications and activity tracking.",
    icon: Workflow,
  },
  {
    title: "Booking & Scheduling",
    desc: "Appointments, resources, availability management and automated reminders.",
    icon: CalendarClock,
  },
  {
    title: "Billing & Finance Tools",
    desc: "Invoicing, payment tracking, expense records and integrated financial reports.",
    icon: Receipt,
  },
  {
    title: "Marketplace & Multi-User",
    desc: "Platforms with multiple user types, listings, transactions and role-based access.",
    icon: Store,
  },
  {
    title: "Data & Document Systems",
    desc: "Secure file storage, document generation, data import/export, and advanced search.",
    icon: Database,
  },
  {
    title: "Integration & APIs",
    desc: "Connecting your existing tools and systems so data flows effortlessly between them.",
    icon: LinkIcon,
  },
  {
    title: "AI-Powered Features",
    desc: "Smart search, document processing, chatbots and intelligent automation added to your software.",
    icon: Bot,
  },
  {
    title: "Modernization",
    desc: "Rebuilding or upgrading older, legacy systems onto a modern, maintainable technical foundation.",
    icon: RefreshCw,
  },
];

const performanceList = [
  "Tailored: built around your actual workflow, not a generic template.",
  "Secure: authentication, authorization, validation and production-ready security practices, with role-based access.",
  "Fast: efficient code, optimized databases and performance-focused development.",
  "Easy to use: simple, well-designed interfaces that your team can adopt without long training.",
  "Scalable: architecture that supports more users, more data and new modules over time.",
  "Integrated: works with the tools you already use instead of becoming another silo.",
  "Maintainable: clean code and clear documentation, so future changes are simple and you are never locked in.",
];

const whyChooseUs = [
  {
    title: "Business-first thinking.",
    desc: "We start with your process and your goals, then choose the technology that fits.",
  },
  {
    title: "Custom-built, not generic.",
    desc: "We build what your business needs, nothing forced and nothing missing.",
  },
  {
    title: "Everything under one roof.",
    desc: "Web, mobile, AI, automation, billing, cloud and SEO are all part of what we do, so your software connects fully.",
  },
  {
    title: "Phased delivery.",
    desc: "We build in stages, so you see progress early and can adjust direction before the project is complete.",
  },
  {
    title: "End-to-end ownership.",
    desc: "Analysis, design, development, deployment and support are handled by one complete team.",
  },
  {
    title: "Honest guidance.",
    desc: "We tell you clearly when a ready-made tool will do the job better, and when custom software is the right choice.",
  },
];

const CustomSoftware = () => {
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
      title="Custom Software Development"
      description="Zoidics Software Service builds custom software tailored to the way your business works, including management systems, CRM platforms, internal tools, customer portals, dashboards, workflow software, billing systems, integrations, AI-powered features, and legacy system modernization."
      keywords="custom software development, custom software development company Chennai, software development Chennai, business software development, custom business software, enterprise software development, CRM development, management software, internal business tools, customer portal development, workflow software, dashboard development, billing software, API integration, AI software development, legacy software modernization"
      url="https://zoidics.com/services/custom-software"
    />
    <div
      ref={containerRef}
      className="w-full font-['Sora',sans-serif] bg-white text-[#080808] overflow-hidden"
    >
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12 bg-[#ffebda]">
        <div className="container mx-auto max-w-[1200px] relative z-10 flex flex-col items-start text-left">
          <p className="gsap-fade-up text-[#ff8a24] font-bold text-[13px] mb-6 uppercase tracking-[0.15em]">
            Custom Software
          </p>
          <h1 className="gsap-fade-up text-[48px] md:text-[64px] lg:text-[76px] font-bold leading-[1.05] tracking-tight mb-8 relative z-10 max-w-[1050px]">
            <span className="absolute -left-4 top-2 w-[60px] md:w-[75px] h-[60px] md:h-[75px] bg-[#ffce85] rounded-full -z-10 mix-blend-multiply"></span>
            Custom Software Built Around the Way Your Business Works.
          </h1>

          <div className="gsap-fade-up max-w-[680px]">
            <p className="text-[18px] md:text-[22px] text-[#080808] font-bold mb-5 leading-[1.4]">
              Tailored. Secure. Scalable. Software that fits your process,
              instead of forcing your process to fit the software.
            </p>
            <p className="text-[16px] md:text-[18px] text-[#444] leading-[1.7] mb-10">
              At Zoidics, we design and develop custom software for businesses
              whose needs aren't met by off-the-shelf tools. If you are managing
              operations with spreadsheets, juggling disconnected apps or
              working around the limits of ready-made software, we build a
              system made for your workflow, your team and your goals.
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
              A proven, transparent process to turn operational bottlenecks into
              streamlined digital systems.
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
                TECHNOLOGIES
              </p>
              <h2 className="text-[40px] md:text-[56px] font-bold text-[#080808] leading-none relative z-10">
                <span className="absolute -left-3 top-1 w-12 h-12 bg-[#ffce85] rounded-full -z-10 mix-blend-multiply"></span>
                What we use
              </h2>
            </div>
            <p className="text-[#666] max-w-md text-[16px] leading-relaxed">
              We choose proven, modern tools that suit your project instead of
              forcing every project into the exact same stack.
            </p>
          </div>

          {/* Tech Grid (8 items -> 4 columns fits perfectly on large screens) */}
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
                CAPABILITIES
              </p>
              <h2 className="text-[40px] md:text-[56px] font-bold text-[#080808] leading-none relative z-10">
                <span className="absolute -left-3 top-1 w-12 h-12 bg-[#ffce85] rounded-full -z-10 mix-blend-multiply"></span>
                What we build
              </h2>
            </div>
            <p className="text-[#666] max-w-md text-[16px] leading-relaxed">
              Need something that isn't listed? If it follows a business
              workflow, we can engineer it.
            </p>
          </div>

          {/* Features Grid (13 items -> 3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gsap-stagger-grid">
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
              Built for Performance & Growth
            </h2>
            <p className="text-[#555] mb-8 text-[16px]">
              Custom software is an investment, so it should last. Every system
              we deliver is:
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
              You bring the business and its challenges.{" "}
              <span className="text-[#ff8a24]">
                We build the software that solves them.
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
                <span className="text-[#ffb646]">Have a Software</span>
                <br />
                <span className="text-white">Idea in Mind?</span>
              </h2>

              <p className="text-[#a1a1a1] text-[16px] md:text-[18px] leading-[1.6] mb-12 max-w-lg">
                Tell us how your business works and where it needs better tools,
                and we'll help you turn it into a secure, scalable custom
                software solution.
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

export default CustomSoftware;
