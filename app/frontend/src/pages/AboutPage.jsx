import React from "react";
import { motion } from "framer-motion";
import FloatingIcons from "../components/FloatingIcons";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import TiltCard from "../components/ui/TiltCard";
import { education, timeline, tools } from "../data/mockData";

function AboutPage() {
  return (
    <motion.div
      className="page-shell"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FloatingIcons />
      <Header />
      <section className="section">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="neon-outline inline-flex">
            <span>About Me</span>
          </div>
          <div className="section-line" />
          <h1 className="mt-6 text-5xl font-bold">
            Hi, I'm <span className="text-gradient">Pardhu</span>
          </h1>
          <p className="mt-4 text-slate-300">
            Creative professional bridging the gap between media production and software development.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="glass-card relative h-56 w-56 overflow-hidden rounded-full border-2 border-cyan-300/40">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
                alt="Pardhu portrait"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="section-title">Full Story</h2>
          <p className="section-subtitle">
            From media production to full-stack development, my path has been defined by storytelling and
            technical mastery.
          </p>
          <div className="section-line" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <TiltCard className="glass-card p-6 text-left">
              <h3 className="text-lg font-semibold">Creative Roots</h3>
              <p className="mt-3 text-sm text-slate-300">
                I began my journey in church media teams, designing visuals, running cameras, and learning
                the art of live production. These experiences shaped my visual language and empathy for
                audiences.
              </p>
            </TiltCard>
            <TiltCard className="glass-card p-6 text-left">
              <h3 className="text-lg font-semibold">Technology Focus</h3>
              <p className="mt-3 text-sm text-slate-300">
                Over time, I transitioned into web development, blending motion, interactivity, and
                performance into every project. I now deliver full-stack experiences with cinematic polish.
              </p>
            </TiltCard>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="section-title">Education</h2>
            <div className="section-line" />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <TiltCard key={item.title} className="glass-card p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.subtitle}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="section-title">Experience Timeline</h2>
            <p className="section-subtitle">My journey from media to development.</p>
            <div className="section-line" />
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={index % 2 === 0 ? "md:justify-self-start" : "md:justify-self-end"}
              >
                <TiltCard className="glass-card w-full max-w-md p-6">
                  <p className="text-sm text-cyan-300">{item.year}</p>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-slate-400">{item.description}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="section-title">Tools & Technologies</h2>
          <p className="section-subtitle">The stack behind every project I deliver.</p>
          <div className="section-line" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="glass-card p-10">
            <h2 className="text-3xl font-semibold">Ready to create something unforgettable?</h2>
            <p className="mt-4 text-slate-300">
              Let's collaborate on a premium 3D portfolio or brand experience.
            </p>
            <div className="mt-6 flex justify-center">
              <a href="/#contact" className="neon-button">
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}

export default AboutPage;
