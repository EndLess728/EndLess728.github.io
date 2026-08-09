"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { ProficiencyBar } from "./ProficiencyBar";
import { skills, techStack } from "@/data/portfolio";
import { scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";

function SkillGrid({ title, items }: { title: string; items: typeof skills.technologies }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
        {title}
      </h3>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="flex flex-wrap gap-3"
      >
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            custom={i}
            variants={scaleIn}
            whileHover={{ y: -4 }}
            className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
          >
            <item.icon size={16} className="text-accent" />
            {item.name}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="What I do"
          subtitle="Crafting awesome mobile experiences with a touch of magic — the languages, tools, and frameworks I reach for."
        />

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-10">
            <SkillGrid title="Languages" items={skills.languages} />
            <SkillGrid title="Technologies" items={skills.technologies} />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={scaleIn}
            className="flex flex-col gap-6 rounded-3xl border border-border bg-surface p-8"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Core Proficiency
            </h3>
            <div className="flex flex-col gap-5">
              {techStack.map((item, i) => (
                <ProficiencyBar
                  key={item.stack}
                  stack={item.stack}
                  proficiency={item.proficiency}
                  index={i}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
