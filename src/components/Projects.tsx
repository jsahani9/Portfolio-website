"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";

const FEATURED_PROJECT = {
  name: "InsightStream",
  description:
    "Production-grade multi-agent AI news digest — 6 specialized LangGraph agents, 41 RSS feeds, 400+ articles per run.",
  longDescription:
    "A production-grade multi-agent pipeline using LangGraph with 6 specialized agents orchestrating Claude Sonnet 4.5, Llama 3.3 70B (AWS Bedrock), and GPT-5.1/5.2 (OpenAI). Monitors 41 RSS feeds, processes 400+ articles per run with cosine-similarity semantic deduplication and diversity-aware ranking across 8+ categories. Delivers personalized AI-curated daily digests based on natural language preferences. Deployed on AWS ECS Fargate with GitHub Actions CI/CD — 5-minute end-to-end runtime.",
  badge: "Feb – Apr 2026",
  tags: [
    { label: "Agentic", type: "rag" as const },
    { label: "LangGraph", type: "rag" as const },
    { label: "ECS Fargate", type: "deployed" as const },
  ],
  stack: [
    "LangGraph",
    "Claude Sonnet 4.5",
    "Llama 3.3 70B",
    "GPT-5.1/5.2",
    "AWS Bedrock",
    "AWS ECS Fargate",
    "AWS ECR",
    "FastAPI",
    "Docker",
    "GitHub Actions",
  ],
  github: "https://github.com/jsahani9",
};

const OTHER_PROJECTS = [
  {
    name: "Neural Semantic Job Search",
    description:
      "LLM-powered resume-to-job matching using Llama 3.3 via AWS Bedrock. Hybrid ranking pipeline beats keyword search.",
    tags: [
      { label: "LLM", type: "rag" as const },
      { label: "Deployed", type: "deployed" as const },
    ],
    stack: [
      "AWS Bedrock",
      "Llama 3.3 70B",
      "FastAPI",
      "Streamlit",
      "Docker Compose",
      "Adzuna API",
    ],
    github: "https://github.com/jsahani9",
  },
  {
    name: "FinTech RAG Copilot",
    description:
      "RAG system answering financial regulatory questions (OSFI docs) with citation-backed responses via ChromaDB + Amazon Titan.",
    tags: [
      { label: "RAG", type: "rag" as const },
      { label: "FinTech", type: "default" as const },
    ],
    stack: [
      "LangChain",
      "AWS Bedrock",
      "Amazon Titan",
      "ChromaDB",
      "FastAPI",
      "Docker",
    ],
    github: "https://github.com/jsahani9",
  },
  {
    name: "IEEE-CIS Fraud Detection",
    description:
      "XGBoost classifier hitting 94.08% ROC-AUC on the IEEE-CIS dataset. Outperformed LightGBM, Random Forest, and Logistic Regression.",
    tags: [
      { label: "ML", type: "ml" as const },
      { label: "XGBoost", type: "ml" as const },
    ],
    stack: [
      "XGBoost",
      "LightGBM",
      "scikit-learn",
      "imbalanced-learn",
      "Pandas",
      "NumPy",
    ],
    github: "https://github.com/jsahani9/IEEE-Fraud-Detection",
  },
  {
    name: "Toronto Airbnb Price Prediction",
    description:
      "XGBoost regression model achieving R²=0.79 on Toronto Airbnb listings. Feature engineering across location, host tenure, and availability signals.",
    tags: [
      { label: "ML", type: "ml" as const },
      { label: "Regression", type: "default" as const },
    ],
    stack: [
      "XGBoost",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
    github: "https://github.com/jsahani9/toronto-airbnb-price-prediction",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="section-label mb-4">Work</div>
          <h2 className="heading-xl text-text-primary">
            Selected{" "}
            <span className="font-serif italic text-accent">projects</span>
          </h2>
        </motion.div>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <ProjectCard {...FEATURED_PROJECT} featured />
        </motion.div>

        {/* 2-column grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {OTHER_PROJECTS.map((project) => (
            <motion.div key={project.name} variants={cardVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
