import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingIcons from "../components/FloatingIcons";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import TiltCard from "../components/ui/TiltCard";
import { works } from "../data/portfolioData";
import { ArrowRight } from "lucide-react";

const titles = {
  website: "Websites & Applications",
  poster: "Posters & Designs",
  video: "Video Editing & Motion Work",
};

function WorksListPage() {
  const { type } = useParams();
  const key = type === "website" ? "websites" : type === "video" ? "videosAll" : "posters";
  const items = works[key] || [];

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
          <div className="text-center">
            <h2 className="section-title">{titles[type] || "Projects"}</h2>
            <div className="section-line" />
            {key === "posters" && (
              <p
                className="section-subtitle mt-4 mx-auto max-w-3xl leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                These are some of my recent poster, thumbnail, and flyer projects created primarily
                using Adobe Photoshop. Each design focuses on clarity, visual balance, and purpose,
                whether for church events, promotions, or digital platforms. With every new project, I
                continue to learn, refine my design approach, and improve the overall quality of my
                work, aiming to deliver clean, high-resolution outputs that communicate effectively.
              </p>
            )}
            {key === "videosAll" && (
              <p
                className="section-subtitle mt-4 mx-auto max-w-3xl leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                This section showcases a selection of my recent video editing projects created using
                professional tools such as Adobe Premiere Pro and After Effects. I currently work
                professionally as a video editor; however, due to GDPR and content privacy policies, I
                am unable to display client or organizational videos on this portfolio.
              </p>
            )}
            {key === "videosAll" && (
              <p
                className="section-subtitle mt-4 mx-auto max-w-3xl leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                The videos shown here are professionally produced personal and recent projects where I
                handled both shooting and editing. These works reflect my editing approach, storytelling
                style, and technical workflow. With every project, I continue to refine my skills,
                experiment with new techniques, and improve the overall quality of my work, progressing
                and learning from video to video.
              </p>
            )}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <TiltCard key={item.id} className="relative overflow-hidden rounded-2xl">
                {key === "posters" ? (
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title || "Poster"}
                      className="h-auto w-full"
                      loading="lazy"
                    />
                  </div>
                ) : key === "videosAll" ? (
                  <div className="relative overflow-hidden">
                    <video
                      src={item.video}
                      className="h-auto w-full"
                      controls
                      preload="metadata"
                    />
                  </div>
                ) : (
                  <Link to={`/project/${type}/${item.id}`} className="group block">
                    <div className="relative overflow-hidden">
                      {item.video ? (
                        <video
                          src={item.video}
                          className="h-auto w-full transition duration-300 group-hover:scale-[1.02]"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                        />
                      ) : (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-auto w-full transition duration-300 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm opacity-0 transition duration-300 group-hover:opacity-100">
                        <span>{item.title}</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                )}
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </motion.div>
  );
}

export default WorksListPage;
