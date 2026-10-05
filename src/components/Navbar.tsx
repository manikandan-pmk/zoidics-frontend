import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "/logo.png";

// --- Icons ---
const MenuIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="3" y1="15" x2="21" y2="15" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDrawerOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* ===== Main Navbar ===== */}
      <nav className="absolute top-0 left-0 w-full h-[80px] bg-transparent flex items-center justify-between pl-6 lg:pl-12 z-50 font-['Sora',sans-serif]">
        {/* Logo */}
        <Link to="/" className="z-10 flex items-center" onClick={closeDrawer}>
          <img
            src={logo}
            alt="Zoidics Software Service Logo"
            className="h-25 object-contain"
          />
        </Link>

        {/* Right Actions */}
        <div className="flex h-[80px]">
          {/* Let's Talk */}
          <Link
            to="/contact"
            className="hidden sm:flex group relative items-center justify-center h-full bg-[#ffb646] px-10"
            style={{
              clipPath: "polygon(30px 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <span className="flex items-center gap-2 font-medium text-[#080808] pl-4">
              Let's Talk
              <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center shrink-0">
                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="absolute transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:-translate-y-4"
                />

                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="absolute -translate-x-4 translate-y-4 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </div>
            </span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="w-[80px] h-[80px] bg-[#080808] cursor-pointer flex items-center justify-center text-white hover:bg-[#151515] transition-colors"
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* ===== Drawer Overlay ===== */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeDrawer}
      />

      {/* ===== Side Menu Drawer ===== */}
      <aside
        className={`fixed top-0 right-0 h-full w-[400px] max-w-[85vw] bg-[#080808] text-white z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col font-['Sora',sans-serif] ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pl-8 h-[80px] border-b border-white/10">
          <span className="font-bold text-xl tracking-wide text-white uppercase">
            Zoidics
          </span>

          <button
            onClick={closeDrawer}
            className="w-[80px] h-[80px] bg-[#ffb646] cursor-pointer text-[#080808] flex items-center justify-center hover:bg-[#e09e3a] transition-colors"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-8 px-10 flex flex-col">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              onClick={closeDrawer}
              className="group flex items-center justify-between py-4 border-b border-white/10 text-lg hover:text-[#ffb646] transition-colors"
            >
              <span className="font-medium">{link.name}</span>

              <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#ffb646]">
                <ArrowUpRight size={20} />
              </span>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Navbar;
