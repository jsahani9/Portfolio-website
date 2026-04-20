"use client";

import { motion } from "framer-motion";

interface ContactLinkProps {
  label: string;
  sublabel: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
}

export function ContactLink({
  label,
  sublabel,
  href,
  icon,
  external = false,
}: ContactLinkProps) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.15 }}
      className="card-base group flex items-center gap-4 p-5 no-underline cursor-pointer"
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors text-accent">
        {icon}
      </div>

      {/* Labels */}
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-text-primary leading-none mb-1">
          {label}
        </div>
        <div className="text-xs text-text-secondary truncate">{sublabel}</div>
      </div>

      {/* Arrow */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="text-text-muted group-hover:text-accent transition-colors duration-200 flex-shrink-0"
      >
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.a>
  );
}
