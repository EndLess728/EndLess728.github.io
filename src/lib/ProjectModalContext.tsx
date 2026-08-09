"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { projects } from "@/data/portfolio";

type Project = (typeof projects)[number];

type ProjectModalContextValue = {
  activeProject: Project | null;
  openProject: (project: Project) => void;
  closeProject: () => void;
};

const ProjectModalContext = createContext<ProjectModalContextValue | null>(null);

export function ProjectModalProvider({ children }: { children: ReactNode }) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const value = useMemo(
    () => ({
      activeProject,
      openProject: (project: Project) => setActiveProject(project),
      closeProject: () => setActiveProject(null),
    }),
    [activeProject]
  );

  return (
    <ProjectModalContext.Provider value={value}>{children}</ProjectModalContext.Provider>
  );
}

export function useProjectModal() {
  const ctx = useContext(ProjectModalContext);
  if (!ctx) throw new Error("useProjectModal must be used within ProjectModalProvider");
  return ctx;
}
