import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Layout from "../components/layout/Layout";
import CaseStudy from "../components/project/CaseStudy";
import { works, projectDetails } from "../data/portfolioData";

const majorHeadings = new Set([
  "Tech Stack",
  "Key Features",
  "Key Features and Architecture",
  "Key Use Cases",
  "Key Responsibilities",
  "Why this project matters",
  "Learner experience",
  "Admin experience",
  "Payments + access control",
  "Payment Service",
]);
const minorHeadings = new Set([
  "Frontend",
  "Backend",
  "Database",
  "Payments",
  "Email",
  "Security",
  "Infrastructure",
  "Deployment",
]);

function renderDescription(text) {
  if (!text) return null;

  const blocks = text.split("\n\n").map((block) => block.trim()).filter(Boolean);
  const elements = [];
  let inTechStack = false;
  let techGroups = [];
  let currentGroup = null;
  let pendingList = null;

  const flushTechStack = () => {
    if (techGroups.length === 0) return;
    elements.push(
      <dl key={`tech-${elements.length}`} className="glass mt-5 divide-y divide-line overflow-hidden px-6">
        {techGroups.map((group) => (
          <div key={group.heading} className="grid items-center gap-2 py-4 sm:grid-cols-[150px_1fr]">
            <dt className="text-sm font-semibold text-accent">{group.heading}</dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((tech) => (
                <span key={tech} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white">
                  {tech}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    );
    techGroups = [];
    currentGroup = null;
  };

  const flushList = () => {
    if (!pendingList || pendingList.length === 0) {
      pendingList = null;
      return;
    }
    elements.push(
      <ul key={`list-${elements.length}`} className="mt-5 space-y-3 text-muted">
        {pendingList.map((line) => (
          <li key={line} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ background: "#5eead4" }} />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    );
    pendingList = null;
  };

  blocks.forEach((block, index) => {
    if (majorHeadings.has(block)) {
      flushTechStack();
      flushList();
      inTechStack = block === "Tech Stack";
      if (!inTechStack) pendingList = [];
      elements.push(
        <h2 key={`h-${index}`} className="mt-12 font-display text-xl font-bold tracking-tight text-gradient">
          {block}
        </h2>
      );
      return;
    }

    if (inTechStack && minorHeadings.has(block)) {
      currentGroup = { heading: block, items: [] };
      techGroups.push(currentGroup);
      return;
    }

    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
    const cleaned = lines.map((line) => (line.startsWith("- ") ? line.slice(2) : line));

    if (inTechStack && currentGroup) {
      currentGroup.items.push(...cleaned);
      return;
    }

    const isBulletBlock = lines.every((line) => line.startsWith("- "));
    const isShortItem = pendingList && lines.length === 1 && block.length < 90 && !/[.!?]$/.test(block);
    if (pendingList && (isBulletBlock || isShortItem)) {
      pendingList.push(...cleaned);
      return;
    }

    flushList();
    elements.push(
      <p key={`p-${index}`} className="mt-5 leading-[1.8] text-muted">
        {block}
      </p>
    );
  });

  flushTechStack();
  flushList();
  return elements;
}

function ProjectPage() {
  const { type, id } = useParams();

  const key = type === "poster" ? "posters" : type === "video" ? "videosAll" : "websites";
  const list = works[key] || [];
  const currentIndex = list.findIndex((item) => item.id === id);
  const project = list[currentIndex] || list[0];
  const details = projectDetails[type] || projectDetails.poster;
  const description = project?.description || details.description;

  const prev = list[currentIndex - 1];
  const next = list[currentIndex + 1];

  if (project?.sections) {
    return (
      <Layout>
        <CaseStudy project={project} prev={prev} next={next} type={type} />
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="container-site pb-20 pt-8 md:pt-12">
        <Link to={`/works/${type}`} className="btn-ghost h-10 px-4">
          <ArrowLeft size={16} /> Back
        </Link>

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h1 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
              <span className="text-gradient">{project?.title || details.title}</span>
            </h1>
            {project?.tagline && <p className="mt-4 text-lg leading-relaxed text-muted">{project.tagline}</p>}
          </div>
          {project?.liveUrl && (
            <a className="btn-grad shrink-0" href={project.liveUrl} target="_blank" rel="noreferrer">
              Visit Live Website <ArrowUpRight size={16} />
            </a>
          )}
        </div>

        {(project?.video || project?.image) && (
          <div className="glass mt-10 overflow-hidden p-2.5">
            {project.video ? (
              <video
                src={project.video}
                className="h-auto w-full rounded-2xl bg-black"
                controls
                controlsList="nodownload noremoteplayback noplaybackrate"
                disablePictureInPicture
                disableRemotePlayback
                onContextMenu={(event) => event.preventDefault()}
                preload="metadata"
                playsInline
              />
            ) : (
              <img src={project.image} alt={project.title} className="h-auto w-full rounded-2xl" />
            )}
          </div>
        )}

        <div className="mx-auto mt-6 max-w-3xl">{renderDescription(description)}</div>

        {(prev || next) && (
          <nav className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-between gap-3 text-sm">
            {prev ? (
              <Link to={`/project/${type}/${prev.id}`} className="btn-ghost h-auto min-h-10 max-w-[48%] px-4 py-2 text-left">
                <ArrowLeft size={16} /> {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                to={`/project/${type}/${next.id}`}
                className="btn-ghost ml-auto h-auto min-h-10 max-w-[48%] px-4 py-2 text-right"
              >
                {next.title} <ArrowRight size={16} />
              </Link>
            )}
          </nav>
        )}
      </article>
    </Layout>
  );
}

export default ProjectPage;
