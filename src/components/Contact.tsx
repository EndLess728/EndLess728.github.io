"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";
import { AnimatedBackground } from "./AnimatedBackground";
import { Container } from "./Container";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <AnimatedBackground edgeFade />
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-accent"
          >
            Contact
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl font-bold text-foreground sm:text-4xl"
          >
            Let&apos;s build something great together
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted sm:text-lg">
            Discuss a project or just want to say hi? My inbox is open for
            all.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-4 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
            >
              <FaEnvelope size={14} />
              {personalInfo.email}
            </a>
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy email address"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-accent hover:text-accent cursor-pointer"
            >
              {copied ? <FaCheck size={14} className="text-accent" /> : <FaCopy size={14} />}
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-4 pt-4">
            {socialLinks
              .filter((s) => s.name !== "Email")
              .map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all hover:-translate-y-1 hover:border-accent hover:text-accent"
                >
                  <social.icon size={17} />
                </a>
              ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
