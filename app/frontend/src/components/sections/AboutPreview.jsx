import React from "react";
import { Link } from "react-router-dom";
import { stats } from "../../data/portfolioData";
import TiltCard from "../ui/TiltCard";

function AboutPreview() {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="neon-outline inline-flex">
          <span>About Me</span>
        </div>
        <div className="section-line" />
        <h2 className="section-title mt-4 text-gradient">My Story</h2>
        <TiltCard className="glass-card card-glow mt-10 p-8">
          <p className="text-base text-slate-300">
            From an early age, I grew up actively involved in church media, where I gained hands-on
            experience in sound operation, live streaming, camera operation, graphic design, and video
            editing. These experiences shaped my creative foundation and were largely self-driven, built
            through real-world practice.
          </p>
          <p className="mt-4 text-base text-slate-300">
            Alongside this, I pursued a Diploma in Electronics and Communication Engineering, where I
            developed strong technical knowledge and transitioned into software development. Today, I
            bring together multiple independent skills across media production and technology to deliver
            professional, reliable results.
          </p>
          <p className="mt-4 text-base text-slate-300">
            Offering multiple professional skill sets with a strong focus on quality, reliability, and
            consistency.
          </p>
          <div className="mt-8 flex justify-center">
            <Link className="neon-button" to="/about">
              View My Full Journey
            </Link>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}

export default AboutPreview;
