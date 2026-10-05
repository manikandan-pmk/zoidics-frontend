import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  X,
  ExternalLink,
  Loader2,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import axios from "axios";
import Seo from "../components/Seo";
import api from "../api/axios";

gsap.registerPlugin(ScrollTrigger);

// =========================================================
// TYPES
// =========================================================

interface ProjectData {
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
  createdAt: string;
  updatedAt: string;
}

// =========================================================
// API
// =========================================================



/*
 * IMPORTANT:
 * Do NOT set Content-Type: application/json for GET requests
 * unnecessarily.
 */



// =========================================================
// IMAGE URL HELPER
// =========================================================

function getImageUrl(imageUrl: string | null) {
  if (!imageUrl) {
    return "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=1200";
  }

  /*
   * Backend returns:
   * /uploads/projects/example.png
   *
   * We need:
   * http://localhost:3000/uploads/projects/example.png
   */

  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl;
  }

  return `${api.defaults.baseURL}${imageUrl}`;
}

// =========================================================
// BENTO GRID
// =========================================================

function getGridClass(index: number) {
  const layouts = [
    "col-span-12 md:col-span-5 lg:col-span-4",
    "col-span-12 md:col-span-7 lg:col-span-8",
    "col-span-12 md:col-span-4 lg:col-span-4",
    "col-span-12 md:col-span-4 lg:col-span-4",
    "col-span-12 md:col-span-4 lg:col-span-4",
    "col-span-12 md:col-span-7 lg:col-span-8",
    "col-span-12 md:col-span-5 lg:col-span-4",
  ];

  return layouts[index % layouts.length];
}

function getHeightClass(index: number) {
  const heights = [
    "h-[350px] lg:h-[420px]",
    "h-[350px] lg:h-[420px]",
    "h-[300px] lg:h-[350px]",
    "h-[300px] lg:h-[350px]",
    "h-[300px] lg:h-[350px]",
    "h-[350px] lg:h-[420px]",
    "h-[350px] lg:h-[420px]",
  ];

  return heights[index % heights.length];
}

// =========================================================
// COMPONENT
// =========================================================

