"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AIChatModal from "@/components/AIChatModal";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  // ── Custom Cursor ──────────────────────────────────────────────
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  const animateCursor = useCallback(() => {
    const { x: mx, y: my } = mousePos.current;
    const ring = ringRef.current;
    const dot = dotRef.current;

    if (dot) {
      dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
    }

    if (ring) {
      // Smooth ring follow with lerp
      ringPos.current.x += (mx - ringPos.current.x) * 0.12;
      ringPos.current.y += (my - ringPos.current.y) * 0.12;
      const size = ring.classList.contains("hovering") ? 24 : 16;
      ring.style.transform = `translate(${ringPos.current.x - size}px, ${ringPos.current.y - size}px)`;
    }

    rafRef.current = requestAnimationFrame(animateCursor);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a, button, [role='button'], input, textarea, select") !== null;
      ringRef.current?.classList.toggle("hovering", isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    rafRef.current = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animateCursor]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (chatOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [chatOpen]);

  const openChat = useCallback(() => setChatOpen(true), []);
  const closeChat = useCallback(() => setChatOpen(false), []);

  return (
    <>
      {/* Custom cursor elements */}
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />

      {/* App shell */}
      <div className="relative min-h-screen">
        <Navbar onOpenChat={openChat} />

        <main>
          <Hero onOpenChat={openChat} />
          <Projects />
          <Skills />
          <Experience />
          <Contact onOpenChat={openChat} />
        </main>

        <Footer />
      </div>

      {/* AI Chat Modal — portal-like fixed overlay */}
      <AIChatModal isOpen={chatOpen} onClose={closeChat} />
    </>
  );
}
