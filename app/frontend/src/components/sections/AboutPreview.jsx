import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

function AboutPreview() {
  return (
    <section id="about" className="section">
      <div className="container-site">
        <SectionHeading label="About Me" title="My Story" center />

        <div className="glass reveal relative mx-auto mt-12 max-w-4xl overflow-hidden p-8 md:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-sky-300/45 blur-3xl" />
          <div className="relative space-y-5 text-[16px] leading-[1.85] text-muted">
            <p>
              From an early age, I grew up actively involved in church media, where I gained hands-on
              experience in sound operation, live streaming, camera operation, graphic design, and video
              editing. These experiences shaped my creative foundation and were largely self-driven,
              built through real-world practice.
            </p>
            <p>
              Alongside this, I pursued a Diploma in Electronics and Communication Engineering, where I
              developed strong technical knowledge and transitioned into software development. Today, I
              bring together multiple independent skills across media production and technology to
              deliver professional, reliable results.
            </p>
          </div>
          <Link className="btn-grad relative mt-8" to="/about">
            View My Full Journey <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
