import React from "react";
import { motion } from "framer-motion";
import { skillGroups } from "../../data/mockData";
import TiltCard from "../ui/TiltCard";

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="section-title">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="section-subtitle">Creative production meets modern web engineering.</p>
            <div className="section-line" />
          </div>
          <div className="neon-outline">
            <span>Creative + Tech</span>
          </div>
        </div>
        <div className="mt-10 space-y-12">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <p className="text-sm text-slate-400">{group.subtitle}</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.skills.map((skill, index) => (
                  <TiltCard
                    key={skill.title}
                    className="glass-card card-glow p-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold">{skill.title}</h4>
                      <span className="text-sm text-cyan-300">{skill.level}%</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-400">{skill.description}</p>
                    <div className="mt-4 h-2 w-full rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </TiltCard>
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
