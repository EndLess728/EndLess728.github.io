"use client";

import { motion } from "framer-motion";
import { FaGithub, FaCube, FaDownload } from "react-icons/fa";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";
import { openSource } from "@/data/portfolio";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function OpenSource() {
  return (
    <section id="open-source" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Open Source"
          title="Packages I maintain"
          subtitle="Tools I've published for the React Native / Expo community."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {openSource.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              custom={i}
            >
              <TiltCard className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-surface p-7 transition-colors hover:border-accent/40">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent"
                    >
                      <FaCube size={18} />
                    </motion.div>
                    <h3 className="font-heading text-base font-bold text-foreground sm:text-lg">
                      {pkg.name}
                    </h3>
                  </div>
                  <a
                    href={pkg.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${pkg.name} on GitHub`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <FaGithub size={14} />
                  </a>
                </div>

                <p className="text-sm text-muted">{pkg.description}</p>

                <ul className="flex flex-col gap-2">
                  {pkg.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-accent">
                    <FaDownload size={11} />
                    {pkg.downloads}
                  </span>
                  <a
                    href={pkg.npmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-muted transition-colors hover:text-accent"
                  >
                    View on npm →
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
