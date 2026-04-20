"use client";

import { motion } from "framer-motion";

const TIMELINE_ITEMS = [
  {
    date: "Sep 2021 — 2026",
    title: "BSc Computer Science",
    org: "York University",
    location: "Toronto, Canada",
    description:
      "Honours degree in Computer Science covering machine learning, data structures, algorithms, databases, and software engineering. Graduating 2026.",
    tags: ["BSc", "Computer Science"],
    accent: "#c8f06e",
  },
  {
    date: "Mar 2026",
    title: "Agentic AI for Developers",
    org: "LinkedIn Learning",
    location: "Certification",
    description:
      "Concepts and enterprise application of agentic AI systems — designing autonomous agents, tool use, memory, and multi-agent orchestration patterns.",
    tags: ["Agentic AI", "LLMs", "Enterprise"],
    accent: "#0a66c2",
  },
  {
    date: "Feb 2026",
    title: "Build REST APIs with FastAPI",
    org: "LinkedIn Learning",
    location: "Certification",
    description:
      "Building production REST APIs with FastAPI — routing, Pydantic validation, async handlers, dependency injection, and API documentation.",
    tags: ["FastAPI", "REST APIs"],
    accent: "#0a66c2",
  },
  {
    date: "Feb 2026",
    title: "Learning Git and GitHub",
    org: "LinkedIn Learning",
    location: "Certification",
    description:
      "Version control fundamentals — branching strategies, pull requests, CI/CD integration, and collaborative workflows on GitHub.",
    tags: ["Git", "GitHub"],
    accent: "#0a66c2",
  },
  {
    date: "Jan 2026",
    title: "Generative AI with Large Language Models",
    org: "DeepLearning.AI",
    location: "Certification",
    description:
      "Andrew Ng's flagship GenAI course covering transformer architectures, fine-tuning, RLHF, and production deployment practices for large language models.",
    tags: ["LLMs", "Transformers", "Fine-tuning"],
    accent: "#60a5fa",
  },
  {
    date: "Jan 2026",
    title: "ChatGPT Prompt Engineering for Developers",
    org: "DeepLearning.AI × OpenAI",
    location: "Certification",
    description:
      "Advanced prompt engineering techniques — systematic prompt design, chain-of-thought reasoning, and LLM application patterns with Andrew Ng.",
    tags: ["Prompt Engineering", "OpenAI"],
    accent: "#f472b6",
  },
  {
    date: "2024",
    title: "AI & ML Bootcamp",
    org: "Udemy",
    location: "Certification",
    description:
      "Comprehensive machine learning bootcamp covering supervised/unsupervised learning, neural networks, and end-to-end ML project workflows.",
    tags: ["Machine Learning", "Neural Networks"],
    accent: "#fb923c",
  },
  {
    date: "2023 — Present",
    title: "Self-Taught AI & Analytics Trajectory",
    org: "Independent",
    location: "Toronto",
    description:
      "ML foundations → data analytics (Excel, Power BI, SQL) → GenAI APIs → RAG architectures → Agentic AI with LangGraph → Production on AWS ECS Fargate. 5 projects shipped.",
    tags: ["Self-Directed", "Production", "5 Projects"],
    accent: "#a78bfa",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="section-label mb-4">Background</div>
          <h2 className="heading-xl text-text-primary">
            Education &amp;{" "}
            <span className="font-serif italic text-accent">trajectory</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="flex flex-col gap-10">
            {TIMELINE_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute top-1.5 w-3 h-3 rounded-full border-2"
                  style={{
                    borderColor: item.accent,
                    backgroundColor: "var(--bg)",
                    boxShadow: `0 0 10px ${item.accent}40`,
                    left: "-2.15rem",
                  }}
                />

                <div className="card-base p-6 group hover:border-white/[0.1] transition-colors duration-200">
                  {/* Date + location */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span
                      className="text-xs font-medium tracking-wide"
                      style={{ color: item.accent }}
                    >
                      {item.date}
                    </span>
                    <span className="text-xs text-text-muted">
                      {item.location}
                    </span>
                  </div>

                  {/* Title + org */}
                  <h3 className="font-serif text-xl text-text-primary mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-text-secondary mb-3">
                    {item.org}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-md font-medium"
                        style={{
                          backgroundColor: `${item.accent}12`,
                          color: item.accent,
                          border: `1px solid ${item.accent}25`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Community blurb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <div className="card-base p-6 flex flex-col md:flex-row gap-4 items-start">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                backgroundColor: "rgba(200,240,110,0.08)",
                border: "1px solid rgba(200,240,110,0.15)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                  stroke="#c8f06e"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-text-primary mb-1">
                Toronto AI Community
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                Active member of the{" "}
                <span className="text-accent">Toronto Machine Learning Society</span>{" "}
                and participant in events hosted by the{" "}
                <span className="text-accent">Vector Institute</span>. Staying
                close to the frontier of applied AI research and connecting with
                the local ML engineering community.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
