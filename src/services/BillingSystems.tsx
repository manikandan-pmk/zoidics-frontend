import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  CheckCircle2,
  Receipt,
  Calculator,
  Store,
  CreditCard,
  Users,
  Boxes,
  Repeat,
  Tags,
  Network,
  Bell,
  PieChart,
  BookOpen,
  Cloud,
  Lock,
  Bot,
} from "lucide-react";
import Seo from "../components/Seo";

gsap.registerPlugin(ScrollTrigger);

// --- Content Data ---
const workProcess = [
  {
    step: "01",
    title: "Understand",
    desc: "We start by learning how you bill today: your products and services, tax rules, payment methods, staff roles, branches and the problems you face.",
  },
  {
    step: "02",
    title: "Plan",
    desc: "We define the modules, billing flows, tax and invoice formats, reports, integrations, technology stack and roadmap before any code is written.",
  },
  {
    step: "03",
    title: "Design",
    desc: "We create clean, simple interfaces for billing counters, back-office screens and reports, so your staff can learn quickly and work without mistakes.",
  },
  {
    step: "04",
    title: "Develop",
    desc: "Our team builds the billing engine, admin panel, backend, APIs, authentication, and the business rules that match how your business calculates prices and taxes.",
  },
  {
    step: "05",
    title: "Test",
    desc: "We test calculations, tax handling, discounts, returns, payments, reports, permissions, performance and security, using real scenarios.",
  },
  {
    step: "06",
    title: "Deploy",
    desc: "We take your system live with server and database configuration, secure access, backups and data setup, and help you load your products and customers.",
  },
  {
    step: "07",
    title: "Maintain & Improve",
    desc: "After launch, we provide bug fixes, updates for tax and regulation changes, new features, backups, security improvements and technical support.",
  },
];

const technologies = [
  {
    area: "Frontend",
    tech: "React.js, Next.js, Tailwind CSS, JavaScript / TypeScript",
  },
  { area: "Backend", tech: "Node.js, Express.js, REST APIs, Python / FastAPI" },
  { area: "Databases", tech: "PostgreSQL, MySQL, MongoDB" },
  {
    area: "Billing Features",
    tech: "Invoice/receipt generation, PDF export, tax calculation, discount & pricing rules, recurring logic",
  },
  {
    area: "Payments",
    tech: "Razorpay, Stripe, PayPal, UPI, cards, net banking, wallets and cash records",
  },
  {
    area: "Security",
    tech: "JWT auth, role-based access, secure APIs, data validation, audit logs, SSL",
  },
  {
    area: "Integrations",
    tech: "WhatsApp & SMS, email, accounting tools, inventory, CRMs, barcode scanners, printers",
  },
  {
    area: "Deployment",
    tech: "VPS / cloud servers, Docker, Nginx, PM2, CI/CD, automated backups",
  },
];

const features = [
  {
    title: "Invoicing",
    desc: "Professional invoices, quotations, estimates, proforma invoices, credit notes and receipts in your own format and branding.",
    icon: Receipt,
  },
  {
    title: "Tax Handling",
    desc: "GST-ready invoices with tax calculation, HSN/SAC codes and multiple tax rates, adaptable to other tax rules.",
    icon: Calculator,
  },
  {
    title: "POS Billing",
    desc: "Fast counter billing, barcode scanning, bill printing, hold and resume bills, returns and exchanges.",
    icon: Store,
  },
  {
    title: "Payments",
    desc: "Multiple payment methods, split payments, partial payments, payment links and status tracking.",
    icon: CreditCard,
  },
  {
    title: "Customer Management",
    desc: "Customer records, purchase history, outstanding balances, credit limits and statements.",
    icon: Users,
  },
  {
    title: "Inventory Integration",
    desc: "Stock deduction on billing, low-stock alerts, product management, purchase and supplier records.",
    icon: Boxes,
  },
  {
    title: "Recurring Billing",
    desc: "Automatic invoice generation, renewal reminders and billing cycles for memberships and services.",
    icon: Repeat,
  },
  {
    title: "Discounts & Pricing",
    desc: "Coupons, offers, price lists, customer-specific pricing and bulk pricing configurations.",
    icon: Tags,
  },
  {
    title: "Multi-Branch & Users",
    desc: "Manage several outlets or counters, staff accounts, role-based permissions and activity logs.",
    icon: Network,
  },
  {
    title: "Notifications",
    desc: "Invoices and payment reminders sent automatically by WhatsApp, SMS and email.",
    icon: Bell,
  },
  {
    title: "Reports & Analytics",
    desc: "Sales, tax, profit, outstanding payments, product-wise and staff-wise reports with export options.",
    icon: PieChart,
  },
  {
    title: "Accounting Integration",
    desc: "Connecting billing data to your accounting software to effectively reduce duplicate entry.",
    icon: BookOpen,
  },
  {
    title: "Web, Mobile & Cloud",
    desc: "Use the system from a browser or phone, with data safely stored, synced and backed up.",
    icon: Cloud,
  },
  {
    title: "Customer Portal",
    desc: "A secure login where customers can view invoices, download receipts and track payments.",
    icon: Lock,
  },
  {
    title: "AI-Powered Features",
    desc: "Extracting data from supplier bills, smart reports and natural-language queries on sales data.",
    icon: Bot,
  },
];

