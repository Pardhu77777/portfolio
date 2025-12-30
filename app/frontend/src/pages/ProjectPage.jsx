import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingIcons from "../components/FloatingIcons";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import TiltCard from "../components/ui/TiltCard";
import { works, projectDetails } from "../data/portfolioData";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";

function ProjectPage() {
  const { type, id } = useParams();
  const navigate = useNavigate();

  const key = type === "poster" ? "posters" : type === "video" ? "videosAll" : "websites";
  const list = works[key] || [];
  const currentIndex = list.findIndex((item) => item.id === id);
  const project = list[currentIndex] || list[0];
  const details = projectDetails[type] || projectDetails.poster;
  const description = project?.description || details.description;

  const majorHeadings = new Set([
    "Tech Stack",
    "Key Features",
    "Key Features and Architecture",
    "Key Use Cases",
    "Why this project matters",
    "Learner experience",
    "Admin experience",
    "Payments + access control",
    "Payment Service",
  ]);
  const minorHeadings = new Set(["Frontend", "Backend", "Infrastructure", "Deployment"]);

  const renderDescription = (text) => {
    if (!text) {
      return null;
    }

    return text.split("\n\n").map((block, index) => {
      const trimmed = block.trim();
      if (!trimmed) {
        return null;
      }

      if (majorHeadings.has(trimmed)) {
        return (
          <h4
            key={`desc-${index}`}
            className="mt-6 text-sm uppercase tracking-[0.25em] text-cyan-300"
          >
            {trimmed}
          </h4>
        );
      }

      if (minorHeadings.has(trimmed)) {
        return (
          <h5 key={`desc-${index}`} className="mt-4 text-base font-semibold text-slate-100">
            {trimmed}
          </h5>
        );
      }

      const lines = trimmed.split("\n").map((line) => line.trim()).filter(Boolean);
      if (lines.length > 0 && lines.every((line) => line.startsWith("- "))) {
        return (
          <ul key={`desc-${index}`} className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
            {lines.map((line) => (
              <li key={line}>{line.slice(2)}</li>
            ))}
          </ul>
        );
      }

      return (
        <p
          key={`desc-${index}`}
          className="mt-4 text-slate-300 leading-relaxed"
          style={{ textAlign: "justify" }}
        >
          {trimmed}
        </p>
      );
    });
  };

  const prev = list[currentIndex - 1];
  const next = list[currentIndex + 1];

  return (
    <motion.div
      className="page-shell"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <FloatingIcons />
      <Header />
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="flex items-center gap-2 text-sm text-slate-300"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={16} />
              Back
            </button>
            <div className="flex items-center gap-3">
              {prev && (
                <Link
                  className="flex items-center gap-2 text-sm text-slate-300"
                  to={`/project/${type}/${prev.id}`}
                >
                  <ArrowLeft size={14} />
                  Prev
                </Link>
              )}
              {next && (
                <Link
                  className="flex items-center gap-2 text-sm text-slate-300"
                  to={`/project/${type}/${next.id}`}
                >
                  Next
                  <ArrowRight size={14} />
                </Link>
              )}
            </div>
          </div>

          <div className="mt-10">
            <h1 className="text-4xl font-bold">{project?.title || details.title}</h1>
            <div className="mt-6 glass-card overflow-hidden">
              {project?.video ? (
                <video
                  src={project.video}
                  className="h-auto w-full bg-black object-contain"
                  controls
                  preload="metadata"
                />
              ) : (
                <img
                  src={project?.image}
                  alt={project?.title}
                  className="h-auto w-full object-contain"
                />
              )}
            </div>
            <div className="mt-6">{renderDescription(description)}</div>
          </div>

          {type === "poster" && (
            <div className="mt-12">
              <h3 className="text-xl font-semibold">Gallery</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {list.slice(0, 3).map((item) => (
                  <TiltCard key={`gallery-${item.id}`} className="overflow-hidden rounded-2xl">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  </TiltCard>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 glass-card p-10 text-center">
            <h3 className="text-2xl font-semibold">More Projects?</h3>
            <p className="mt-3 text-slate-300">
              Explore more of my creative and technical work.
            </p>
            <div className="mt-6 flex justify-center">
              <Link className="neon-button" to="/">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </motion.div>
  );
}

export default ProjectPage;
