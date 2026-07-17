import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
      <motion.div
        className="neon-outline inline-flex mb-4"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span>Portfolio</span>
      </motion.div>
      <motion.h2
        className="section-title text-gradient section-title-glow"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.1 }}
      >
        Featured Works
      </motion.h2>
      <div className="section-line" />
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Curated creative projects across web and visual design.
      </motion.p>
    </div>
  );
}

function VideoThumb({ src, className, preload = "auto", previewTime = 0.5 }) {
  const videoRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    const video = videoRef.current;
    const handleLoaded = () => {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        const target = Math.min(video.duration * previewTime, video.duration - 0.1);
        if (target > 0) {
          video.currentTime = target;
        }
      }
    };

    video.addEventListener("loadedmetadata", handleLoaded);
    const playPromise = videoRef.current.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
    };
  }, [src]);

  if (error) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-gradient-to-br from-cyan-500/20 via-slate-900 to-purple-500/20`}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      autoPlay
      loop
      muted
      defaultMuted
      playsInline
      preload={preload}
      onError={() => setError(true)}
    />
  );
}

function Card({ item, type, clickable }) {
  const isVideo = Boolean(item.video);
  if (!clickable) {
    return (
      <TiltCard className="relative overflow-hidden rounded-2xl border border-white/[0.06] transition-all duration-300 hover:border-cyan-400/25">
        <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
          {isVideo ? (
            <VideoThumb src={item.video} className="h-full w-full object-cover" preload="auto" />
          ) : (
            <img
              src={item.image}
              alt={item.title || "Poster"}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
              loading="lazy"
            />
          )}
          {/* Hover glow overlay */}
          <div className="absolute inset-0 opacity-0 transition duration-400 hover:opacity-100"
            style={{ background: "linear-gradient(135deg, rgba(0,240,255,0.06), rgba(168,85,247,0.06))" }} />
        </div>
      </TiltCard>
    );
  }

  return (
    <TiltCard className="relative overflow-hidden rounded-2xl border border-white/[0.06] transition-all duration-300 hover:border-cyan-400/30">
      <Link to={`/project/${type}/${item.id}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden">
          {isVideo ? (
            <VideoThumb src={item.video} className="h-full w-full object-cover" preload="auto" />
          ) : (
            <img
              src={item.image}
              alt={item.title || "Project"}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              loading="lazy"
            />
          )}
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
          {/* Neon top-edge on hover */}
          <div className="absolute left-0 right-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent transition-transform duration-400 group-hover:scale-x-100" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm opacity-0 transition duration-300 group-hover:opacity-100">
            <span>{item.title}</span>
            <ArrowRight size={16} />
          </div>
        </div>
        {type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="rounded-full bg-black/60 p-3 border border-cyan-400/20"
              whileHover={{ scale: 1.15, borderColor: "rgba(0,240,255,0.6)" }}
              style={{ boxShadow: "0 0 20px rgba(0,240,255,0.15)" }}
            >
              <Play size={20} className="text-cyan-300" />
            </motion.div>
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
        speed={1100}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
        }}
        coverflowEffect={{
          rotate: 9,
          stretch: 0,
          depth: 110,
          modifier: 1.05,
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 xl:max-w-7xl">
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
