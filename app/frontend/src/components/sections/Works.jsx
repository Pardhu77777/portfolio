import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { works } from "../../data/portfolioData";
import LazyVideo from "../ui/LazyVideo";
import WebsiteCard from "../ui/WebsiteCard";
import SectionHeading from "../ui/SectionHeading";

function GroupHeader({ title, to, gradient }) {
  return (
    <div className="reveal flex flex-wrap items-end justify-between gap-4">
      <h3 className={`font-display text-2xl font-bold tracking-tight md:text-3xl text-white`}>
        {title}
      </h3>
      <Link className="btn-ghost h-10 px-5" to={to}>
        View All Projects <ArrowRight size={15} />
      </Link>
    </div>
  );
}

function Coverflow({ items, renderItem }) {
  return (
    <div className="reveal mt-6">
      <Swiper
        className="coverflow"
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        spaceBetween={20}
        loop
        speed={900}
        autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
        coverflowEffect={{ rotate: 8, stretch: 0, depth: 120, modifier: 1, slideShadows: false }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function Works() {
  return (
    <section id="works" className="section">
      <div className="container-site">
        <SectionHeading
          label="Portfolio"
          title="Featured Works"
          subtitle="Curated creative projects across web and visual design."
          center
        />

        <div className="mt-16">
          <GroupHeader title="Websites & Applications" to="/works/website" gradient="from-blue-800 via-blue-600 to-sky-500" />
          <Coverflow items={works.websites} renderItem={(item) => <WebsiteCard item={item} />} />
        </div>

        <div className="mt-16">
          <GroupHeader title="Posters & Designs" to="/works/poster" gradient="from-blue-900 via-blue-700 to-blue-500" />
          <Coverflow
            items={works.postersHome}
            renderItem={(item) => (
              <div className="glass overflow-hidden p-2.5">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-surface">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                </div>
              </div>
            )}
          />
        </div>

        <div className="mt-16">
          <GroupHeader title="Video Editing & Motion Work" to="/works/video" gradient="from-blue-700 via-blue-500 to-sky-400" />
          <Coverflow
            items={works.videosHome}
            renderItem={(item) => (
              <div className="glass overflow-hidden p-2.5">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-ink">
                  <LazyVideo src={item.video} className="h-full w-full object-cover" autoPlay />
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}

export default Works;
