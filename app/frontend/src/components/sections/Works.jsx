import React from "react";
import { Link } from "react-router-dom";
import { works } from "../../data/portfolioData";
import TiltCard from "../ui/TiltCard";
import { ArrowRight, Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

function SectionHeader({ title, subtitle, action, titleClassName = "" }) {
  return (
    <div className="flex items-end justify-between gap-4 flex-wrap">
      <div>
        <h2 className={`section-title ${titleClassName}`}>{title}</h2>
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        <div className="section-line" />
      </div>
      {action}
    </div>
  );
}

function FeaturedHeader() {
  return (
    <div className="text-center">
      <h2 className="section-title text-gradient">Featured Works</h2>
      <div className="section-line" />
      <p className="section-subtitle">
        Curated creative projects across web and visual design.
      </p>
    </div>
  );
}

function Card({ item, type, clickable }) {
  const isVideo = Boolean(item.video);
  if (!clickable) {
    return (
      <TiltCard className="relative overflow-hidden rounded-2xl">
        <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
          {isVideo ? (
            <video
              src={item.video}
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              defaultMuted
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={item.image}
              alt={item.title || "Poster"}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          )}
        </div>
      </TiltCard>
    );
  }

  return (
    <TiltCard className="relative overflow-hidden rounded-2xl">
      <Link to={`/project/${type}/${item.id}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden">
          {isVideo ? (
            <video
              src={item.video}
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              defaultMuted
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={item.image}
              alt={item.title || "Project"}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm opacity-0 transition duration-300 group-hover:opacity-100">
            <span>{item.title}</span>
            <ArrowRight size={16} />
          </div>
        </div>
        {type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-black/60 p-3">
              <Play size={20} className="text-cyan-300" />
            </div>
          </div>
        )}
      </Link>
    </TiltCard>
  );
}

function SectionSlider({
  id,
  items,
  type,
  clickable = true,
  loop = true,
  rewind = false,
  initialSlide = 0,
}) {
  return (
    <div className="relative mt-8">
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        spaceBetween={18}
        loop={loop}
        rewind={rewind}
        initialSlide={initialSlide}
        speed={800}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
        }}
        coverflowEffect={{
          rotate: 12,
          stretch: 0,
          depth: 120,
          modifier: 1.1,
          slideShadows: false,
        }}
        className="beeline-slider"
        onSwiper={(swiper) => {
          if (swiper?.autoplay) {
            swiper.autoplay.start();
          }
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} style={{ width: clickable ? 340 : 340 }}>
            <Card item={item} type={type} clickable={clickable} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function Works() {
  return (
    <section id="works" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <FeaturedHeader />

        <SectionHeader
          title="Websites & Applications"
          titleClassName="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-500 bg-clip-text text-transparent"
          action={
            <Link className="neon-button attention pulse" to="/works/website">
              View All Projects <ArrowRight size={16} />
            </Link>
          }
        />
        <SectionSlider
          id="web"
          items={works.websites}
          type="website"
          loop
          initialSlide={0}
        />

        <div className="mt-16">
          <SectionHeader
            title="Posters & Designs"
            titleClassName="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-rose-300 bg-clip-text text-transparent"
            action={
            <Link className="neon-button attention pulse" to="/works/poster">
              View All Projects <ArrowRight size={16} />
            </Link>
            }
          />
          <SectionSlider id="poster" items={works.postersHome} type="poster" clickable={false} />
        </div>

        <div className="mt-16">
          <SectionHeader
            title="Video Editing & Motion Work"
            titleClassName="bg-gradient-to-r from-amber-200 via-orange-300 to-pink-400 bg-clip-text text-transparent"
            action={
            <Link className="neon-button attention pulse" to="/works/video">
              View All Projects <ArrowRight size={16} />
            </Link>
            }
          />
        <SectionSlider id="video" items={works.videosHome} type="video" clickable={false} />
        </div>
      </div>
    </section>
  );
}

export default Works;