const performanceList = [
  "Accurate: calculation rules, validation and tax logic tested against your real-world scenarios.",
  "Secure: protected data, role-based access, audit logs and production-ready security practices.",
  "Fast: quick billing at the counter, even during busy hours.",
  "Easy to use: simple screens that staff can learn quickly, with fewer mistakes.",
  "Traceable: activity logs and records that show who created, changed or cancelled a bill.",
  "Backed up: regular data backups and recovery planning, so your records are protected.",
  "Scalable: supports more products, customers, users and branches as your business grows.",
  "Maintainable: clean, well-structured code that keeps future updates simple.",
];

const whyChooseUs = [
  {
    title: "Business-first thinking.",
    desc: "We start with how you actually bill and report, not with a generic template.",
  },
  {
    title: "Custom-built, not generic.",
    desc: "Instead of adapting your business to fixed software, we build the system around your workflow.",
  },
  {
    title: "Everything under one roof.",
    desc: "Web, mobile apps, automation, e-commerce and AI are all part of what we do, so your billing system connects perfectly.",
  },
  {
    title: "End-to-end ownership.",
    desc: "Design, development, deployment, data setup and support are handled by one cohesive team.",
  },
  {
    title: "Clear communication.",
    desc: "You always know exactly what is being built, why, and what comes next.",
  },
];

const BillingSystems = () => {
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
      title="Billing Software Development"
      description="Zoidics Software Solutions builds custom billing and invoicing systems for businesses with GST-ready billing, POS, payments, inventory, customer management, reports, accounting integrations, and scalable cloud solutions."
      keywords="billing software development, billing software company Chennai, custom billing software, invoicing software Chennai, GST billing software, POS billing software, invoice management system, billing system development, payment integration, inventory billing software, business billing software, accounting integration"
      url="https://zoidics.com/services/billing-systems"
    />
    <div
      ref={containerRef}
      className="w-full font-['Sora',sans-serif] bg-white text-[#080808] overflow-hidden"
    >
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12 bg-[#ffebda]">
        <div className="container mx-auto max-w-[1200px] relative z-10 flex flex-col items-start text-left">
          <p className="gsap-fade-up text-[#ff8a24] font-bold text-[13px] mb-6 uppercase tracking-[0.15em]">
            Billing Systems
          </p>
          <h1 className="gsap-fade-up text-[48px] md:text-[64px] lg:text-[76px] font-bold leading-[1.05] tracking-tight mb-8 relative z-10 max-w-[1000px]">
            <span className="absolute -left-4 top-2 w-[60px] md:w-[75px] h-[60px] md:h-[75px] bg-[#ffce85] rounded-full -z-10 mix-blend-multiply"></span>
            Billing Systems Built to Keep Your Business Accurate and Organized.
          </h1>

          <div className="gsap-fade-up max-w-[650px]">
            <p className="text-[18px] md:text-[22px] text-[#080808] font-bold mb-5 leading-[1.4]">
              Accurate. Fast. Easy to use. Billing software designed around how
              you actually sell.
            </p>
            <p className="text-[16px] md:text-[18px] text-[#444] leading-[1.7] mb-10">
              At Zoidics, we design and develop billing and invoicing systems
              that help businesses create bills quickly, track payments, manage
              customers and stay on top of their numbers. Whether you run a
              shop, a service business, a clinic, a restaurant or a growing
              company with several branches, we build around your products, your
              tax requirements and your daily workflow.
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
              A proven, transparent process to take your billing from manual
              headaches to a seamless, automated flow.
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
              We choose proven, modern tools that suit your business instead of
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
              Need something that isn't listed? If it follows a billing or
              invoicing workflow, we can build it.
            </p>
          </div>

          {/* Features Grid (15 items -> 3 columns) */}
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
              Built for Accuracy & Trust
            </h2>
            <p className="text-[#555] mb-8 text-[16px]">
              Billing errors cost money and credibility. Every billing system we
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
              You bring the business and its numbers.{" "}
              <span className="text-[#ff8a24]">
                We build the system that keeps them right.
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
                <span className="text-[#ffb646]">Ready to Simplify</span>
                <br />
                <span className="text-white">Your Billing?</span>
              </h2>

              <p className="text-[#a1a1a1] text-[16px] md:text-[18px] leading-[1.6] mb-12 max-w-lg">
                Tell us how you bill today and where it slows you down, and
                we'll help you turn it into a fast, accurate and reliable
                billing system.
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

export default BillingSystems;
