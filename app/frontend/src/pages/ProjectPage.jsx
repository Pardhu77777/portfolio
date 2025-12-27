import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingIcons from "../components/FloatingIcons";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import TiltCard from "../components/ui/TiltCard";
import { works, projectDetails } from "../data/mockData";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";

function ProjectPage() {
  const { type, id } = useParams();
  const navigate = useNavigate();

  const key = type === "poster" ? "posters" : type === "video" ? "videos" : "websites";
  const list = works[key] || [];
  const currentIndex = list.findIndex((item) => item.id === id);
  const project = list[currentIndex] || list[0];
  const details = projectDetails[type] || projectDetails.poster;

  const prev = list[currentIndex - 1];
  const next = list[currentIndex + 1];

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

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <h1 className="text-4xl font-bold">{project?.title || details.title}</h1>
              <p className="mt-4 text-slate-300">{details.description}</p>
              <div className="mt-6 glass-card overflow-hidden">
                <img
                  src={project?.image}
                  alt={project?.title}
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
            <TiltCard className="glass-card p-6">
              <h3 className="text-xl font-semibold">Project Details</h3>
              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Calendar className="text-cyan-300" size={18} />
                  <div>
                    <p className="text-xs text-slate-400">Year</p>
                    <p>{details.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-purple-300" size={18} />
                  <div>
                    <p className="text-xs text-slate-400">Duration</p>
                    <p>{details.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="text-rose-300" size={18} />
                  <div>
                    <p className="text-xs text-slate-400">Client</p>
                    <p>{details.client}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Tools</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {details.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
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
