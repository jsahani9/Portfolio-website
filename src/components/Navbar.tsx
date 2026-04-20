"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenChat: () => void;
}

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenChat }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(13,13,15,0.85)] backdrop-blur-xl border-b border-white/[0.05]"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-serif text-xl text-text-primary hover:text-accent transition-colors duration-200"
            >
              Jasveen Singh
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}

              {/* Open to Work Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-xs font-medium text-accent">
                  Open to Work
                </span>
              </div>

              {/* Resume Download */}
              <a
                href="/resume.pdf"
                download="Jasveen_Singh_Resume.pdf"
                className="text-sm text-text-secondary hover:text-text-primary border border-surface-border hover:border-surface-border-hover px-3 py-1.5 rounded-lg transition-all duration-200"
              >
                Resume ↓
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[rgba(13,13,15,0.97)] backdrop-blur-xl border-b border-white/[0.05] md:hidden"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base text-text-secondary hover:text-text-primary transition-colors duration-200 py-2 border-b border-white/[0.04]"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  <span className="text-xs font-medium text-accent">
                    Open to Work
                  </span>
                </div>
                <a
                  href="/resume.pdf"
                  download="Jasveen_Singh_Resume.pdf"
                  className="text-sm text-text-secondary hover:text-text-primary border border-surface-border px-3 py-1.5 rounded-lg transition-colors"
                >
                  Resume ↓
                </a>
              </div>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenChat();
                }}
                className="btn-primary w-full justify-center mt-2"
              >
                Talk to AI Jasveen
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
