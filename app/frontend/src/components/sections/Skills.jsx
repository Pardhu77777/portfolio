import React from "react";
import { motion } from "framer-motion";
import {
  Camera, Database, Film, GitBranch, Layers,
  Mic, Monitor, Paintbrush, Radio, Server,
} from "lucide-react";
import { skillGroups } from "../../data/portfolioData";
import TiltCard from "../ui/TiltCard";

const SKILL_META = {
  "Poster & Graphic Design":      { Icon: Paintbrush, accent: "#a855f7" },
  "Video Editing & Motion":       { Icon: Film,       accent: "#f43f5e" },
  "Camera Operation":             { Icon: Camera,     accent: "#00f0ff" },
  "Live Streaming":               { Icon: Radio,      accent: "#22c55e" },
  "Sound Operating":              { Icon: Mic,        accent: "#f59e0b" },
  "Full-Stack Development":       { Icon: Layers,     accent: "#3b82f6" },
  "Frontend Development":         { Icon: Monitor,    accent: "#00f0ff" },
  "Backend Development":          { Icon: Server,     accent: "#a855f7" },
  "Database Management":          { Icon: Database,   accent: "#22c55e" },
  "Modern Development Practices": { Icon: GitBranch,  accent: "#f59e0b" },
};

const GROUP_ACCENTS = {
  "Media & Design": "#a855f7",
  "Development":    "#3b82f6",
};

function SkillCard({ skill, index }) {
  const meta = SKILL_META[skill.title] || {};
  const { Icon, accent = "#00f0ff" } = meta;

  return (
    <TiltCard
      className="glass-card card-glow p-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 40, rotateY: -15, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.07, ease: "easeOut" }}
    >
      {/* Colored gradient bg overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{ background: `linear-gradient(135deg, ${accent}0e 0%, transparent 60%)` }}
      />
      {/* Top accent bar */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] rounded-t-[inherit]"
        style={{ background: `linear-gradient(90deg, ${accent}60, ${accent}20, transparent)` }}
      />
      {/* Header row */}
      <div className="flex items-start gap-3">
        {Icon && (
          <div
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
            style={{
              background: `${accent}14`,
              border: `1px solid ${accent}30`,
              boxShadow: `0 0 16px ${accent}20`,
            }}
          >
            <Icon size={17} style={{ color: accent }} />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-[14px] font-semibold leading-tight">{skill.title}</h4>
            <span
              className="flex-shrink-0 text-[13px] font-bold tabular-nums"
              style={{ color: accent }}
            >
              {skill.level}%
            </span>
          </div>
        </div>
      </div>

      <p className="mt-3 text-[13px] leading-relaxed text-slate-400">{skill.description}</p>

      {/* Progress bar */}
      <div className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-white/[0.07]">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${accent}, ${accent}70)`,
            boxShadow: `0 0 8px ${accent}60`,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: index * 0.06 }}
        />
      </div>

    </TiltCard>
  );
}

function Skills() {
  return (
    <section id="skills" className="section dot-grid section-dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 xl:max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="section-title section-title-glow text-gradient">Skills & Expertise</h2>
            <p className="section-subtitle max-w-lg">
              Practical experience and confidence across each role, supported by continuous
              learning and AI-assisted workflows.
            </p>
            <div className="section-line" style={{ margin: "14px 0 0" }} />
          </div>
          <div className="neon-outline">
            <span>Creative + Tech</span>
          </div>
        </div>

        <div className="mt-12 space-y-14">
          {skillGroups.map((group) => {
            const groupAccent = GROUP_ACCENTS[group.title] || "#00f0ff";
            return (
              <div key={group.title}>
                <motion.div
                  className="mb-7 flex items-center gap-3"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Group accent bar */}
                  <div
                    className="h-8 w-1 rounded-full"
                    style={{
                      background: `linear-gradient(180deg, ${groupAccent}, ${groupAccent}40)`,
                      boxShadow: `0 0 12px ${groupAccent}60`,
                    }}
                  />
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{group.title}</h3>
                    <p className="text-[13px] text-slate-500">{group.subtitle}</p>
                  </div>
                </motion.div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {group.skills.map((skill, index) => (
                    <SkillCard key={skill.title} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
