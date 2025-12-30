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
      transition={{ duration: 0.7, ease: "easeInOut" }}
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
                    src="https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/hero/about-me.jpg"
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
              My name is Pardhu Mopidevi. My journey is not only about formal education, but also about
              learning through experience, responsibility, and faith.
            </p>
            <p className="mt-4">
              From a young age, church has been an important part of my life. Over time, I became involved
              in church media work and learned many practical skills naturally. I first learned sound
              system work by watching others and practicing on my own. With help from church members and
              my family, I became confident in handling live sound, audio mixers, and managing sound for
              regular services and large gospel meetings.
            </p>
            <p className="mt-4">
              I also developed an interest in video editing at an early age. During my school days, I
              started editing videos on my father’s phone using simple apps like VideoShow Pro and
              KineMaster. I had no formal training, but through regular practice, I learned basic editing
              and storytelling skills. As I grew older, I began editing church videos and kept improving
              by learning through real work.
            </p>
            <p className="mt-4">
              Since the church had camera equipment, I slowly got involved in camera operation as well. I
              learned camera basics, framing, and settings by using the cameras during church events.
              Later, when online services became necessary, I started handling live streaming. I learned
              how to set up streams, monitor outputs, and support online church services using the
              available equipment.
            </p>
            <p className="mt-4">
              Without realizing it, my childhood experiences prepared me for work in media, production,
              and live operations.
            </p>
            <p className="mt-4">
              My interest in software development started during the COVID-19 lockdown. With church
              activities paused and more time at home, I wanted to do something useful. During my second
              year of diploma, I decided to build a mobile app even though I had no coding experience. I
              learned Android development through online videos and began understanding basic concepts in
              Android Studio and Java. My goal was to create a digital version of my church song book,
              which had nearly 1,000 songs.
            </p>
            <p className="mt-4">
              Step by step, I learned how to design screens, connect buttons, and organize the app. I
              typed all the songs myself, and it took about seven months to finish. When I shared the app
              with church members, many appreciated it. This experience gave me confidence to learn new
              technologies on my own and solve problems independently.
            </p>
            <p className="mt-4">
              After completing my Diploma in Electronics and Communication Engineering, I continued with
              a B.Tech in the same field. To grow further in software and computing, I later moved to the
              UK to pursue an MSc in Computing. Along with my studies, I now work part-time as a video
              editor, camera operator, and live stream operator, using the skills I have developed since
              childhood in a professional setting.
            </p>
            <p className="mt-4">
              I do not claim to know everything, and I am honest about my limitations. What defines me
              is my willingness to learn. If I am given a task that I do not know how to do, I will take
              the time to learn and complete it. Learning and finishing what I start is my strongest
              quality.
            </p>
            <p className="mt-4">
              I am still learning, still growing, and always ready to take on new challenges, whether in
              a full-time role or meaningful freelance work.
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
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:border-cyan-300/60 hover:text-cyan-100 hover:shadow-[0_8px_24px_rgba(0,240,255,0.2)]"
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
