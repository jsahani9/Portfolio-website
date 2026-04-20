"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenChat: () => void;
}

const roles = [
  "AI Engineer",
  "RAG Specialist",
  "Agentic Systems Builder",
  "Data Analyst",
  "LLM Developer",
];

const stats = [
  { label: "5 Projects" },
  { label: "AWS ECS Fargate" },
  { label: "BSc CS 2026" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero({ onOpenChat }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(roles[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(roles[0].length);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (!isDeleting && charIndex < currentRole.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex((i) => i + 1);
      }, 60);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex((i) => i - 1);
      }, 35);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, isDeleting, roleIndex]);

  const handleViewProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Radial gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(200,240,110,0.045) 0%, transparent 70%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--bg))",
        }}
      />

      <div className="section-container relative z-10 py-24 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Location badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07] text-text-secondary text-sm">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="6" cy="6" r="2" fill="currentColor" />
              </svg>
              Toronto, Canada
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="heading-display text-text-primary mb-6"
          >
            Building intelligent{" "}
            <span className="font-serif italic text-accent">systems</span>
            {" "}that ship.
          </motion.h1>

          {/* Animated role cycling */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-lg text-text-secondary font-light">
              CS grad &amp; —
            </span>
            <span className="text-lg text-text-primary font-medium min-w-[260px]">
              {displayText}
              <span className="inline-block w-0.5 h-5 bg-accent ml-0.5 align-middle animate-pulse" />
            </span>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-text-secondary text-lg leading-relaxed max-w-2xl mb-10"
          >
            Designing end-to-end LLM and agentic AI pipelines with LangGraph,
            AWS Bedrock, and OpenAI. I build RAG systems, multi-agent
            orchestration, and scalable FastAPI backends — then ship them
            to AWS ECS Fargate.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-14"
          >
            <button onClick={handleViewProjects} className="btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button onClick={onOpenChat} className="btn-ghost">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M14 9.333A1.333 1.333 0 0112.667 10.667H4.667L2 13.333V3.333A1.333 1.333 0 013.333 2h9.334A1.333 1.333 0 0114 3.333v6z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Talk to AI Jasveen
            </button>
          </motion.div>

          {/* Stat chips */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.07] text-sm text-text-secondary"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {stat.label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 3v10M4 9l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
