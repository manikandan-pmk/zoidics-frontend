import { useEffect, useRef, useState, type FormEvent } from "react";
import gsap from "gsap";
import logo from "../assets/Z_logo.png"; // Ensure this path is correct for your project

import api from "../api/axios";

type Message = {
  role: "user" | "bot";
  content: string;
};

type Lead = Record<string, unknown>;

const WELCOME_MESSAGE =
  "Welcome to Zoidics. We help businesses with websites, apps, AI, automation and custom software. What would you like help with today?";

const ERROR_MESSAGE =
  "Sorry, something went wrong. Please try again or contact us at connect@zoidics.com.";

/* =========================================================
   LINK RENDERER
========================================================= */

function renderWithLinks(text: string) {
  const pattern = /(https?:\/\/[^\s)]+|[\w.+-]+@[\w-]+\.[\w.-]+)/g;

  return text.split(pattern).map((part, index) => {
    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#ff9f1c] underline underline-offset-2 transition hover:text-[#ffb84d]"
        >
          {part}
        </a>
      );
    }

    if (/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(part)) {
      return (
        <a
          key={index}
          href={`mailto:${part}`}
          className="font-medium text-[#ff9f1c] underline underline-offset-2 transition hover:text-[#ffb84d]"
        >
          {part}
        </a>
      );
    }

    return part;
  });
}

/* =========================================================
   ICONS
========================================================= */

function SendIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* =========================================================
   REALISTIC 3D ROBOT COMPONENT
========================================================= */

function Realistic3DRobot() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full filter drop-shadow-[0_10px_16px_rgba(0,0,0,0.18)]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="sphereHead" cx="38%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#eef1f6" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </radialGradient>

        <linearGradient id="bodyShade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="85%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>

        <linearGradient id="visorGlass" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e222d" />
          <stop offset="70%" stopColor="#0f1117" />
          <stop offset="100%" stopColor="#181c24" />
        </linearGradient>

        <linearGradient id="eyeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>

        <linearGradient id="earGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>

      <g className="robot-bubble-1">
        <rect x="145" y="16" width="30" height="20" rx="6" fill="#ffb646" />
        <polygon points="152,36 156,42 160,36" fill="#ffb646" />
        <line
          x1="152"
          y1="24"
          x2="168"
          y2="24"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>

      <g id="robot-torso">
        <path
          d="M 58 140 C 58 126, 142 126, 142 140 L 152 186 C 152 196, 48 196, 48 186 Z"
          fill="url(#bodyShade)"
        />
        <path
          d="M 52 142 C 45 150, 44 168, 56 178"
          stroke="#334155"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M 148 142 C 155 150, 156 168, 144 178"
          stroke="#334155"
          strokeWidth="12"
          strokeLinecap="round"
        />

        <rect x="74" y="148" width="52" height="22" rx="8" fill="#1e293b" />
        <circle cx="86" cy="159" r="3" fill="#f59e0b" />
        <circle cx="95" cy="159" r="3" fill="#ec4899" />
        <circle cx="104" cy="159" r="3" fill="#38bdf8" />
        <circle cx="113" cy="159" r="3" fill="#10b981" />
      </g>

      <g id="robot-head">
        <ellipse
          cx="100"
          cy="132"
          rx="28"
          ry="6"
          fill="#64748b"
          opacity="0.6"
        />

        <g transform="translate(42, 60)">
          <rect
            x="0"
            y="8"
            width="14"
            height="32"
            rx="7"
            fill="url(#earGradient)"
          />
          <rect x="4" y="16" width="6" height="16" rx="3" fill="#3b82f6" />
        </g>

        <g transform="translate(144, 60)">
          <rect
            x="0"
            y="8"
            width="14"
            height="32"
            rx="7"
            fill="url(#earGradient)"
          />
          <rect x="4" y="16" width="6" height="16" rx="3" fill="#3b82f6" />
        </g>

        <ellipse cx="100" cy="74" rx="55" ry="48" fill="url(#sphereHead)" />
        <ellipse cx="94" cy="38" rx="28" ry="10" fill="#ffffff" opacity="0.8" />

        <rect x="54" y="47" width="92" height="52" rx="24" fill="#0b0f19" />
        <rect
          x="56"
          y="49"
          width="88"
          height="48"
          rx="22"
          fill="url(#visorGlass)"
        />
        <path
          d="M 64 54 Q 100 64 136 54 Q 100 58 64 54"
          fill="#ffffff"
          opacity="0.25"
        />

        <g id="robot-eyes">
          <ellipse
            className="robot-eye"
            cx="80"
            cy="71"
            rx="9"
            ry="11"
            fill="url(#eyeGlow)"
          />
          <circle cx="83" cy="67" r="3" fill="#ffffff" />
          <ellipse
            className="robot-eye"
            cx="120"
            cy="71"
            rx="9"
            ry="11"
            fill="url(#eyeGlow)"
          />
          <circle cx="123" cy="67" r="3" fill="#ffffff" />
        </g>

        <path
          d="M 92 81 Q 100 89 108 81"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
}

