"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { useProjectModal } from "@/lib/ProjectModalContext";

export function ProjectModal() {
  const { activeProject, closeProject } = useProjectModal();

  useEffect(() => {
    if (!activeProject) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProject();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeProject, closeProject]);

  return (
    <AnimatePresence>
      {activeProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[150] flex items-center justify-center overflow-y-auto bg-black/60 p-4 py-10 backdrop-blur-sm sm:p-6"
          onClick={closeProject}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl"
          >
            <button
              type="button"
              onClick={closeProject}
              aria-label="Close project details"
              className="hover-target absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-md transition-colors hover:border-accent hover:text-accent"
            >
              <FaTimes size={14} />
            </button>

            <div className="relative aspect-[16/9] w-full bg-surface-hover">
              <Image
                src={activeProject.image}
                alt={activeProject.name}
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                className="object-cover"
              />
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-6 sm:p-8">
              <div className="flex items-center gap-3">
                {activeProject.icon && (
                  <Image
                    src={activeProject.icon}
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 shrink-0 rounded-xl border border-border"
                  />
                )}
                <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {activeProject.tagline}
                </span>
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-3">
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {activeProject.name}
                </h3>
                {activeProject.link && (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-target flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    Visit site <FaExternalLinkAlt size={10} />
                  </a>
                )}
              </div>

              <p className="mt-3 text-sm text-muted sm:text-base">
                {activeProject.description}
              </p>

              <ul className="mt-5 flex flex-col gap-3">
                {activeProject.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface-hover px-3 py-1 text-xs font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
