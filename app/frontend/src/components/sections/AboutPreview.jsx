import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TiltCard from "../ui/TiltCard";


function AboutPreview() {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 xl:max-w-7xl">
        {/* Section header — centered */}
        <div className="text-center">
          <motion.div
            className="neon-outline inline-flex"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span>About Me</span>
          </motion.div>
          <div className="section-line" />
          <motion.h2
            className="section-title mt-5 text-gradient section-title-glow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            My Story
          </motion.h2>
        </div>

        <div className="mt-10">
          <TiltCard className="premium-glass card-glow p-8 text-left relative overflow-hidden">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-cyan-500/[0.08] blur-3xl" />
            <div className="mb-6 h-px w-full bg-gradient-to-r from-cyan-400/40 via-purple-400/50 to-transparent" />

            <p className="text-[15px] leading-[1.8] text-slate-300">
              From an early age, I grew up actively involved in church media, where I gained hands-on
              experience in sound operation, live streaming, camera operation, graphic design, and video
              editing. These experiences shaped my creative foundation and were largely self-driven,
              built through real-world practice.
            </p>
            <p className="mt-4 text-[15px] leading-[1.8] text-slate-300">
              Alongside this, I pursued a Diploma in Electronics and Communication Engineering, where I
              developed strong technical knowledge and transitioned into software development. Today, I
              bring together multiple independent skills across media production and technology to deliver
              professional, reliable results.
            </p>
            <p className="mt-4 text-[15px] leading-[1.8] text-slate-400">
              Offering multiple professional skill sets with a strong focus on quality, reliability, and
              consistency.
            </p>

            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
            <div className="mt-8 flex">
              <Link className="neon-button attention pulse" to="/about">
                View My Full Journey
              </Link>
            </div>
          </TiltCard>

        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
