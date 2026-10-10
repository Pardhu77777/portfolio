import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";

function MetaItem({ label, children }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-soft">{label}</p>
      <div className="mt-1.5 text-[15px] font-medium text-white">{children}</div>
    </div>
  );
}

function LiveValue({ project }) {
  if (project.liveUrl) {
    return (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 underline-offset-4 hover:text-accent hover:underline"
      >
        {project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")} <ArrowUpRight size={15} />
      </a>
    );
  }
  return <span>{project.live || "Coming soon"}</span>;
}

function Cover({ project }) {
  if (project.video) {
    return (
      <video
        src={project.video}
        className="h-auto w-full rounded-2xl bg-black"
        controls
        preload="metadata"
        playsInline
      />
    );
  }
  if (project.image) {
    return <img src={project.image} alt={project.title} className="h-auto w-full rounded-2xl" />;
  }
  return (
    <div className="flex aspect-[16/8] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-blue-900 via-blue-700 to-sky-600 p-8 text-center">
      <span className="font-display text-2xl font-bold text-white/90 md:text-4xl">{project.title}</span>
    </div>
  );
}

function SectionBlock({ section, index }) {
  const labelled = section.items?.every((item) => item.label);
  const number = String(index + 1).padStart(2, "0");

  return (
    <section className="reveal scroll-mt-28">
      <div className="flex items-baseline gap-4">
        <span className="font-display text-sm font-bold text-accent">{number}</span>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-[28px]">{section.heading}</h2>
      </div>
      <div className="mt-4 h-px w-full bg-white/15" />

      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="mt-6 text-[17px] leading-[1.8] text-muted">
          {paragraph}
        </p>
      ))}

      {section.items && labelled && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {section.items.map((item) => (
            <div key={item.label} className="glass p-5">
              <h3 className="font-display text-[15px] font-semibold text-white">{item.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      )}

      {section.items && !labelled && (
        <ul className="glass mt-6 divide-y divide-white/10 px-5">
          {section.items.map((item) => (
            <li key={item.text.slice(0, 40)} className="flex gap-3 py-4 leading-relaxed text-muted">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Check size={13} strokeWidth={3} />
              </span>
              <span>
                {item.label && <strong className="font-semibold text-white">{item.label}: </strong>}
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function StackCard({ stack }) {
  return (
    <div className="glass p-6">
      <h2 className="font-display text-lg font-bold">Tech Stack</h2>
      <div className="mt-5 space-y-5">
        {stack.map((group) => (
          <div key={group.label}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">{group.label}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {group.items.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/15 bg-white/[0.08] px-2.5 py-1 text-xs font-medium text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NavCard({ project, type, direction }) {
  const isNext = direction === "next";
  return (
    <Link
      to={`/project/${type}/${project.id}`}
      className={`glass lift group flex flex-col p-6 ${isNext ? "sm:items-end sm:text-right" : ""}`}
    >
      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
        {!isNext && <ArrowLeft size={14} />}
        {isNext ? "Next project" : "Previous project"}
        {isNext && <ArrowRight size={14} />}
      </span>
      <span className="mt-2 font-display text-lg font-bold leading-snug">{project.title}</span>
      {project.summary && <span className="mt-1 line-clamp-2 text-sm text-muted">{project.summary}</span>}
    </Link>
  );
}

function CaseStudy({ project, prev, next, type }) {
  return (
    <article className="container-site pb-24 pt-8 md:pt-12">
      <Link to={`/works/${type}`} className="btn-ghost h-10 px-4">
        <ArrowLeft size={16} /> All projects
      </Link>

      <header className="mt-10 max-w-4xl">
        <span className="pill">Case Study</span>
        <h1 className="mt-5 font-display text-[36px] font-bold leading-[1.1] tracking-tight md:text-[56px]">
          <span className="text-gradient">{project.title}</span>
        </h1>
        {project.tagline && <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">{project.tagline}</p>}
      </header>

      <div className="mt-10 grid gap-6 border-y border-white/15 py-6 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_2fr_auto] lg:items-center">
        <MetaItem label="Role">{project.role}</MetaItem>
        <MetaItem label="Live">
          <LiveValue project={project} />
        </MetaItem>
        {project.tags && (
          <MetaItem label="Key technologies">
            <span className="text-[14px] text-muted">{project.tags.join(" · ")}</span>
          </MetaItem>
        )}
        {project.liveUrl && (
          <a className="btn-grad justify-self-start lg:justify-self-end" href={project.liveUrl} target="_blank" rel="noreferrer">
            Visit Live Website <ArrowUpRight size={16} />
          </a>
        )}
      </div>

      <div className="glass mt-10 overflow-hidden p-2.5">
        <Cover project={project} />
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
        <div className="space-y-16">
          {project.sections.map((section, index) => (
            <SectionBlock key={section.heading} section={section} index={index} />
          ))}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <StackCard stack={project.stack} />
        </aside>
      </div>

      {(prev || next) && (
        <nav className="mt-20 grid gap-4 sm:grid-cols-2">
          {prev ? <NavCard project={prev} type={type} direction="prev" /> : <span className="hidden sm:block" />}
          {next && <NavCard project={next} type={type} direction="next" />}
        </nav>
      )}
    </article>
  );
}

export default CaseStudy;
