import React from "react";
import { motion } from "framer-motion";
import { Camera, Clapperboard, Code2, GraduationCap } from "lucide-react";
import FloatingIcons from "../components/FloatingIcons";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import TiltCard from "../components/ui/TiltCard";
import { education, timeline, tools } from "../data/portfolioData";

function AboutPage() {
  return (
    <motion.div
      id="top"
      className="page-shell"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FloatingIcons />
      <Header />
      <section className="section py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="neon-outline inline-flex">
              <span>About Me</span>
            </div>
            <div className="section-line" />
            <h1 className="mt-6 text-5xl font-bold">
              <span className="text-gradient">Pardhu Mopidevi</span>
            </h1>
            <p className="mt-4 text-slate-300">
              Multi-Skilled Professional in Software Development and Media Production
            </p>
          </motion.div>
          <div className="mt-10 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <TiltCard className="relative">
                <div className="absolute -inset-6 rounded-[30px] bg-gradient-to-br from-cyan-500/35 via-transparent to-purple-500/35 blur-2xl" />
                <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-80 blur-sm" />
                <div className="glass-card card-glow relative h-[340px] w-[340px] overflow-hidden rounded-[28px] border border-white/10 md:h-[380px] md:w-[380px]">
                  <img
                    src="/assets/about-me.jpg"
                    alt="Pardhu portrait"
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section pt-0 -mt-6">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Full Story</h2>
            <div className="section-line" />
          </motion.div>
          <motion.div
            className="mt-8 text-justify text-base text-slate-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              My name is Pardhu Mopidevi, and my journey has been shaped by learning, responsibility, and
              faith rather than formal training alone.
            </p>
            <p className="mt-4">
              From early childhood, church has been a big part of my life. Over time, I became involved in
              church media work, where I naturally developed practical skills. I first learned how to
              operate the sound system by observing others and practicing on my own. With guidance from
              church members and family, I became confident in handling live sound setups, audio mixers,
              and sound management for regular services and large gospel meetings.
            </p>
            <p className="mt-4">
              Alongside sound work, my interest in video editing started very early. During my school
              days, I began editing videos on my father's phone using simple apps like VideoShow Pro and
              KineMaster. I did not have any formal knowledge at the time, but through practice, I learned
              editing basics and visual storytelling. As I grew older, I started editing church-related
              content and continuously improving my skills through hands-on work.
            </p>
            <p className="mt-4">
              As the church had camera equipment, I gradually became involved in camera operation. I
              learned camera basics, framing, and settings through real usage during church events. Later,
              when online broadcasting became necessary, I stepped into live streaming. I learned how to
              set up and manage live streams, monitor outputs, and support online services using available
              tools and equipment.
            </p>
            <p className="mt-4">
              Without realizing it, my childhood was shaping me into someone deeply involved in media,
              production, and live operations.
            </p>
            <p className="mt-4">
              My interest in software development began during the COVID-19 lockdown. With church
              activities paused and more time spent at home, I wanted to do something useful for the
              church. During my second year of diploma, I decided to build a mobile application, even
              though I had no coding background. I started learning Android development through online
              videos, understanding basic concepts in Android Studio and Java. My idea was to digitize my
              church's song book, which contained nearly 1,000 songs.
            </p>
            <p className="mt-4">
              Step by step, I learned how to create screens, connect buttons, and structure the
              application. I manually typed all the songs myself, and it took around seven months to
              complete the app. When I shared it with people in the church, many appreciated the effort.
              That experience gave me confidence in learning technology from scratch and solving problems
              independently.
            </p>
            <p className="mt-4">
              After completing my Diploma in Electronics and Communication Engineering, I continued my
              studies with a B.Tech in the same field. Wanting to grow further in software and computing,
              I later moved to the UK to pursue an MSc in Computing. Today, alongside my studies, I work
              part-time as a video editor, camera operator, and live stream operator for an organization,
              applying the same skills I developed from childhood in a professional environment.
            </p>
            <p className="mt-4">
              I do not claim to know everything, and I am honest about my limits. What defines me is my
              willingness to learn. If I am given a task or project that I do not yet know how to do, I
              will take the time to understand it and complete it. Learning and finishing what I start is
              my strongest skill.
            </p>
            <p className="mt-4">
              Everything I have achieved so far, I believe, is by the grace of God. I am still learning,
              still growing, and always ready to take on new challenges, whether in a full-time role or
              meaningful freelance work.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section py-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Education</h2>
            <div className="section-line" />
          </motion.div>
          <div className="relative mt-12 space-y-12 md:space-y-16">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/70 via-purple-500/60 to-transparent md:block" />
            {[
              {
                title: "MSc Computing (with Placement Year)",
                subtitle: "University of East London, United Kingdom",
                detail: "Currently pursuing",
              },
              {
                title: "Bachelor of Technology (B.Tech)",
                subtitle: "Electronics and Communication Engineering",
                detail: "DVR & Dr. HS MIC College of Technology, India",
              },
              {
                title: "Diploma",
                subtitle: "Electronics and Communication Engineering",
                detail: "DVR & Dr. HS MIC College of Technology, India",
              },
              {
                title: "Secondary School (10th Class)",
                subtitle: "Sri Krishnaveni Talent School",
                detail: "Vijayawada, India",
              },
            ].map((item, index) => {
              const isLeft = index % 2 === 0;
              const fromX = isLeft ? -70 : 70;
              return (
                <div key={item.title} className="relative md:grid md:grid-cols-2 md:gap-10">
                  <motion.div
                    initial={{ opacity: 0, y: 30, x: fromX }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`${isLeft ? "md:col-start-1" : "md:col-start-2"} flex`}
                  >
                    <TiltCard className="glass-card w-full max-w-md p-6">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-300">{item.subtitle}</p>
                      <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
                    </TiltCard>
                  </motion.div>
                  <div className={`${isLeft ? "md:col-start-2" : "md:col-start-1"} hidden md:block`} />
                  <div className="absolute left-1/2 top-6 hidden -translate-x-1/2 md:flex">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-black/60 shadow-[0_0_40px_rgba(0,240,255,0.35)]">
                      <GraduationCap className="text-cyan-300" size={20} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section py-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Work Experience</h2>
            <div className="section-line" />
          </motion.div>
          <div className="relative mt-12 space-y-12 md:space-y-16">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/70 via-purple-500/60 to-transparent md:block" />
            {[
              {
                title: "Software Developer Intern",
                company: "UCKG Help Center, United Kingdom",
                detail:
                  "Currently working as an intern, contributing to software development tasks and technical projects.",
                icon: Code2,
              },
              {
                title: "Media & Live Production Operator (Part-Time)",
                company: "UCKG Help Center, United Kingdom",
                detail:
                  "Working as a Camera Operator, Video Editor, and Live Stream Operator for organizational events and broadcasts.",
                icon: Camera,
              },
              {
                title: "Media Team Head",
                company: "IPC Church, Vijayawada, India",
                detail:
                  "Handled camera operation, live streaming, and video editing for church services and events.",
                icon: Clapperboard,
              },
              {
                title: "Sound Operator",
                company: "Journey With Jesus Ministries, India",
                detail:
                  "Managed live sound systems and audio setups for gospel meetings and ministry events.",
                icon: Clapperboard,
              },
              {
                title: "Freelance Media & Design Work",
                company: "India and United Kingdom",
                detail:
                  "Provided graphic design, video editing, camera operation, and live streaming services for multiple clients and churches.",
                icon: Clapperboard,
              },
            ].map((item, index) => {
              const isLeft = index % 2 === 0;
              const fromX = isLeft ? -70 : 70;
              return (
                <div key={item.title} className="relative md:grid md:grid-cols-2 md:gap-10">
                  <motion.div
                    initial={{ opacity: 0, y: 30, x: fromX }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`${isLeft ? "md:col-start-1" : "md:col-start-2"} flex`}
                  >
                    <TiltCard className="glass-card w-full max-w-md p-6">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-300">{item.company}</p>
                      <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
                    </TiltCard>
                  </motion.div>
                  <div className={`${isLeft ? "md:col-start-2" : "md:col-start-1"} hidden md:block`} />
                  <div className="absolute left-1/2 top-6 hidden -translate-x-1/2 md:flex">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-black/60 shadow-[0_0_40px_rgba(0,240,255,0.35)]">
                      <item.icon className="text-cyan-300" size={20} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Tools & Technologies</h2>
            <p className="section-subtitle">
              These are tools I commonly use or have hands-on experience with, depending on project
              requirements.
            </p>
            <div className="section-line" />
          </motion.div>
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

      <section className="section py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.div
            className="glass-card p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold">Interested in working together?</h2>
            <p className="mt-4 text-slate-300">
              Open to full-time opportunities and meaningful collaborations.
            </p>
            <div className="mt-6 flex justify-center">
              <a href="/#contact" className="neon-button">
                Let's Connect
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}

export default AboutPage;
