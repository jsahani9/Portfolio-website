"use client";

import { motion } from "framer-motion";
import { SkillGroup } from "@/components/ui/SkillGroup";

const SKILL_GROUPS = [
  {
    title: "AI / ML",
    accentColor: "#c8f06e",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    skills: [
      "AWS Bedrock (Claude, Llama, Titan)",
      "OpenAI API (GPT-5.1/5.2)",
      "LangGraph & Agentic AI",
      "LangChain / LlamaIndex",
      "RAG Pipelines",
      "Semantic Search & Deduplication",
      "XGBoost / LightGBM / scikit-learn",
      "Prompt Engineering",
      "ChromaDB / FAISS",
      "Hallucination Mitigation",
    ],
  },
  {
    title: "Backend & Cloud",
    accentColor: "#60a5fa",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M8 21h8M12 17v4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    skills: [
      "FastAPI",
      "REST APIs",
      "Pydantic Validation",
      "Async API Handling",
      "AWS ECS Fargate / ECR",
      "Docker & Docker Compose",
      "GitHub Actions CI/CD",
      "Git & GitHub",
      "Streamlit",
      "Vercel / Render",
    ],
  },
  {
    title: "Languages & Tools",
    accentColor: "#f472b6",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <polyline
          points="16 18 22 12 16 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="8 6 2 12 8 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    skills: [
      "Python (primary)",
      "Java",
      "SQL",
      "Pandas & NumPy",
      "Matplotlib / Seaborn",
      "Jupyter Notebooks",
      "PyPDF",
      "Linux / CLI",
    ],
  },
  {
    title: "Data & Analytics",
    accentColor: "#fb923c",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    skills: [
      "Power BI",
      "Microsoft Excel (Advanced)",
      "SQL (Data Analysis)",
      "Pandas (Data Wrangling)",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Data Visualization",
      "Statistical Modelling",
      "Regression & Classification",
      "Dashboard Design",
    ],
  },
];

const CERTIFICATIONS = [
  { label: "LinkedIn — Agentic AI for Developers", date: "Mar 2026" },
  { label: "LinkedIn — Build REST APIs with FastAPI", date: "Feb 2026" },
  { label: "LinkedIn — Learning Git and GitHub", date: "Feb 2026" },
  { label: "DeepLearning.AI — Generative AI with LLMs", date: "Jan 2026" },
  { label: "DeepLearning.AI — ChatGPT Prompt Engineering", date: "Jan 2026" },
  { label: "Udemy — AI & ML Bootcamp", date: "" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-background-secondary">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="section-label mb-4">Capabilities</div>
          <h2 className="heading-xl text-text-primary">
            The full{" "}
            <span className="font-serif italic text-accent">stack</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl leading-relaxed">
            From multi-agent LangGraph pipelines and vector databases to
            Power BI dashboards and AWS ECS Fargate deployments — across
            AI engineering and data analytics.
          </p>
        </motion.div>

        {/* 4-column grid (2x2 on mobile → 4 on lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILL_GROUPS.map((group, i) => (
            <SkillGroup
              key={group.title}
              {...group}
              delay={i * 0.08}
            />
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <div className="card-base p-6">
            <div className="section-label mb-5">Certifications</div>
            <div className="flex flex-wrap gap-3">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.label}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-accent/5 border border-accent/10"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M12 3.5L5.5 10 2 6.5"
                      stroke="#c8f06e"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm text-text-secondary">{cert.label}</span>
                  {cert.date && (
                    <span className="text-xs text-text-muted ml-1">· {cert.date}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