const Project = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [projects, setProjects] = useState<ProjectData[]>([]);

  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null,
  );

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // =========================================================
  // SEO
  // =========================================================

  /*
   * SEO is rendered before the project section.
   *
   * This gives the /projects page:
   * - Title
   * - Description
   * - Keywords
   * - Canonical URL
   * - Open Graph metadata
   * - Twitter metadata
   */

  // =========================================================
  // FETCH PROJECTS
  // =========================================================

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/api/projects");

      console.log("PROJECT API RESPONSE:", response.data);

      if (response.data?.success) {
        setProjects(response.data.projects || []);
      } else {
        throw new Error(response.data?.message || "Unable to load projects");
      }
    } catch (error) {
      console.error("FETCH PROJECTS ERROR:", error);

      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.message);

        console.error("Response:", error.response?.data);
      }

      setError("Unable to load projects. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // INITIAL FETCH
  // =========================================================

  useEffect(() => {
    fetchProjects();
  }, []);

  // =========================================================
  // GSAP ANIMATION
  // =========================================================

  useEffect(() => {
    if (loading || projects.length === 0) {
      return;
    }

    const ctx = gsap.context(() => {
      // Header animation

      gsap.fromTo(
        ".project-header",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      // Project cards animation

      gsap.fromTo(
        ".project-card",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".project-grid",
            start: "top 75%",
          },
        },
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [loading, projects]);

  // =========================================================
  // BODY SCROLL LOCK
  // =========================================================

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  // =========================================================
  // LOADING UI
  // =========================================================

  if (loading) {
    return (
      <>
        <Seo
          title="Our Projects"
          description="Explore Zoidics Software Service projects built with modern technologies, thoughtful design, scalable architecture, and powerful digital solutions."
          keywords="Zoidics projects, web development projects, React projects, Node.js projects, full stack projects, software development projects"
          url="https://zoidics.com/projects"
        />

        <section className="w-full bg-white py-24 font-['Sora',sans-serif]">
          <div className="container mx-auto flex min-h-[400px] max-w-[1300px] items-center justify-center px-6 lg:px-12">
            <div className="flex flex-col items-center gap-4">
              <Loader2 size={38} className="animate-spin text-[#ff8a24]" />

              <p className="text-sm text-gray-500">Loading projects...</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  // =========================================================
  // ERROR UI
  // =========================================================

  if (error) {
    return (
      <>
        <Seo
          title="Our Projects"
          description="Explore Zoidics Software Service projects built with modern technologies, thoughtful design, scalable architecture, and powerful digital solutions."
          keywords="Zoidics projects, web development projects, React projects, Node.js projects, full stack projects, software development projects"
          url="https://zoidics.com/projects"
        />

        <section className="w-full bg-white py-24 font-['Sora',sans-serif]">
          <div className="container mx-auto flex min-h-[400px] max-w-[1300px] items-center justify-center px-6 lg:px-12">
            <div className="w-full max-w-md rounded-[28px] border border-red-100 bg-white p-8 text-center shadow-lg">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
                <AlertCircle size={28} className="text-red-500" />
              </div>

              <h3 className="text-xl font-bold text-[#080808]">
                Unable to load projects
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">{error}</p>

              <button
                onClick={fetchProjects}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#080808] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff8a24]"
              >
                <RefreshCw size={16} />
                Try Again
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  // =========================================================
  // MAIN UI
  // =========================================================

  return (
    <>
      {/* =====================================================
          SEO META TAGS
      ===================================================== */}

      <Seo
        title="Our Projects"
        description="Explore Zoidics Software Service projects built with modern technologies, thoughtful design, scalable architecture, and powerful digital solutions for businesses and startups."
        keywords="Zoidics projects, web development projects, React projects, Node.js projects, full stack projects, mobile app projects, software development projects, Chennai software development"
        url="https://zoidics.com/projects"
      />

      <section
        ref={sectionRef}
        className="w-full bg-white py-24 font-['Sora',sans-serif]"
      >
        <div className="container mx-auto max-w-[1300px] px-6 lg:px-12">
          {/* =================================================
              HEADER
          ================================================= */}

          <div className="project-header mb-16 flex flex-col items-center text-center">
            <h1 className="relative z-10 inline-block text-5xl font-bold tracking-tight text-[#080808] lg:text-[64px]">
              Our recent{" "}
              <span className="relative inline-block">
                <span className="absolute left-[-15%] top-[10%] -z-10 h-[60px] w-[60px] rounded-full bg-[#ffb646] opacity-90 mix-blend-multiply" />
                work
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 lg:text-base">
              A collection of projects built with modern technologies,
              thoughtful design and scalable development.
            </p>
          </div>

          {/* =================================================
              NO PROJECTS
          ================================================= */}

          {projects.length === 0 ? (
            <div className="flex min-h-[300px] items-center justify-center rounded-[28px] border border-gray-100 bg-gray-50">
              <p className="text-gray-500">No projects available.</p>
            </div>
          ) : (
            <>
              {/* =================================================
                  BENTO GRID
              ================================================= */}

              <div className="project-grid grid grid-cols-12 gap-4 lg:gap-6">
                {projects.map((project, index) => {
                  const image = getImageUrl(project.imageUrl);

                  return (
                    <div
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className={`
                        project-card
                        group
                        relative
                        cursor-pointer
                        overflow-hidden
                        rounded-[24px]
                        ${getGridClass(index)}
                        ${getHeightClass(index)}
                      `}
                    >
                      {/* IMAGE */}

                      <img
                        src={image}
                        alt={`${project.title} project by Zoidics Software Service`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                        onError={(event) => {
                          event.currentTarget.src =
                            "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=1200";
                        }}
                      />

                      {/* DARK HOVER OVERLAY */}

                      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#080808]/95 via-[#080808]/50 to-transparent p-8 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                        <div className="flex w-full translate-y-8 items-end justify-between opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                          {/* TEXT */}

                          <div className="pr-4">
                            <span className="mb-2 block text-sm font-semibold uppercase tracking-wide text-[#ffb646]">
                              {project.category}
                            </span>

                            <h2 className="text-2xl font-bold leading-tight text-white lg:text-3xl">
                              {project.title}
                            </h2>
                          </div>

                          {/* ARROW */}

                          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/10 backdrop-blur-md">
                            <ArrowUpRight
                              size={24}
                              strokeWidth={2}
                              className="absolute text-white transition-transform duration-400 ease-out group-hover:translate-x-10 group-hover:-translate-y-10"
                            />

                            <ArrowUpRight
                              size={24}
                              strokeWidth={2}
                              className="absolute -translate-x-10 translate-y-10 text-[#ffb646] transition-transform duration-400 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {/* ===================================================
            PROJECT MODAL
        =================================================== */}

        {selectedProject && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-5 lg:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="
                relative
                flex
                w-full
                max-w-[1250px]
                max-h-[94vh]
                flex-col
                overflow-hidden
                rounded-[24px]
                bg-white
                shadow-2xl
                md:rounded-[30px]
                lg:flex-row
              "
              onClick={(event) => event.stopPropagation()}
            >
              {/* =================================================
                  CLOSE BUTTON
              ================================================= */}

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="
                  absolute
                  right-3
                  top-3
                  z-30
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/90
                  text-black
                  shadow-lg
                  backdrop-blur-md
                  transition
                  hover:bg-black
                  hover:text-white
                  sm:right-4
                  sm:top-4
                  sm:h-11
                  sm:w-11
                "
                aria-label="Close project"
              >
                <X size={20} strokeWidth={2.5} />
              </button>

              {/* =================================================
                  IMAGE SECTION
              ================================================= */}

              <div
                className="
                  relative
                  flex
                  w-full
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  bg-[#0b0b0b]
                  h-[280px]
                  sm:h-[360px]
                  md:h-[420px]
                  lg:h-auto
                  lg:min-h-[650px]
                  lg:w-[55%]
                "
              >
                <img
                  src={getImageUrl(selectedProject.imageUrl)}
                  alt={`${selectedProject.title} project`}
                  className="
                    block
                    h-full
                    w-full
                    object-contain
                  "
                />

                {/* subtle gradient */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* =================================================
                  CONTENT SECTION
              ================================================= */}

              <div
                className="
                  flex
                  w-full
                  flex-col
                  overflow-y-auto
                  bg-white
                  p-6
                  sm:p-8
                  md:p-9
                  lg:w-[45%]
                  lg:p-12
                  xl:p-14
                "
              >
                {/* CATEGORY */}

                <span
                  className="
                    mb-3
                    block
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#ff8a24]
                    sm:text-sm
                  "
                >
                  {selectedProject.category}
                </span>

                {/* TITLE */}

                <h2
                  className="
                    mb-4
                    text-3xl
                    font-bold
                    leading-tight
                    tracking-tight
                    text-[#080808]
                    sm:text-4xl
                    lg:text-[44px]
                  "
                >
                  {selectedProject.title}
                </h2>

                {/* SHORT DESCRIPTION */}

                {selectedProject.shortDescription && (
                  <p
                    className="
                      mb-5
                      text-base
                      font-medium
                      leading-7
                      text-gray-700
                      sm:text-lg
                    "
                  >
                    {selectedProject.shortDescription}
                  </p>
                )}

                {/* DESCRIPTION */}

                <p
                  className="
                    mb-7
                    text-sm
                    leading-7
                    text-gray-500
                    sm:text-base
                    sm:leading-8
                  "
                >
                  {selectedProject.description}
                </p>

                {/* =================================================
                    TECHNOLOGIES
                ================================================= */}

                {selectedProject.technologies?.length > 0 && (
                  <div className="mb-8">
                    <p
                      className="
                        mb-3
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-gray-400
                      "
                    >
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                              rounded-full
                              border
                              border-gray-200
                              bg-gray-50
                              px-3
                              py-1.5
                              text-xs
                              font-medium
                              text-gray-700
                              transition
                              hover:border-gray-300
                              hover:bg-gray-100
                            "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* =================================================
                    ACTION BUTTON
                ================================================= */}

                <div className="mt-auto pt-2">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-[#080808]
                        px-7
                        py-4
                        text-sm
                        font-semibold
                        text-white
                        transition-all
                        hover:bg-[#ff8a24]
                        sm:w-auto
                      "
                    >
                      View Live Project
                      <ExternalLink
                        size={17}
                        className="transition-transform group-hover:scale-110"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Project;
