import React from "react";
import { Camera, Database, Film, GitBranch, Layers, Mic, Monitor, Paintbrush, Radio, Server } from "lucide-react";
import { skillGroups } from "../../data/portfolioData";
import SectionHeading from "../ui/SectionHeading";

const SKILL_META = {
  "Poster & Graphic Design": { Icon: Paintbrush, accent: "#3b82f6" },
  "Video Editing & Motion": { Icon: Film, accent: "#60a5fa" },
  "Camera Operation": { Icon: Camera, accent: "#38bdf8" },
  "Live Streaming": { Icon: Radio, accent: "#2563eb" },
  "Sound Operating": { Icon: Mic, accent: "#0ea5e9" },
  "Full-Stack Development": { Icon: Layers, accent: "#3b82f6" },
  "Frontend Development": { Icon: Monitor, accent: "#38bdf8" },
  "Backend Development": { Icon: Server, accent: "#2563eb" },
  "Database Management": { Icon: Database, accent: "#60a5fa" },
  "Modern Development Practices": { Icon: GitBranch, accent: "#0ea5e9" },
};

function SkillCard({ skill, index }) {
  const { Icon, accent = "#3b82f6" } = SKILL_META[skill.title] || {};

  return (
    <div className="glass lift reveal relative overflow-hidden p-6" style={{ "--d": `${index * 70}ms` }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(140deg, rgba(255,255,255,0.08), transparent 60%)" }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1"
        style={{ background: "linear-gradient(90deg, #5eead4, rgba(94,234,212,0.1))" }}
      />
      <div className="relative flex items-center gap-4">
        {Icon && (
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white"
            style={{ color: accent, boxShadow: "0 10px 22px -12px rgba(11,27,63,0.6)" }}
          >
            <Icon size={21} />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h4 className="font-display text-[15px] font-semibold leading-tight">{skill.title}</h4>
            <span className="text-sm font-bold tabular-nums text-accent">
              {skill.level}%
            </span>
          </div>
          <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-line">
            <div
              className="bar h-full rounded-full"
              style={{ "--w": `${skill.level}%`, background: "linear-gradient(90deg, #ffffff, #5eead4)" }}
            />
          </div>
        </div>
      </div>
      <p className="relative mt-4 text-sm leading-relaxed text-muted">{skill.description}</p>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-site">
        <SectionHeading
          label="Creative + Tech"
          title="Skills & Expertise"
          subtitle="Practical experience and confidence across each role, supported by continuous learning and AI-assisted workflows."
        />

        <div className="mt-14 space-y-16">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <div className="reveal mb-7 flex items-center gap-3">
                <span className="h-9 w-1.5 rounded-full" style={{ background: "linear-gradient(180deg, #5eead4, #ffffff)" }} />
                <div>
                  <h3 className="font-display text-xl font-semibold">{group.title}</h3>
                  <p className="text-sm text-muted">{group.subtitle}</p>
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {group.skills.map((skill, index) => (
                  <SkillCard key={skill.title} skill={skill} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
