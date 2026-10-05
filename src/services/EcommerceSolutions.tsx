import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  CheckCircle2,
  Store,
  Search,
  ShoppingCart,
  CreditCard,
  Package,
  Boxes,
  UserCircle,
  Truck,
  LayoutDashboard,
  Megaphone,
  Users,
  BarChart3,
  Globe,
  Smartphone,
  Bot,
} from "lucide-react";
import Seo from "../components/Seo";

gsap.registerPlugin(ScrollTrigger);

// --- Content Data ---
const workProcess = [
  {
    step: "01",
    title: "Understand",
    desc: "We start by learning your business, your products, your customers, your competitors and how you currently sell, ship and manage orders.",
  },
  {
    step: "02",
    title: "Plan",
    desc: "We define the store structure, product catalogue, features, payment and shipping setup, integrations, technology stack and roadmap before any code is written.",
  },
  {
    step: "03",
    title: "Design",
    desc: "We create modern, mobile-friendly UI/UX designs that reflect your brand and make browsing, choosing and checking out quick and easy.",
  },
  {
    step: "04",
    title: "Develop",
    desc: "Our team builds the storefront, admin panel, backend, APIs, database, authentication, payment and shipping integrations, and the business logic that runs your store.",
  },
  {
    step: "05",
    title: "Test",
    desc: "We test the full buying journey, including search, cart, checkout, payments, order emails, inventory updates and refunds, along with performance, security and behavior.",
  },
  {
    step: "06",
    title: "Launch",
    desc: "We take your store live with domain setup, SSL, server and database configuration, and performance optimization, and help you load your products and settings.",
  },
  {
    step: "07",
    title: "Maintain & Improve",
    desc: "After launch, we provide bug fixes, security updates, new features, integration updates and technical support, and help you improve the store as your business grows.",
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
    area: "Payments",
    tech: "Razorpay, Stripe, PayPal, UPI, cards, net banking and wallets",
  },
  {
    area: "Shipping & Logistics",
    tech: "Courier and shipping API integrations, shipping rate and tracking updates",
  },
  {
    area: "Security",
    tech: "JWT auth, role-based access, secure API architecture, data validation, SSL",
  },
  {
    area: "Integrations",
    tech: "WhatsApp & SMS, email, accounting, CRMs, Google services, analytics, third-party & AI APIs",
  },
  {
    area: "Deployment",
    tech: "VPS / cloud servers, Docker, Nginx, PM2, CI/CD, domain and SSL configuration",
  },
];

const features = [
  {
    title: "Storefront",
    desc: "Product pages, categories, collections, variants like size and colour, image galleries, wishlists.",
    icon: Store,
  },
  {
    title: "Search & Discovery",
    desc: "Smart search, filters, sorting, product recommendations, related products.",
    icon: Search,
  },
  {
    title: "Cart & Checkout",
    desc: "Shopping cart, guest and registered checkout, coupons and discounts, address management.",
    icon: ShoppingCart,
  },
  {
    title: "Payments",
    desc: "Online payments, multiple methods, cash on delivery, payment confirmation and refund handling.",
    icon: CreditCard,
  },
  {
    title: "Order Management",
    desc: "Order processing, status updates, invoices, returns and exchanges, customer notifications.",
    icon: Package,
  },
  {
    title: "Inventory Management",
    desc: "Stock tracking, low-stock alerts, product and variant management, bulk upload and updates.",
    icon: Boxes,
  },
  {
    title: "Customer Accounts",
    desc: "Registration and login, order history, saved addresses, customer dashboards.",
    icon: UserCircle,
  },
  {
    title: "Shipping & Delivery",
    desc: "Shipping rules, delivery area and rate setup, courier integration, order tracking.",
    icon: Truck,
  },
  {
    title: "Admin Dashboard",
    desc: "Manage products, orders, customers, content, offers, staff roles and permissions.",
    icon: LayoutDashboard,
  },
  {
    title: "Marketing Tools",
    desc: "Discount codes, promotions, abandoned cart reminders, email, SMS and WhatsApp notifications.",
    icon: Megaphone,
  },
  {
    title: "Multi-Vendor",
    desc: "Multiple sellers, vendor dashboards, marketplace logic, and commission management.",
    icon: Users,
  },
  {
    title: "Reports & Analytics",
    desc: "Sales, orders, products and customer reports, and deep analytics integration.",
    icon: BarChart3,
  },
  {
    title: "SEO Optimization",
    desc: "Structured product pages, clean URLs, and technical foundations that help search engines.",
    icon: Globe,
  },
  {
    title: "Mobile Apps",
    desc: "Companion Android and iOS shopping apps connected seamlessly to the same store.",
    icon: Smartphone,
  },
  {
    title: "AI-Powered Features",
    desc: "Intelligent shopping assistants, product recommendations and customer support chatbots.",
    icon: Bot,
  },
];

