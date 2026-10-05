import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  CheckCircle2,
  Server,
  Cloud,
  Rocket,
  Globe,
  Box,
  GitBranch,
  Database,
  HardDrive,
  Activity,
  ShieldCheck,
  Zap,
  TrendingUp,
  Layers,
  PieChart,
  LifeBuoy,
} from "lucide-react";
import Seo from "../components/Seo";

gsap.registerPlugin(ScrollTrigger);

// --- Content Data ---
const workProcess = [
  {
    step: "01",
    title: "Understand",
    desc: "We start by learning what you are running, how many people use it, where your data lives, what your current hosting looks like and what has been going wrong.",
  },
  {
    step: "02",
    title: "Plan",
    desc: "We design the infrastructure: hosting provider, server sizing, database setup, environments, security, backup strategy, deployment approach and roadmap.",
  },
  {
    step: "03",
    title: "Architect",
    desc: "We define how the pieces fit together: servers, networking, storage, load handling, domains, environments, and access rules for your team.",
  },
  {
    step: "04",
    title: "Build",
    desc: "We set up the servers, containers, databases, reverse proxies, SSL, environment configuration and automated deployment pipelines.",
  },
  {
    step: "05",
    title: "Test",
    desc: "We test deployments, rollbacks, failover behavior, performance, security settings and backup restoration, so we know it works before you depend on it.",
  },
  {
    step: "06",
    title: "Go Live",
    desc: "We move your application to production with domain and DNS configuration, data migration and a planned cutover, to reduce downtime and risk.",
  },
  {
    step: "07",
    title: "Monitor & Improve",
    desc: "After launch, we monitor servers and applications, apply updates, review performance and costs, and improve the setup as your traffic grows.",
  },
];

const technologies = [
  {
    area: "Cloud & Hosting",
    tech: "AWS, Google Cloud, DigitalOcean, VPS and dedicated servers",
  },
  {
    area: "Containers",
    tech: "Docker, Docker Compose, container-based deployments",
  },
  {
    area: "Web Servers & Proxies",
    tech: "Nginx, reverse proxies, load balancing, caching",
  },
  {
    area: "Process Management",
    tech: "PM2, systemd, background workers and schedulers",
  },
  {
    area: "CI/CD",
    tech: "GitHub Actions, GitLab CI, automated build, test and deployment pipelines",
  },
  {
    area: "Databases",
    tech: "PostgreSQL, MySQL, MongoDB, managed database services, replication and backups",
  },
  {
    area: "Domains & Security",
    tech: "DNS configuration, SSL/TLS certificates, firewalls, SSH key access, secrets management, HTTPS enforcement",
  },
  {
    area: "Monitoring & Logging",
    tech: "Uptime monitoring, server metrics, application logs, error tracking, alerts",
  },
  {
    area: "Storage & Delivery",
    tech: "Cloud object storage, CDN, file and media hosting",
  },
];

const features = [
  {
    title: "Application Deployment",
    desc: "Deploying websites, web apps, APIs and backends built on Node.js, Python, React, Next.js and more.",
    icon: Rocket,
  },
  {
    title: "Server Setup & Config",
    desc: "Setting up and hardening VPS, cloud and dedicated servers for production readiness.",
    icon: Server,
  },
  {
    title: "Domain, DNS & SSL",
    desc: "Domain configuration, subdomains, email DNS records and SSL certificate setup and renewal.",
    icon: Globe,
  },
  {
    title: "Containerization",
    desc: "Packaging your application with Docker for consistent, repeatable deployments.",
    icon: Box,
  },
  {
    title: "CI/CD Pipelines",
    desc: "Automated testing and deployment workflows, so releases are faster and less error-prone.",
    icon: GitBranch,
  },
  {
    title: "Database Management",
    desc: "Installation, configuration, tuning, migrations and strict access control.",
    icon: Database,
  },
  {
    title: "Backups & Recovery",
    desc: "Automated backups, off-site storage, restore testing and disaster recovery planning.",
    icon: HardDrive,
  },
  {
    title: "Monitoring & Alerts",
    desc: "Uptime checks, resource monitoring, error tracking and alerts when something goes wrong.",
    icon: Activity,
  },
  {
    title: "Security Hardening",
    desc: "Firewalls, access control, patching, secure configuration and secrets handling.",
    icon: ShieldCheck,
  },
  {
    title: "Performance Optimization",
    desc: "Caching, compression, CDN setup, database tuning and load handling.",
    icon: Zap,
  },
  {
    title: "Cloud Migration",
    desc: "Moving applications from shared hosting, older servers or other providers to better infrastructure.",
    icon: Cloud,
  },
  {
    title: "Scaling Support",
    desc: "Preparing your setup for higher traffic with load balancing and resource planning.",
    icon: TrendingUp,
  },
  {
    title: "Environment Management",
    desc: "Separate, secure development, staging and production environments.",
    icon: Layers,
  },
  {
    title: "Resource & Cost Review",
    desc: "Checking that you are not over-provisioned or paying for unused resources.",
    icon: PieChart,
  },
  {
    title: "Maintenance & Support",
    desc: "Regular updates, patches, troubleshooting and dedicated technical support.",
    icon: LifeBuoy,
  },
];

