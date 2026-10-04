import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  ExternalLink,
  X,
  Loader2,
  AlertCircle,
} from "lucide-react";
import api from "../api/axios";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   TYPES
========================================================= */

interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  imageUrl: string | null;
  liveUrl: string | null;
  githubUrl?: string | null;
  isPublished: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface ProjectsResponse {
  success: boolean;
  projects: Project[];
  message?: string;
}

/* =========================================================
   COMPONENT
========================================================= */

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const baseURL = api.defaults.baseURL || "https://api.zoidics.com";

  const getImageUrl = (imageUrl?: string | null): string => {
    if (!imageUrl) return "/placeholder-project.jpg";
    if (
      imageUrl.startsWith("http://") ||
      imageUrl.startsWith("https://") ||
      imageUrl.startsWith("data:")
    ) {
      return imageUrl;
    }
    return `${baseURL.replace(/\/$/, "")}/${imageUrl.replace(/^\//, "")}`;
  };

  useEffect(() => {
    let mounted = true;

    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await api.get<ProjectsResponse>("/api/projects");
        if (!mounted) return;

        if (response.data.success) {
          setProjects(
            Array.isArray(response.data.projects) ? response.data.projects : [],
          );
        } else {
          setError(response.data.message || "Failed to load projects.");
        }
      } catch (err: any) {
        if (!mounted) return;
        setError(
          err?.response?.data?.message ||
            "Unable to load projects. Please try again.",
        );
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchProjects();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (loading || projects.length === 0 || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portfolio-header",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );

      gsap.fromTo(
        ".portfolio-item",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: { trigger: ".portfolio-grid", start: "top 80%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [loading, projects]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const formatDate = (date?: string): string => {
    if (!date) return "";
    try {
      return new Date(date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "";
    }
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="w-full bg-[#ffe9d9] py-20 sm:py-24 lg:py-32 font-['Sora',sans-serif]"
      >
        <div className="mx-auto w-full max-w-[1300px] px-5 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="portfolio-header mb-12 text-center sm:mb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff8a24]">
              Portfolio
            </p>
            <h2 className="relative z-10 inline-block text-4xl font-bold tracking-tight text-[#080808] sm:text-5xl lg:text-[64px]">
              Our recent{" "}
              <span className="relative inline-block">
                <span className="absolute left-[-12%] top-[10%] -z-10 h-[45px] w-[45px] rounded-full bg-[#ffb646] opacity-90 mix-blend-multiply sm:h-[60px] sm:w-[60px]" />
                work
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
              Explore our latest projects, products and digital experiences.
            </p>
          </div>

          {/* States */}
          {loading && (
            <div className="flex min-h-[300px] items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <Loader2 size={35} className="animate-spin text-[#ff8a24]" />
                <p className="text-sm text-black/60">Loading projects...</p>
              </div>
            </div>
          )}

          {!loading && error && (
            <div className="flex min-h-[250px] items-center justify-center">
              <div className="flex max-w-md flex-col items-center rounded-2xl border border-red-200 bg-white p-8 text-center shadow-sm">
                <AlertCircle size={40} className="mb-4 text-red-500" />
                <h3 className="mb-2 text-lg font-semibold">
                  Unable to load projects
                </h3>
                <p className="text-sm leading-6 text-black/50">{error}</p>
              </div>
            </div>
          )}

          {!loading && !error && projects.length === 0 && (
            <div className="flex min-h-[250px] items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl font-semibold">No projects available</h3>
                <p className="mt-2 text-sm text-black/50">
                  Published projects will appear here.
                </p>
              </div>
            </div>
          )}

          {/* Grid */}
          {!loading && !error && projects.length > 0 && (
            <div className="portfolio-grid grid grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:gap-x-10 lg:gap-y-20">
              {projects.map((project) => (
                <article
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="portfolio-item group cursor-pointer"
                >
                  <div className="relative mb-5 h-[280px] w-full overflow-hidden rounded-[24px] bg-gray-100 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl sm:h-[350px] lg:h-[430px]">
                    <img
                      src={getImageUrl(project.imageUrl)}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder-project.jpg";
                      }}
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="p-6">
                        <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black shadow-lg">
                          View project
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-2 text-xs font-medium text-black/70">
                      <span className="h-2 w-2 rounded-full bg-black" />
                      {project.category}
                    </span>
                    {project.createdAt && (
                      <>
                        <span className="text-[#ff8a24]">•</span>
                        <span className="text-xs font-medium text-[#ff8a24]">
                          {formatDate(project.createdAt)}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-black/20 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-black/65"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-[10px] font-semibold text-black/45">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-2xl font-bold leading-tight text-[#080808] transition-colors duration-300 group-hover:text-[#ff8a24] sm:text-[28px]">
                        {project.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-black/55">
                        {project.shortDescription}
                      </p>
                    </div>
                    <div className="relative mt-1 h-9 w-9 shrink-0 overflow-hidden">
                      <ArrowUpRight
                        size={28}
                        strokeWidth={1.5}
                        className="absolute text-[#080808] transition-transform duration-400 ease-out group-hover:translate-x-10 group-hover:-translate-y-10"
                      />
                      <ArrowUpRight
                        size={28}
                        strokeWidth={1.5}
                        className="absolute -translate-x-10 translate-y-10 text-[#ff8a24] transition-transform duration-400 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                      />
                    </div>
                  </div>
                </article>
              ))}

              <div className="portfolio-item mt-2 w-full md:col-span-2">
                <button
                  onClick={() => navigate("/projects")}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#111] py-4 text-[16px] font-medium text-white transition-all duration-300 hover:bg-[#ff8a24] sm:py-5 sm:text-[17px]"
                >
                  View All Projects
                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          UPGRADED PROJECT DETAIL MODAL (Matching Image UI)
      ===================================================== */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md sm:p-6 lg:p-8"
          onClick={() => setSelectedProject(null)}
        >
          {/* Modal Container */}
          <div
            className="relative flex max-h-[95vh] w-full max-w-5xl flex-col overflow-y-auto rounded-[32px] bg-white shadow-2xl font-['Sora',sans-serif]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-md transition-transform hover:scale-105 hover:bg-gray-100 sm:right-6 sm:top-6"
            >
              <X size={22} />
            </button>

            {/* Image Header */}
            <div className="h-[250px] w-full shrink-0 bg-gray-100 sm:h-[350px] md:h-[450px]">
              <img
                src={getImageUrl(selectedProject.imageUrl)}
                alt={selectedProject.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-10 lg:p-14">
              {/* Category */}
              <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-[#ff8a24]">
                {selectedProject.category}
              </span>

              {/* Title & Live Button Flex Row */}
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-4xl font-bold leading-none text-[#080808] sm:text-5xl lg:text-[64px]">
                    {selectedProject.title}
                  </h2>
                  {selectedProject.slug && (
                    <p className="mt-3 text-sm font-medium text-black/30">
                      /{selectedProject.slug}
                    </p>
                  )}
                </div>

                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-[52px] shrink-0 items-center justify-center gap-2 rounded-full bg-[#080808] px-7 text-[15px] font-medium text-white transition-colors hover:bg-[#ff8a24]"
                  >
                    View Live Site
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              {/* Short Description */}
              <p className="mt-8 text-lg font-medium leading-relaxed text-black/80 sm:text-[22px]">
                {selectedProject.shortDescription}
              </p>

              {/* Divider */}
              <div className="my-10 h-px w-full bg-black/5"></div>

              {/* About & Technologies */}
              <div className="flex flex-col gap-10">
                <div>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-[#080808]">
                    About this project
                  </h3>
                  <p className="whitespace-pre-line text-base leading-8 text-black/60 sm:text-[17px]">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-[#080808]">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={`${tech}-${index}`}
                        className="rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-medium text-black/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
