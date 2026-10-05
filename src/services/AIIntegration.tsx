import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  CheckCircle2,
  Bot,
  BrainCircuit,
  FileText,
  Sparkles,
  Workflow,
  BarChart3,
  Mic,
  PlugZap,
} from "lucide-react";
import Seo from "../components/Seo";

gsap.registerPlugin(ScrollTrigger);

// --- Content Data ---
const workProcess = [
  {
    step: "01",
    title: "Understand",
    desc: "We start by learning your business, your workflows, your data and the problems you want to solve, so AI is used where it genuinely helps.",
  },
  {
    step: "02",
    title: "Plan",
    desc: "We define the use case, the right AI approach, data requirements, integration points, technology stack and roadmap before building anything.",
  },
  {
    step: "03",
    title: "Design",
    desc: "We design the user experience and system flow, including how people interact with the AI, how it fits into existing screens, and how output is reviewed.",
  },
  {
    step: "04",
    title: "Develop",
    desc: "Our team builds the AI features, backend, APIs, data pipelines, authentication, integrations and business logic.",
  },
  {
    step: "05",
    title: "Test",
    desc: "We test accuracy, response quality, edge cases, performance, security and reliability, and refine prompts, logic and safeguards based on the results.",
  },
  {
    step: "06",
    title: "Deploy",
    desc: "We take your solution live with server and database configuration, secure API key handling, usage monitoring and performance optimization.",
  },
  {
    step: "07",
    title: "Maintain & Improve",
    desc: "After launch, we monitor performance, improve quality, update models and integrations, fix issues and add new capabilities as your needs grow.",
  },
];

const technologies = [
  {
    area: "AI & LLM APIs",
    tech: "Claude, OpenAI, Google Gemini and other third-party AI APIs",
  },
  {
    area: "AI Techniques",
    tech: "Prompt engineering, RAG, embeddings, semantic search, function calling, workflows",
  },
  { area: "Backend", tech: "Node.js, Express.js, Python / FastAPI, REST APIs" },
  {
    area: "Frontend",
    tech: "React.js, Next.js, Tailwind CSS, JavaScript / TypeScript",
  },
  { area: "Databases", tech: "PostgreSQL, MySQL, MongoDB, Vector Databases" },
  {
    area: "Security",
    tech: "Secure API architecture, role-based access, data validation, secure key management",
  },
  {
    area: "Integrations",
    tech: "WhatsApp & SMS, email, payment gateways, Google services, CRMs, third-party APIs",
  },
  {
    area: "Deployment",
    tech: "VPS / cloud servers, Docker, Nginx, PM2, CI/CD",
  },
];

const features = [
  {
    title: "Conversational AI",
    desc: "Website and app chatbots, customer support assistants, and WhatsApp AI assistants.",
    icon: Bot,
  },
  {
    title: "Knowledge & Search",
    desc: "AI search over your documents, internal knowledge assistants, and smart recommendations.",
    icon: BrainCircuit,
  },
  {
    title: "Document Processing",
    desc: "Data extraction from PDFs, invoices, forms and images, summarization, classification.",
    icon: FileText,
  },
  {
    title: "Content Generation",
    desc: "Product descriptions, emails, reports, replies and marketing copy, with human review.",
    icon: Sparkles,
  },
  {
    title: "Automation",
    desc: "AI-assisted workflows, ticket and lead routing, automated replies, and data entry.",
    icon: Workflow,
  },
  {
    title: "Analytics & Insights",
    desc: "Smart reports, trend summaries, and natural-language queries over your business data.",
    icon: BarChart3,
  },
  {
    title: "Voice & Language",
    desc: "Speech-to-text, text-to-speech, translation, and advanced multilingual support.",
    icon: Mic,
  },
  {
    title: "Platform Integration",
    desc: "Adding AI features to existing websites, web apps, mobile apps, and admin dashboards.",
    icon: PlugZap,
  },
];

const performanceList = [
  "Practical: tied to a clear business use case, not added for the sake of it.",
  "Secure: your data is handled through secure APIs, with access control and validation in place.",
  "Controlled: guardrails, review steps and fallbacks so the AI stays within the boundaries you set.",
  "Integrated: works inside your existing website, app or workflow instead of becoming another tool to manage.",
  "Scalable: architecture that supports more users, more data and new capabilities over time.",
  "Maintainable: clean, well-structured code and clear documentation that keep future updates simple.",
];