const performanceList = [
  "Reliable: built with monitoring, automated restarts and tested recovery steps.",
  "Secure: locked-down access, encrypted connections, regular patching and production-ready practices.",
  "Repeatable: deployments that follow a defined process, so releases don't depend on one person's memory.",
  "Recoverable: regular backups, with restore processes that have actually been tested.",
  "Observable: logs and alerts that show what is happening and warn you early when something is wrong.",
  "Scalable: infrastructure that can grow with more users, data and features.",
  "Documented: clear documentation of your setup, so you are never locked in or left guessing.",
];

const whyChooseUs = [
  {
    title: "Developers who deploy their own work.",
    desc: "We build web apps, mobile backends and AI solutions, so we know exactly how they need to run in production.",
  },
  {
    title: "Business-first thinking.",
    desc: "We size infrastructure for your actual needs, instead of selling you more than you require.",
  },
  {
    title: "No lock-in.",
    desc: "You own your accounts, servers and code, and we document the setup so you stay in complete control.",
  },
  {
    title: "End-to-end ownership.",
    desc: "Setup, deployment, monitoring and support are handled by one dedicated team.",
  },
  {
    title: "Honest guidance.",
    desc: "We tell you clearly what you need now and what can wait until your business grows.",
  },
];

const CloudAndDeployment = () => {
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
      title="Cloud & Deployment Services"
      description="Zoidics Software Service provides reliable cloud and deployment solutions for websites, web apps, APIs, and backend systems, including server setup, Docker, CI/CD, databases, SSL, monitoring, backups, security, cloud migration, and scalable production infrastructure."
      keywords="cloud deployment services, cloud deployment company Chennai, cloud hosting Chennai, deployment services, DevOps services Chennai, server setup, VPS deployment, Docker deployment, CI/CD pipeline, AWS deployment, Google Cloud deployment, DigitalOcean deployment, Nginx setup, SSL setup, database deployment, cloud migration, server monitoring, application deployment"
      url="https://zoidics.com/services/cloud-deployment"
    />
    <div
      ref={containerRef}
      className="w-full font-['Sora',sans-serif] bg-white text-[#080808] overflow-hidden"
    >
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12 bg-[#ffebda]">
        <div className="container mx-auto max-w-[1200px] relative z-10 flex flex-col items-start text-left">
          <p className="gsap-fade-up text-[#ff8a24] font-bold text-[13px] mb-6 uppercase tracking-[0.15em]">
            Cloud & Deployment
          </p>
          <h1 className="gsap-fade-up text-[48px] md:text-[64px] lg:text-[76px] font-bold leading-[1.05] tracking-tight mb-8 relative z-10 max-w-[1050px]">
            <span className="absolute -left-4 top-2 w-[60px] md:w-[75px] h-[60px] md:h-[75px] bg-[#ffce85] rounded-full -z-10 mix-blend-multiply"></span>
            Cloud & Deployment That Keeps Your Software Running Smoothly.
          </h1>

          <div className="gsap-fade-up max-w-[680px]">
            <p className="text-[18px] md:text-[22px] text-[#080808] font-bold mb-5 leading-[1.4]">
              Reliable. Secure. Scalable. Infrastructure set up properly, so you
              never have to worry about it.
            </p>
            <p className="text-[16px] md:text-[18px] text-[#444] leading-[1.7] mb-10">
              At Zoidics, we take your website, app or backend from a finished
              build to a stable production environment. We set up servers,
              databases, domains, SSL, deployment pipelines, monitoring and
              backups, then keep everything updated and secure as your business
              grows.
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
              A proven, transparent process to move your software to a robust,
              production-ready environment.
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
              We choose proven, widely supported tools that suit your project
              instead of forcing every project into the same setup.
            </p>
          </div>

          {/* Tech Grid (9 items -> 3 columns fits perfectly) */}
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
                Services We Provide
              </h2>
            </div>
            <p className="text-[#666] max-w-md text-[16px] leading-relaxed">
              Need something that isn't listed? If it relates to getting your
              software online and running, we can help.
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
              Built for Reliability & Security
            </h2>
            <p className="text-[#555] mb-8 text-[16px]">
              Infrastructure should be something you never have to think about.
              Every setup we deliver is:
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
              You bring the application.{" "}
              <span className="text-[#ff8a24]">
                We make sure it runs, safely and steadily.
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
                <span className="text-[#ffb646]">Ready to Get Your</span>
                <br />
                <span className="text-white">Software Live & Stable?</span>
              </h2>

              <p className="text-[#a1a1a1] text-[16px] md:text-[18px] leading-[1.6] mb-12 max-w-lg">
                Tell us what you are running and where it needs to go, and we'll
                help you build a secure, reliable and scalable setup.
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

export default CloudAndDeployment;
