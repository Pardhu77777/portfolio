import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Camera, Clapperboard, Code2, GraduationCap, Mic, Palette } from "lucide-react";
import Layout from "../components/layout/Layout";
import SectionHeading from "../components/ui/SectionHeading";
import { tools } from "../data/portfolioData";

const educationItems = [
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
].map((item) => ({ ...item, Icon: GraduationCap }));

const experienceItems = [
  {
    title: "Software Developer Intern",
    subtitle: "UCKG Help Center, United Kingdom",
    detail:
      "Currently working as an intern, contributing to software development tasks and technical projects.",
    Icon: Code2,
  },
  {
    title: "Media & Live Production Operator (Part-Time)",
    subtitle: "UCKG Help Center, United Kingdom",
    detail:
      "Working as a Camera Operator, Video Editor, and Live Stream Operator for organizational events and broadcasts.",
    Icon: Camera,
  },
  {
    title: "Media Team Head",
    subtitle: "IPC Church, Vijayawada, India",
    detail: "Handled camera operation, live streaming, and video editing for church services and events.",
    Icon: Clapperboard,
  },
  {
    title: "Sound Operator",
    subtitle: "Journey With Jesus Ministries, India",
    detail: "Managed live sound systems and audio setups for gospel meetings and ministry events.",
    Icon: Mic,
  },
  {
    title: "Freelance Media & Design Work",
    subtitle: "India and United Kingdom",
    detail:
      "Provided graphic design, video editing, camera operation, and live streaming services for multiple clients and churches.",
    Icon: Palette,
  },
];

const story = [
  "My name is Pardhu Mopidevi. My journey is not only about formal education, but also about learning through experience, responsibility, and faith.",
  "From a young age, church has been an important part of my life. Over time, I became involved in church media work and learned many practical skills naturally. I first learned sound system work by watching others and practicing on my own. With help from church members and my family, I became confident in handling live sound, audio mixers, and managing sound for regular services and large gospel meetings.",
  "I also developed an interest in video editing at an early age. During my school days, I started editing videos on my father’s phone using simple apps like VideoShow Pro and KineMaster. I had no formal training, but through regular practice, I learned basic editing and storytelling skills. As I grew older, I began editing church videos and kept improving by learning through real work.",
  "Since the church had camera equipment, I slowly got involved in camera operation as well. I learned camera basics, framing, and settings by using the cameras during church events. Later, when online services became necessary, I started handling live streaming. I learned how to set up streams, monitor outputs, and support online church services using the available equipment.",
  "Without realizing it, my childhood experiences prepared me for work in media, production, and live operations.",
  "My interest in software development started during the COVID-19 lockdown. With church activities paused and more time at home, I wanted to do something useful. During my second year of diploma, I decided to build a mobile app even though I had no coding experience. I learned Android development through online videos and began understanding basic concepts in Android Studio and Java. My goal was to create a digital version of my church song book, which had nearly 1,000 songs.",
  "Step by step, I learned how to design screens, connect buttons, and organize the app. I typed all the songs myself, and it took about seven months to finish. When I shared the app with church members, many appreciated it. This experience gave me confidence to learn new technologies on my own and solve problems independently.",
  "After completing my Diploma in Electronics and Communication Engineering, I continued with a B.Tech in the same field. To grow further in software and computing, I later moved to the UK to pursue an MSc in Computing. Along with my studies, I now work part-time as a video editor, camera operator, and live stream operator, using the skills I have developed since childhood in a professional setting.",
  "I do not claim to know everything, and I am honest about my limitations. What defines me is my willingness to learn. If I am given a task that I do not know how to do, I will take the time to learn and complete it. Learning and finishing what I start is my strongest quality.",
  "I am still learning, still growing, and always ready to take on new challenges, whether in a full-time role or meaningful freelance work.",
];

const chipColors = [
  "hover:bg-white hover:text-blue-800",
  "hover:bg-white hover:text-blue-800",
  "hover:bg-white hover:text-blue-800",
  "hover:bg-white hover:text-blue-800",
  "hover:bg-white hover:text-blue-800",
];

function Timeline({ items }) {
  return (
    <div className="relative mx-auto mt-14 max-w-4xl">
      <div className="absolute bottom-0 left-6 top-0 w-0.5 rounded-full md:left-1/2 md:-translate-x-1/2" style={{ background: "linear-gradient(180deg, #5eead4, rgba(255,255,255,0.25))" }} />
      <div className="space-y-8 md:space-y-12">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={item.title} className="relative md:grid md:grid-cols-2 md:gap-14">
              <div className="absolute left-6 top-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-white text-blue-800 shadow-lg shadow-blue-950/30 ring-4 ring-white/25 md:left-1/2">
                <item.Icon size={19} />
              </div>
              <div
                className={`glass lift reveal ml-16 p-6 md:ml-0 ${isLeft ? "md:col-start-1" : "md:col-start-2"}`}
                style={{ "--d": `${index * 60}ms` }}
              >
                <h3 className="font-display text-[17px] font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm font-medium text-blue-700">{item.subtitle}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <Layout>
      <section className="container-site pb-16 pt-10 md:pt-16">
        <div className="flex flex-col items-center text-center">
          <span className="pill reveal">About Me</span>
          <h1 className="reveal mt-6 font-display text-[44px] font-bold leading-[1.05] tracking-tight sm:text-[64px]">
            <span className="text-gradient-anim">Pardhu Mopidevi</span>
          </h1>
          <p className="reveal mt-4 max-w-xl text-lg text-muted">
            Multi-Skilled Professional in Software Development and Media Production
          </p>

          <div className="reveal relative mt-12 w-full max-w-[360px]">
            <div className="absolute -inset-6 rounded-[44px] bg-gradient-to-br from-white/20 via-sky-300/20 to-white/10 blur-2xl" />
            <div className="spin-border relative">
              <div className="aspect-square overflow-hidden rounded-[29px] bg-surface">
                <img
                  src="https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/hero/about-me.jpg"
                  alt="Pardhu Mopidevi"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionHeading title="Full Story" center />
          <div className="glass reveal relative mx-auto mt-12 max-w-4xl overflow-hidden p-8 md:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-300/30 blur-3xl" />
            <div className="relative space-y-5 text-[16px] leading-[1.85] text-muted">
              {story.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionHeading label="Career" title="Work Experience" center />
          <Timeline items={experienceItems} />
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionHeading label="Learning" title="Education" center />
          <Timeline items={educationItems} />
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionHeading
            title="Tools & Technologies"
            subtitle="These are tools I commonly use or have hands-on experience with, depending on project requirements."
            center
          />
          <ul className="reveal mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <li
                key={tool}
                className={`cursor-default rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 ${
                  chipColors[index % chipColors.length]
                }`}
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-site">
          <div
            className="reveal relative overflow-hidden rounded-3xl p-10 text-center text-white md:p-14"
            style={{ background: "linear-gradient(135deg, #0b1b3f 0%, #1e3a8a 50%, #1d4ed8 100%)", boxShadow: "0 30px 60px -28px rgba(11,27,63,0.7)" }}
          >
            <div className="pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full bg-white/15" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-white/10" />
            <Briefcase className="relative mx-auto" size={30} />
            <h2 className="relative mt-4 font-display text-3xl font-bold md:text-4xl">Interested in working together?</h2>
            <p className="relative mt-3 text-white/85">Open to full-time opportunities and meaningful collaborations.</p>
            <Link to="/#contact" className="btn relative mt-8 bg-white text-blue-800 hover:-translate-y-0.5 hover:bg-blue-50">
              Let's Connect <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