/* =========================================================
   CHATBOT
========================================================= */

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: WELCOME_MESSAGE },
  ]);
  const [lead, setLead] = useState<Lead>({});
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const robotRef = useRef<HTMLSpanElement>(null);
  const outerRingRef = useRef<HTMLDivElement>(null);
  const innerRingRef = useRef<HTMLDivElement>(null);

  const chatWindowRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) return;

    const robotAnim = gsap.to(robotRef.current, {
      y: -6,
      rotateZ: 1.5,
      duration: 2.2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    const blinkTimeline = gsap.timeline({ repeat: -1, repeatDelay: 3.5 });
    blinkTimeline
      .to(".robot-eye", {
        scaleY: 0.1,
        duration: 0.1,
        transformOrigin: "center center",
      })
      .to(".robot-eye", { scaleY: 1, duration: 0.12 });

    const bubbleAnim = gsap.to(".robot-bubble-1", {
      y: -4,
      x: 2,
      duration: 1.8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    const outerRingAnim = gsap.to(outerRingRef.current, {
      scale: 1.12,
      opacity: 0.45,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      robotAnim.kill();
      blinkTimeline.kill();
      bubbleAnim.kill();
      outerRingAnim.kill();
    };
  }, [open]);

  useEffect(() => {
    if (!open || !chatWindowRef.current) return;

    gsap.fromTo(
      chatWindowRef.current,
      { opacity: 0, scale: 0.8, y: 45, transformOrigin: "bottom right" },
      { opacity: 1, scale: 1, y: 0, duration: 0.55, ease: "back.out(1.5)" },
    );

    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          delay: 0.1,
          ease: "power2.out",
        },
      );
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => inputRef.current?.focus(), 200);
    return () => clearTimeout(timer);
  }, [open]);

  const handleRobotEnter = () => {
    gsap.to(robotRef.current, {
      scale: 1.12,
      y: -8,
      duration: 0.3,
      ease: "back.out(2)",
    });
  };

  const handleRobotLeave = () => {
    gsap.to(robotRef.current, {
      scale: 1,
      y: 0,
      duration: 0.4,
      ease: "elastic.out(1,0.5)",
    });
  };

  const handleOpenChat = () => {
    setOpen(true);
  };

  const handleCloseChat = () => {
    if (!chatWindowRef.current) {
      setOpen(false);
      return;
    }
    gsap.to(chatWindowRef.current, {
      opacity: 0,
      scale: 0.82,
      y: 30,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => setOpen(false),
    });
  };

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    const message = input.trim();
    if (!message || loading) return;

    const history = messages.map((m) => ({
      role: m.role === "bot" ? "model" : "user",
      content: m.content,
    }));

    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setInput("");
    setLoading(true);

    try {
      const response = await api.post("/api/chat", {
  message,
  history,
  lead,
});

const data = response.data;
      if (!response.data || !data.success)
        throw new Error(data.error || "Something went wrong");

      setLead(data.lead ?? {});
      setMessages((prev) => [...prev, { role: "bot", content: data.reply }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [...prev, { role: "bot", content: ERROR_MESSAGE }]);
    } finally {
      setLoading(false);
    }
  };

  const startNewChat = () => {
    if (loading) return;
    setMessages([{ role: "bot", content: WELCOME_MESSAGE }]);
    setLead({});
    setInput("");
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <>
      {/* =================================================
          FLOATING ACTION WIDGETS
      ================================================= */}
      {!open && (
        <div className="fixed bottom-[10.5rem] right-3 z-[9999] flex flex-col items-center gap-3 sm:bottom-6 sm:right-6 sm:gap-4">
          {/* WhatsApp Button Element */}
          <a
            href="https://wa.me/919025187388"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon className="h-7 w-7" />
          </a>

          {/* AI Chat Button Element */}
          <div className="group relative">
            <div className="pointer-events-none absolute -top-10 right-0 whitespace-nowrap rounded-full border border-black/10 bg-white px-4 py-2 text-[11px] font-semibold text-black opacity-0 shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100">
              Chat with Zoidics AI ✨
            </div>

            <button
              type="button"
              onClick={handleOpenChat}
              onMouseEnter={handleRobotEnter}
              onMouseLeave={handleRobotLeave}
              aria-label="Open Zoidics AI Assistant"
              className="relative flex h-[72px] w-[72px] cursor-pointer items-center justify-center rounded-full bg-transparent transition-transform active:scale-95 sm:h-[86px] sm:w-[86px]"
            >
              {/* Faint Outer Ring */}
              <div
                ref={outerRingRef}
                className="absolute inset-[-7px] rounded-full border-[2.5px] border-[#ffad1f]/35 sm:inset-[-10px] sm:border-[3px]"
              />

              {/* Solid Glowing Inner Ring */}
              <div
                ref={innerRingRef}
                className="absolute inset-[-2px] rounded-full border-[3px] border-[#ffb646] shadow-[0_0_18px_rgba(255,173,31,0.5)] sm:border-[3.5px]"
              />

              {/* Realistic 3D Vector Robot Container - Transparent Background */}
              <span
                ref={robotRef}
                className="relative flex h-full w-full items-center justify-center overflow-visible bg-transparent p-1"
              >
                <Realistic3DRobot />
              </span>
            </button>
          </div>
        </div>
      )}

      {/* =================================================
          CHAT WINDOW
      ================================================= */}
      {open && (
        <div
          ref={chatWindowRef}
          className="fixed bottom-2 left-2 right-2 z-[9999] flex h-[min(680px,calc(100vh-16px))] w-auto max-w-none flex-col overflow-hidden rounded-[24px] border border-black/10 bg-[#f7f7f7] shadow-[0_30px_100px_rgba(0,0,0,0.28)] sm:bottom-5 sm:left-auto sm:right-5 sm:h-[min(680px,calc(100vh-40px))] sm:w-[410px] sm:max-w-[calc(100vw-20px)] sm:rounded-[30px]"
        >
          {/* HEADER */}
          <div
            ref={headerRef}
            className="relative shrink-0 overflow-hidden bg-[#0b0b0b] px-4 py-3 text-white sm:px-5 sm:py-4"
          >
            <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#ffad1f]/20 blur-3xl" />

            <div className="relative flex items-center gap-2.5 sm:gap-3">
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[13px] border border-white/15 bg-white shadow-lg p-1 sm:h-12 sm:w-12 sm:rounded-[16px]">
                <img
                  src={logo}
                  alt="Zoidics Logo"
                  className="h-full w-full object-contain"
                />
                <span className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-[15px] font-bold">Zoidics Support</h2>
                  <span className="rounded-full bg-[#ffad1f]/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#ffad1f]">
                    AI
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  <p className="text-[10px] text-white/55">
                    Online • Zoidics Assistant
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={startNewChat}
                disabled={loading}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition hover:bg-white/10 hover:text-white disabled:opacity-30 sm:h-9 sm:w-9 sm:rounded-xl"
              >
                <PlusIcon />
              </button>

              <button
                type="button"
                onClick={handleCloseChat}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition hover:bg-white/10 hover:text-white sm:h-9 sm:w-9 sm:rounded-xl"
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          {/* AI INFO */}
          <div className="shrink-0 border-b border-black/[0.06] bg-white px-4 py-2.5 sm:px-5 sm:py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-gray-50 p-1 sm:h-9 sm:w-9 sm:rounded-xl">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-black/70">
                  Zoidics AI Assistant
                </p>
                <p className="text-[9px] text-black/35">
                  Websites • Apps • AI • Automation
                </p>
              </div>
            </div>
          </div>

          {/* CHAT BODY */}
          <div className="min-h-0 flex-1 overflow-y-auto bg-[#f7f7f7] px-3 py-4 scrollbar-thin sm:px-4 sm:py-5">
            {messages.length === 1 && (
              <div className="mb-5 text-center">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/25">
                  Start a conversation
                </p>
              </div>
            )}

            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "bot" && (
                    <div className="mr-2.5 mt-1 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm p-1">
                      <img
                        src={logo}
                        alt="Zoidics AI"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] break-words px-4 py-3 text-[13px] leading-[1.6] whitespace-pre-wrap ${
                      message.role === "user"
                        ? "rounded-[20px] rounded-br-[6px] bg-[#111111] text-white shadow-[0_5px_15px_rgba(0,0,0,0.12)]"
                        : "rounded-[20px] rounded-bl-[6px] border border-black/[0.07] bg-white text-[#222] shadow-[0_4px_15px_rgba(0,0,0,0.04)]"
                    }`}
                  >
                    {message.role === "bot"
                      ? renderWithLinks(message.content)
                      : message.content}
                  </div>
                </div>
              ))}
            </div>

            {loading && (
              <div className="mt-4 flex justify-start">
                <div className="mr-2.5 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm p-1">
                  <img
                    src={logo}
                    alt="Zoidics AI"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="rounded-[20px] rounded-bl-[6px] border border-black/[0.07] bg-white px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/35" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/35 [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/35 [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* INPUT */}
          <div className="shrink-0 border-t border-black/[0.07] bg-white p-2.5 sm:p-3">
            <form onSubmit={sendMessage}>
              <div className="flex min-w-0 items-center gap-1.5 rounded-[18px] border border-black/[0.09] bg-[#f8f8f8] p-1.5 transition focus-within:border-[#ffad1f] focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(255,173,31,0.10)] sm:gap-2 sm:rounded-[20px]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1 sm:h-9 sm:w-9 sm:rounded-xl">
                  <img
                    src={logo}
                    alt="AI"
                    className="h-full w-full object-contain"
                  />
                </div>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Zoidics AI..."
                  disabled={loading}
                  maxLength={1500}
                  className="min-w-0 flex-1 bg-transparent px-1 py-2 text-[12px] text-black outline-none placeholder:text-black/30 sm:py-2.5 sm:text-[13px]"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-[#ffad1f] text-black shadow-sm transition-all hover:scale-105 hover:bg-[#ffb936] active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 sm:h-10 sm:w-10 sm:rounded-[14px]"
                >
                  <SendIcon />
                </button>
              </div>
            </form>
            <p className="mt-2.5 text-center text-[9px] text-black/30">
              ✦ Powered by Zoidics AI • Don't share passwords, OTPs or card
              details.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
