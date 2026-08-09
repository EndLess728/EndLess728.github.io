"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { education } from "@/data/portfolio";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="mx-auto flex max-w-2xl flex-col gap-5">
          {education.map((school, i) => (
            <motion.div
              key={school.schoolName}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              custom={i}
              className="flex flex-col items-start gap-5 rounded-3xl border border-border bg-surface p-7 transition-colors hover:border-accent/40 sm:flex-row sm:items-center sm:p-8"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-white p-2 shadow-sm">
                <Image
                  src={school.logo}
                  alt={`${school.schoolName} logo`}
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {school.schoolName}
                </h3>
                <p className="flex items-center gap-1.5 text-sm font-medium text-accent">
                  <FaGraduationCap size={13} /> {school.degree}
                </p>
                <p className="text-sm text-muted">{school.desc}</p>
                <p className="flex items-center gap-1.5 text-xs text-muted">
                  <FaCalendarAlt size={11} /> {school.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
