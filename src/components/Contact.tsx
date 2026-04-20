"use client";

import { motion } from "framer-motion";
import { ContactLink } from "@/components/ui/ContactLink";

interface ContactProps {
  onOpenChat: () => void;
}

const CONTACT_LINKS = [
  {
    label: "Email",
    sublabel: "jasveen1800@gmail.com",
    href: "mailto:jasveen1800@gmail.com",

    external: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="22,6 12,13 2,6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    sublabel: "linkedin.com/in/jasveen-singh-sahani",
    href: "https://www.linkedin.com/in/jasveen-singh-sahani-92716b249/",
    external: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    sublabel: "github.com/jsahani9",
    href: "https://github.com/jsahani9",
    external: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function Contact({ onOpenChat }: ContactProps) {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background-secondary">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="section-label mb-4">Let&apos;s talk</div>
          <h2 className="heading-xl text-text-primary">
            Open to the{" "}
            <span className="font-serif italic text-accent">
              right opportunity
            </span>
          </h2>

          {/* Availability badge */}
          <div className="flex items-center gap-2.5 mt-6 w-fit px-4 py-2 rounded-full bg-accent/5 border border-accent/15">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm text-accent font-medium">
              Available for Junior AI/ML roles
            </span>
          </div>
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: pitch */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-text-secondary leading-relaxed text-base mb-6">
              I&apos;m a Junior AI Engineer focused on building
              production-ready LLM and agentic AI systems. I design
              end-to-end pipelines with LangGraph, AWS Bedrock, and
              OpenAI — RAG systems, semantic search, multi-agent
              orchestration — and deploy them on AWS ECS Fargate with
              full CI/CD automation.
            </p>
            <p className="text-text-secondary leading-relaxed text-base mb-8">
              Based in Toronto. Open to{" "}
              <span className="text-text-primary">hybrid or remote</span>{" "}
              Junior AI Engineer roles in Canada or internationally. If
              you&apos;re building with LLMs and want someone who ships to
              production — let&apos;s talk.
            </p>

            {/* AI Chat CTA */}
            <button
              onClick={onOpenChat}
              className="btn-primary"
            >
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

          {/* Right: contact links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-3"
          >
            {CONTACT_LINKS.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <ContactLink {...link} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
