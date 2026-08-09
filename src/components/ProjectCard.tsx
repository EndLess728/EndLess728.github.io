"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaExpandAlt } from "react-icons/fa";
import { TiltCard } from "./TiltCard";
import { useProjectModal } from "@/lib/ProjectModalContext";
import type { projects } from "@/data/portfolio";

export function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const { openProject } = useProjectModal();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <TiltCard
        onClick={() => openProject(project)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") openProject(project);
        }}
        className="hover-target group flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-accent/40"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-hover">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex items-center gap-2 rounded-full border border-white/30 bg-black/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
              <FaExpandAlt size={11} />
              View Details
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.icon && (
                <Image
                  src={project.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 rounded-xl border border-border"
                />
              )}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {project.tagline}
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {project.name}
                </h3>
              </div>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name} website`}
                onClick={(e) => e.stopPropagation()}
                className="hover-target flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <FaExternalLinkAlt size={12} />
              </a>
            )}
          </div>

          <p className="text-sm text-muted">{project.description}</p>

          <ul className="flex flex-col gap-2">
            {project.bullets.slice(0, 3).map((bullet) => (
              <li
                key={bullet}
                className="flex gap-2 text-sm leading-relaxed text-muted"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-surface-hover px-3 py-1 text-xs font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
