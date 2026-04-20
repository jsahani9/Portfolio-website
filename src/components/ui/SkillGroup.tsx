"use client";

import { motion } from "framer-motion";

interface SkillGroupProps {
  title: string;
  accentColor: string;
  skills: string[];
  icon: React.ReactNode;
  delay?: number;
}

export function SkillGroup({
  title,
  accentColor,
  skills,
  icon,
  delay = 0,
}: SkillGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="card-base p-6"
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${accentColor}15`, border: `1px solid ${accentColor}25` }}
        >
          <span style={{ color: accentColor }}>{icon}</span>
        </div>
        <h3
          className="font-semibold text-sm tracking-wide uppercase"
          style={{ color: accentColor }}
        >
          {title}
        </h3>
      </div>

      {/* Skill list */}
      <ul className="flex flex-col gap-2.5">
        {skills.map((skill, i) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + i * 0.04 }}
            className="flex items-center gap-2.5 text-sm text-text-secondary"
          >
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: accentColor, opacity: 0.6 }}
            />
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