const performanceList = [
  "Responsive: works smoothly on mobile, tablet and desktop, where most shoppers browse.",
  "Fast: optimized loading, efficient APIs and performance-focused development.",
  "Secure: safe authentication, secure payment handling, validation and production-ready security practices.",
  "Easy to manage: a clear admin panel so your team can handle products, orders and offers without a developer.",
  "SEO-friendly: clean structure and technical foundations that help your products get found.",
  "Scalable: architecture that supports more products, more orders and new features as your business grows.",
  "Maintainable: clean, well-structured code that keeps future updates simple.",
];

const whyChooseUs = [
  {
    title: "Business-first thinking.",
    desc: "We start with how you actually sell, not with a rigid template.",
  },
  {
    title: "Custom-built, not generic.",
    desc: "From a simple online shop to a full custom platform, we build around your actual requirements.",
  },
  {
    title: "Everything under one roof.",
    desc: "Web, mobile apps, automation, AI and SEO are all part of what we do, connecting your store to your entire business.",
  },
  {
    title: "End-to-end ownership.",
    desc: "Design, development, payment setup, launch and support are handled by one cohesive team.",
  },
  {
    title: "Clear communication.",
    desc: "You always know what is being built, why, and exactly what comes next.",
  },
];

const EcommerceSolutions = () => {
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
      title="E-commerce Development Services"
      description="Zoidics Software Service builds fast, secure, scalable e-commerce websites and online stores with product catalogues, search, cart and checkout, payments, inventory, shipping, admin dashboards, marketing tools, analytics, mobile apps, and AI-powered features."
      keywords="e-commerce development, ecommerce development company Chennai, e-commerce website development, ecommerce website Chennai, online store development, custom ecommerce development, shopping website development, React ecommerce, Next.js ecommerce, payment integration, Razorpay integration, Stripe integration, ecommerce admin panel, inventory management, multi-vendor ecommerce, ecommerce mobile app, ecommerce SEO, AI ecommerce"
      url="https://zoidics.com/services/ecommerce-solutions"
    />
    <div
      ref={containerRef}
      className="w-full font-['Sora',sans-serif] bg-white text-[#080808] overflow-hidden"
    >
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12 bg-[#ffebda]">
        <div className="container mx-auto max-w-[1200px] relative z-10 flex flex-col items-start text-left">
          <p className="gsap-fade-up text-[#ff8a24] font-bold text-[13px] mb-6 uppercase tracking-[0.15em]">
            E-commerce Solutions
          </p>
          <h1 className="gsap-fade-up text-[48px] md:text-[64px] lg:text-[76px] font-bold leading-[1.05] tracking-tight mb-8 relative z-10 max-w-[1000px]">
            <span className="absolute -left-4 top-2 w-[60px] md:w-[75px] h-[60px] md:h-[75px] bg-[#ffce85] rounded-full -z-10 mix-blend-multiply"></span>
            E-commerce Solutions Built to Sell and Built to Scale.
          </h1>

          <div className="gsap-fade-up max-w-[650px]">
            <p className="text-[18px] md:text-[22px] text-[#080808] font-bold mb-5 leading-[1.4]">
              Fast. Secure. Easy to manage. Online stores designed to turn
              browsers into buyers.
            </p>
            <p className="text-[16px] md:text-[18px] text-[#444] leading-[1.7] mb-10">
              At Zoidics, we design and develop online stores that make it
              simple for customers to find products, pay securely and receive
              their orders, and simple for you to manage everything behind the
              scenes. Whether you are launching your first store or moving to a
              more powerful platform, we build around your products, your
              customers and your way of doing business.
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
              A proven, transparent process to take your e-commerce vision from
              concept to a thriving online store.
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
              We choose proven, modern tools that suit your store instead of
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
              Need something that isn't listed? If it can be built for online
              selling, we can build it.
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
              Built for Performance & Growth
            </h2>
            <p className="text-[#555] mb-8 text-[16px]">
              A good store is more than a good-looking catalogue. Every
              e-commerce solution we deliver is:
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
              You bring the products and the customers.{" "}
              <span className="text-[#ff8a24]">
                We build the store that sells them.
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
                <span className="text-[#ffb646]">Ready to Start</span>
                <br />
                <span className="text-white">Selling Online?</span>
              </h2>

              <p className="text-[#a1a1a1] text-[16px] md:text-[18px] leading-[1.6] mb-12 max-w-lg">
                Tell us about your products and your goals, and we'll help you
                turn them into a fast, secure and scalable online store.
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

export default EcommerceSolutions;
