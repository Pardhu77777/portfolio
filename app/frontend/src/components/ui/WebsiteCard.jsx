import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import LazyVideo from "./LazyVideo";

function WebsiteCard({ item }) {
  return (
    <Link to={`/project/website/${item.id}`} className="glass lift group block overflow-hidden p-2.5">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface">
        {item.video ? (
          <LazyVideo
            src={item.video}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            autoPlay
          />
        ) : item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-sky-600 p-6 text-center">
            <span className="font-display text-lg font-bold leading-snug text-white/90">{item.title}</span>
          </div>
        )}
        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-blue-800 opacity-0 shadow transition duration-300 group-hover:opacity-100">
          <ArrowUpRight size={17} />
        </span>
      </div>
      <h3 className="px-2 pb-2 pt-4 font-display text-[15px] font-semibold leading-snug text-ink transition group-hover:text-accent">
        {item.title}
      </h3>
      {item.summary && <p className="line-clamp-2 px-2 text-[13px] leading-relaxed text-muted">{item.summary}</p>}
      {item.tags && (
        <div className="flex flex-wrap gap-1.5 px-2 pb-2 pt-3">
          {item.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white">
              {tag}
            </span>
          ))}
          {item.tags.length > 4 && (
            <span className="rounded-full px-1.5 py-0.5 text-[11px] font-medium text-soft">+{item.tags.length - 4}</span>
          )}
        </div>
      )}
    </Link>
  );
}

export default WebsiteCard;
