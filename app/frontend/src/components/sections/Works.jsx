import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { works } from "../../data/mockData";
import TiltCard from "../ui/TiltCard";
import { Play, ArrowRight } from "lucide-react";

const categories = [
  { key: "posters", label: "Posters & Designs" },
  { key: "videos", label: "Videos" },
  { key: "websites", label: "Websites" },
];

function Works() {
  const [active, setActive] = useState("posters");
  const items = works[active];

  return (
    <section id="works" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="section-title">
              Featured <span className="text-gradient">Works</span>
            </h2>
            <p className="section-subtitle">Curated creative projects across media and web.</p>
            <div className="section-line" />
          </div>
          <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active === cat.key
                    ? "border-transparent bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-900"
                    : "border-white/10 bg-white/5 text-slate-200"
                }`}
                onClick={() => setActive(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <TiltCard key={item.id} className="relative overflow-hidden rounded-2xl">
              <Link
                to={`/project/${active.slice(0, -1)}/${item.id}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm opacity-0 transition duration-300 group-hover:opacity-100">
                    <span>{item.title}</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
                {active === "videos" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-black/60 p-3">
                      <Play size={20} className="text-cyan-300" />
                    </div>
                  </div>
                )}
              </Link>
            </TiltCard>
          ))}
        </div>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a className="neon-button" href="#contact">
            Start a Project <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Works;
