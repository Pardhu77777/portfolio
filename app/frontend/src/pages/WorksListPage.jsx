import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "../components/layout/Layout";
import LazyVideo from "../components/ui/LazyVideo";
import WebsiteCard from "../components/ui/WebsiteCard";
import { works } from "../data/portfolioData";

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
    <Layout>
      <section className="container-site pb-20 pt-8 md:pt-12">
        <Link to="/#works" className="btn-ghost h-10 px-4">
          <ArrowLeft size={16} /> Back
        </Link>

        <div className="reveal mt-10 flex flex-col items-center text-center">
          <span className="pill">Portfolio</span>
          <h1 className="mt-5 font-display text-[34px] font-bold leading-tight tracking-tight md:text-[52px]">
            <span className="text-gradient">{titles[type] || "Projects"}</span>
          </h1>
          <div className="title-bar" />
          {key === "videosAll" && (
            <p className="subheading">
              I currently work professionally as a video editor; however, due to GDPR and content privacy
              policies, I am unable to display client or organizational videos on this portfolio.
            </p>
          )}
        </div>

        {key === "websites" && (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <div key={item.id} className="reveal" style={{ "--d": `${(index % 3) * 70}ms` }}>
                <WebsiteCard item={item} />
              </div>
            ))}
          </div>
        )}

        {key === "posters" && (
          <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {items.map((item) => (
              <div key={item.id} className="glass lift mb-5 break-inside-avoid overflow-hidden p-2">
                <img
                  src={item.image}
                  alt={item.title || "Poster"}
                  className="h-auto w-full rounded-2xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        )}

        {key === "videosAll" && (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <div key={item.id} className="glass lift reveal overflow-hidden p-2.5" style={{ "--d": `${(index % 3) * 70}ms` }}>
                <div className="aspect-video overflow-hidden rounded-2xl bg-ink">
                  <LazyVideo src={item.video} className="h-full w-full object-contain" controls />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default WorksListPage;