const whyChooseUs = [
  {
    title: "Business-first thinking.",
    desc: "We start with the problem, then choose the right AI, not the other way around.",
  },
  {
    title: "Software & AI under one roof.",
    desc: "Our web and app development experience means AI is integrated properly into real products.",
  },
  {
    title: "Custom-built, not generic.",
    desc: "We build strictly around your data, your workflow, and your requirements.",
  },
  {
    title: "End-to-end ownership.",
    desc: "Planning, development, deployment, and support are handled by one cohesive team.",
  },
  {
    title: "Honest guidance.",
    desc: "We tell you clearly what AI can and cannot do for your specific use case.",
  },
];

const AIIntegration = () => {
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
      title="AI Integration Services"
      description="Zoidics Software Service helps businesses integrate AI into existing websites, web apps, mobile apps, and business systems to automate workflows, improve customer experiences, and solve real business problems."
      keywords="AI integration services, AI integration company Chennai, AI development Chennai, artificial intelligence integration, AI automation, business AI solutions, AI API integration, OpenAI integration, Gemini integration, Claude integration, RAG integration, AI web app integration, AI mobile app integration"
      url="https://zoidics.com/services/ai-integration"
    />
    <div
      ref={containerRef}
      className="w-full font-['Sora',sans-serif] bg-white text-[#080808] overflow-hidden"
    >
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12 bg-[#ffebda]">
        <div className="container mx-auto max-w-[1200px] relative z-10 flex flex-col items-start text-left">
          <p className="gsap-fade-up text-[#ff8a24] font-bold text-[13px] mb-6 uppercase tracking-[0.15em]">
            AI Integration
          </p>
          <h1 className="gsap-fade-up text-[48px] md:text-[64px] lg:text-[76px] font-bold leading-[1.05] tracking-tight mb-8 relative z-10 max-w-[1000px]">
            <span className="absolute -left-4 top-2 w-[60px] md:w-[75px] h-[60px] md:h-[75px] bg-[#ffce85] rounded-full -z-10 mix-blend-multiply"></span>
            AI Integration That Fits Into the Way Your Business Already Works.
          </h1>

          <div className="gsap-fade-up max-w-[650px]">
            <p className="text-[18px] md:text-[22px] text-[#080808] font-bold mb-5 leading-[1.4]">
              Practical. Secure. Scalable. AI that solves real business
              problems.
            </p>
            <p className="text-[16px] md:text-[18px] text-[#444] leading-[1.7] mb-10">
              At Zoidics, we help businesses add AI to the websites, apps and
              systems they already use. Instead of chasing trends, we identify
              where AI can save time, reduce manual work and improve customer
              experience, then build and integrate it properly. We handle
              everything from use-case planning and development to API
              integration, deployment and long-term support.
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
              A proven, transparent process to ensure AI is used where it
              genuinely helps.
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
              We choose proven, modern tools that suit your use case instead of
              forcing every project into the same stack.
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
                CAPABILITIES
              </p>
              <h2 className="text-[40px] md:text-[56px] font-bold text-[#080808] leading-none relative z-10">
                <span className="absolute -left-3 top-1 w-12 h-12 bg-[#ffce85] rounded-full -z-10 mix-blend-multiply"></span>
                What we build
              </h2>
            </div>
            <p className="text-[#666] max-w-md text-[16px] leading-relaxed">
              Need something that isn't listed? If it can be built with today's
              AI tools, we can help you build it.
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
              Built for Reliability & Trust
            </h2>
            <p className="text-[#555] mb-8 text-[16px]">
              AI is only useful when you can depend on it. Every solution we
              deliver is:
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
              You bring the business problem.{" "}
              <span className="text-[#ff8a24]">
                We bring the AI and engineering to solve it.
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
                <span className="text-[#ffb646]">Ready to Bring AI</span>
                <br />
                <span className="text-white">Into Your Business?</span>
              </h2>

              <p className="text-[#a1a1a1] text-[16px] md:text-[18px] leading-[1.6] mb-12 max-w-lg">
                Tell us what you want to improve and we'll help you turn it into
                a practical, secure and scalable AI solution.
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

export default AIIntegration;
