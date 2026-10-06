import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  CheckCircle2,
  Users,
  ShoppingCart,
  CalendarCheck,
  MessageSquare,
  MapPin,
  Search,
  BarChart3,
  Settings,
} from "lucide-react";
import Seo from "../components/Seo";

gsap.registerPlugin(ScrollTrigger);

// --- Content Data ---
const workProcess = [
  {
    step: "01",
    title: "Understand",
    desc: "We start by learning your business, target users, competitors and goals, so we build the right app for the right audience.",
  },
  {
    step: "02",
    title: "Plan",
    desc: "We define the app's features, user flows, platforms, technology stack and development roadmap before any code is written.",
  },
  {
    step: "03",
    title: "Design",
    desc: "We create intuitive, modern UI/UX designs that follow Android and iOS design standards and reflect your brand.",
  },
  {
    step: "04",
    title: "Develop",
    desc: "Our team builds the app frontend, backend, APIs, database, authentication, integrations and business logic.",
  },
  {
    step: "05",
    title: "Test",
    desc: "We test functionality, performance, security, APIs, and behavior across different devices, screen sizes and OS versions.",
  },
  {
    step: "06",
    title: "Launch",
    desc: "We prepare and publish your app on the Google Play Store and Apple App Store, and set up the backend and servers it runs on.",
  },
  {
    step: "07",
    title: "Maintain & Improve",
    desc: "After launch, we provide bug fixes, OS compatibility updates, security improvements, new features and technical support.",
  },
];

const technologies = [
  {
    area: "Mobile",
    tech: "React Native, Flutter, native Android (Kotlin), native iOS (Swift)",
  },
  { area: "Backend", tech: "Node.js, Express.js, REST APIs, Python / FastAPI" },
  { area: "Databases", tech: "PostgreSQL, MySQL, MongoDB, Firebase" },
  {
    area: "Security",
    tech: "JWT auth, role-based access, data validation, SSL",
  },
  {
    area: "Integrations",
    tech: "Payments, WhatsApp/SMS, push notifications, Maps, AI APIs, Google",
  },
  {
    area: "Deployment",
    tech: "Google Play Store, Apple App Store, VPS, Docker, CI/CD",
  },
];

const features = [
  {
    title: "Users & Access",
    desc: "Registration, login, OTP verification, admin roles, multi-role access, and user profiles.",
    icon: Users,
  },
  {
    title: "Commerce",
    desc: "Product catalogues, cart and checkout, in-app payments, order management and tracking.",
    icon: ShoppingCart,
  },
  {
    title: "Bookings",
    desc: "Intelligent appointment scheduling and custom booking management flows.",
    icon: CalendarCheck,
  },
  {
    title: "Communication",
    desc: "Push notifications, in-app messaging, email, SMS, and WhatsApp integrations.",
    icon: MessageSquare,
  },
  {
    title: "Location",
    desc: "Maps integration, live location tracking, and nearby search capabilities.",
    icon: MapPin,
  },
  {
    title: "Content & Usability",
    desc: "Advanced search, filtering, file uploads, document management, and offline support.",
    icon: Search,
  },
  {
    title: "Insights & Growth",
    desc: "Custom reports, admin dashboards, and deep analytics integration.",
    icon: BarChart3,
  },
  {
    title: "Advanced",
    desc: "Custom API integrations and modern AI-powered features.",
    icon: Settings,
  },
];

const performanceList = [
  "Smooth: responsive, easy to navigate and comfortable to use on phones of different sizes.",
  "Fast: optimized loading, efficient APIs and performance-focused development.",
  "Secure: authentication, authorization, validation and production-ready security practices.",
  "Cross-platform ready: available on Android and iOS, so you reach more of your customers.",
  "Scalable: architecture that supports new features and a growing user base.",
  "Maintainable: clean, well-structured code that keeps future updates simple.",
];

const whyChooseUs = [
  {
    title: "Business-first thinking.",
    desc: "We start with your goals and your users, not with a template.",
  },
  {
    title: "Custom-built, not generic.",
    desc: "From a simple customer app to a full platform, we build around actual requirements.",
  },
  {
    title: "End-to-end ownership.",
    desc: "Design, development, app store launch and support are handled by one team.",
  },
  {
    title: "Built to last.",
    desc: "Clean code and scalable architecture mean your app can grow without being rebuilt.",
  },
  {
    title: "Clear communication.",
    desc: "You always know what is being built, why, and what comes next.",
  },
];

const AppDevelopment = () => {
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
        title="Mobile App Development"
        description="Zoidics Software Solutions designs and develops fast, secure, scalable mobile apps for businesses, startups, and organizations with modern UI/UX, powerful APIs, integrations, and reliable backend systems."
        keywords="mobile app development, mobile app development company Chennai, app development Chennai, Android app development, iOS app development, React Native app development, Flutter app development, custom mobile apps, business mobile app, mobile application development, app UI UX design, app API integration"
        url="https://zoidics.com/services/app-development"
      />

      <div
        ref={containerRef}
        className="w-full font-['Sora',sans-serif] bg-white text-[#080808] overflow-hidden"
      >
        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12 bg-[#ffebda]">
          <div className="container mx-auto max-w-[1200px] relative z-10 flex flex-col items-start text-left">
            <p className="gsap-fade-up text-[#ff8a24] font-bold text-[13px] mb-6 uppercase tracking-[0.15em]">
              App Development
            </p>
            <h1 className="gsap-fade-up text-[48px] md:text-[64px] lg:text-[76px] font-bold leading-[1.05] tracking-tight mb-8 relative z-10 max-w-[950px]">
              <span className="absolute -left-4 top-2 w-[60px] md:w-[75px] h-[60px] md:h-[75px] bg-[#ffce85] rounded-full -z-10 mix-blend-multiply"></span>
              Mobile Apps Built Around Your Business and Your Users.
            </h1>

            <div className="gsap-fade-up max-w-[650px]">
              <p className="text-[18px] md:text-[22px] text-[#080808] font-bold mb-5 leading-[1.4]">
                Smooth. Secure. Scalable. Designed for the way your customers
                use their phones.
              </p>
              <p className="text-[16px] md:text-[18px] text-[#444] leading-[1.7] mb-10">
                At Zoidics, we design and develop mobile apps that do real work
                for your business: engaging customers, taking orders and
                bookings, and simplifying daily operations. We handle everything
                from UI/UX design and development to API integration, app store
                launch and long-term support.
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
                A proven, transparent process to take your idea from concept to
                a fully functioning live application.
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
                forcing every project into the same stack.
              </p>
            </div>

            {/* Tech Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-32 gsap-stagger-grid">
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
                Need something that isn't listed? If it can be built for mobile,
                our team can engineer it.
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
                Built for Performance
              </h2>
              <p className="text-[#555] mb-8 text-[16px]">
                A good app is more than a good design. Every app we deliver is:
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
                You bring the app idea.{" "}
                <span className="text-[#ff8a24]">
                  We build the technology behind it.
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
                  <span className="text-[#ffb646]">Have an app idea</span>
                  <br />
                  <span className="text-white">in mind?</span>
                </h2>

                <p className="text-[#a1a1a1] text-[16px] md:text-[18px] leading-[1.6] mb-12 max-w-lg">
                  Tell us about your idea and we'll help you turn it into a
                  fast, modern and scalable mobile app.
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

export default AppDevelopment;
