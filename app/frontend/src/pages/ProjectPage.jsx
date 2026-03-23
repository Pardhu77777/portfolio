import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingIcons from "../components/FloatingIcons";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import TiltCard from "../components/ui/TiltCard";
import { works, projectDetails } from "../data/portfolioData";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

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

    const blocks = text.split("\n\n").map((block) => block.trim()).filter(Boolean);
    const elements = [];
    let inTechStack = false;
    let pendingTechStackGroup = null;

    const flushTechStackGroup = () => {
      if (!pendingTechStackGroup || pendingTechStackGroup.items.length === 0) {
        pendingTechStackGroup = null;
        return;
      }

      const items = pendingTechStackGroup.items;
      elements.push(
        <ul
          key={`techstack-${pendingTechStackGroup.heading}`}
          className="mt-3 grid gap-2 text-slate-300 sm:grid-cols-2"
        >
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
      pendingTechStackGroup = null;
    };

    blocks.forEach((block, index) => {
      if (majorHeadings.has(block)) {
        flushTechStackGroup();
        inTechStack = block === "Tech Stack";
        elements.push(
          <h4
            key={`desc-${index}`}
            className="mt-6 text-sm uppercase tracking-[0.25em] text-cyan-300"
          >
            {block}
          </h4>
        );
        return;
      }

      if (minorHeadings.has(block)) {
        flushTechStackGroup();
        if (inTechStack) {
          pendingTechStackGroup = { heading: block, items: [] };
        }
        elements.push(
          <h5 key={`desc-${index}`} className="mt-4 text-base font-semibold text-slate-100">
            {block}
          </h5>
        );
        return;
      }

      const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
      if (inTechStack && pendingTechStackGroup) {
        const cleaned = lines.map((line) => (line.startsWith("- ") ? line.slice(2) : line));
        pendingTechStackGroup.items.push(...cleaned);
        return;
      }

      if (lines.length > 0 && lines.every((line) => line.startsWith("- "))) {
        elements.push(
          <ul key={`desc-${index}`} className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
            {lines.map((line) => (
              <li key={line}>{line.slice(2)}</li>
            ))}
          </ul>
        );
        return;
      }

      elements.push(
        <p
          key={`desc-${index}`}
          className="mt-4 text-slate-300 leading-relaxed"
          style={{ textAlign: "justify" }}
        >
          {block}
        </p>
      );
    });

    flushTechStackGroup();
    return elements;
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
            {project?.liveUrl ? (
              <div className="mt-4">
                <a
                  className="neon-button inline-flex"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Live Website <ExternalLink size={16} />
                </a>
              </div>
            ) : null}
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
