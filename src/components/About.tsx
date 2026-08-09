"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { StatCounter } from "./StatCounter";
import { personalInfo, stats } from "@/data/portfolio";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="The person behind the code"
          subtitle="A quick summary of who I am and what I've been building."
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="relative rounded-3xl border border-border bg-surface p-8 sm:p-10"
          >
            <FaQuoteLeft className="mb-4 text-accent/40" size={28} />
            <p className="text-lg leading-relaxed text-foreground sm:text-xl">
              {personalInfo.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-sm text-muted">
              <span className="rounded-full border border-border px-3 py-1">
                📍 {personalInfo.location}
              </span>
              <span className="rounded-full border border-border px-3 py-1">
                💼 Team Lead
              </span>
              <span className="rounded-full border border-border px-3 py-1">
                🚀 Shipping since 2018
              </span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={scaleIn}
                className="rounded-2xl border border-border bg-surface p-6 text-center transition-colors hover:border-accent/50"
              >
                <div className="font-heading text-3xl font-bold text-gradient sm:text-4xl">
                  <StatCounter value={stat.value} />
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-wide text-muted sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
