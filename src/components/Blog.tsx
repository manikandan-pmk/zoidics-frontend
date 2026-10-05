import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, X } from "lucide-react";
import api from "../api/axios";

gsap.registerPlugin(ScrollTrigger);

// Helper to format ISO date to "DD MMM YYYY"
const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

// Helper to handle image URLs
const getImageUrl = (url: string) => {
  if (!url)
    return "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800";
  return url.startsWith("/") ? `https://api.zoidics.com${url}` : url;
};

const Blog: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // State variables
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal state
  const [selectedBlog, setSelectedBlog] = useState<any | null>(null);

  // Fetch Blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("/api/blogs");
        if (response.data.success) {
          setBlogs(response.data.blogs);
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // GSAP Animations
  useEffect(() => {
    if (loading || error || blogs.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".blog-header",
        { y: 50, opacity: 0 },
        {
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        ".blog-card",
        { y: 80, opacity: 0 },
        {
          scrollTrigger: { trigger: ".blog-grid", start: "top 75%" },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [loading, error, blogs]);

  // Lock body scroll tightly when modal is open to prevent scroll overlap
  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px"; // Prevents layout shift when scrollbar disappears
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "0px";
    };
  }, [selectedBlog]);

  if (loading) {
    return (
      <div className="w-full py-24 bg-white flex items-center justify-center min-h-[500px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ff8a24]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-24 bg-white flex items-center justify-center min-h-[500px]">
        <p className="text-red-500 font-medium">{error}</p>
      </div>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 bg-white font-['Sora',sans-serif] relative"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-[1300px]">
        {/* === Header Section === */}
        <div className="blog-header flex flex-col items-center text-center mb-16 lg:mb-20">
          <p className="text-[#ff8a24] font-semibold text-[17px] mb-2">Blog</p>
          <h2 className="text-[44px] lg:text-[60px] font-bold text-[#080808] relative inline-block tracking-tight z-10">
            My blog{" "}
            <span className="relative inline-block">
              <span className="absolute top-[15%] left-[-15%] w-[55px] h-[55px] bg-[#ffb646] rounded-full mix-blend-multiply opacity-90 -z-10"></span>
              post
            </span>
          </h2>
        </div>

        {/* === Blog Grid === */}
        <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {blogs.map((post, index) => (
            <div
              key={post.id}
              onClick={() => setSelectedBlog(post)}
              className={`blog-card group cursor-pointer flex flex-col ${
                index % 2 !== 0 ? "lg:mt-16" : ""
              }`}
            >
              {/* Image Wrapper */}
              <div className="w-full h-[320px] rounded-3xl overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                <img
                  src={getImageUrl(post.imageUrl)}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>

              {/* Meta Info Area */}
              <div className="flex items-center gap-4 text-[13px] font-medium mb-3 tracking-wide">
                <div className="flex items-center gap-2 text-[#080808]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#080808]"></span>
                  {post.category}
                </div>
                <div className="flex items-center gap-2 text-[#ff8a24]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff8a24]"></span>
                  {formatDate(post.createdAt)}
                </div>
              </div>

              {/* Title & Arrow Area */}
              <div className="flex items-start justify-between gap-4 mt-1">
                <h3 className="text-[19px] font-bold text-[#080808] leading-[1.4] group-hover:text-[#ff8a24] transition-colors duration-300">
                  {post.title}
                </h3>
                <div className="relative overflow-hidden w-6 h-6 flex items-center justify-center shrink-0 mt-1">
                  <ArrowUpRight
                    size={22}
                    strokeWidth={1.5}
                    className="absolute text-[#080808] transition-transform duration-400 ease-out group-hover:translate-x-6 group-hover:-translate-y-6"
                  />
                  <ArrowUpRight
                    size={22}
                    strokeWidth={1.5}
                    className="absolute text-[#080808] -translate-x-6 translate-y-6 transition-transform duration-400 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Single Popup View (Modal) matching the reference UI === */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/70 backdrop-blur-sm">
          {/* Modal Container with internal scroll to avoid overlap */}
          <div className="relative bg-white w-full max-w-4xl max-h-full rounded-2xl sm:rounded-3xl overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button positioned over the image */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/90 hover:bg-white text-gray-800 p-2.5 rounded-full transition-colors z-20 shadow-md"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* Modal Hero Image */}
            <div className="w-full h-[250px] sm:h-[400px] overflow-hidden bg-gray-100">
              <img
                src={getImageUrl(selectedBlog.imageUrl)}
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-10">
              {/* Category & Date Row */}
              <div className="flex items-center gap-4 text-[14px] sm:text-[15px] font-semibold mb-6">
                <span className="text-[#080808]">{selectedBlog.category}</span>
                <span className="text-[#ff8a24]">
                  {formatDate(selectedBlog.createdAt)}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-[28px] sm:text-[40px] font-bold text-[#080808] leading-tight mb-8">
                {selectedBlog.title}
              </h2>

              {/* Excerpt with orange left border */}
              <p className="text-[17px] sm:text-[19px] text-[#444] font-medium leading-relaxed italic border-l-[3px] border-[#ff8a24] pl-5 mb-8">
                {selectedBlog.excerpt}
              </p>

              {/* Full Content */}
              <div className="text-[16px] text-gray-600 leading-[1.8] whitespace-pre-line pb-4">
                {selectedBlog.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
