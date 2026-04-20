"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.05] py-8">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Left */}
          <span className="font-serif text-base text-text-secondary">
            Jasveen Singh
          </span>

          {/* Center — optional nav */}
          <div className="flex items-center gap-6 text-xs text-text-muted">
            {["Projects", "Skills", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(`#${item.toLowerCase()}`)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-text-secondary transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right */}
          <span className="text-xs text-text-muted">
            © {year} · Built with{" "}
            <span className="text-text-secondary">Next.js</span> &amp;{" "}
            <span className="text-accent">Claude</span>
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
