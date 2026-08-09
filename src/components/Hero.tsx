"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaEye, FaChevronDown } from "react-icons/fa";
import { AnimatedBackground } from "./AnimatedBackground";
import { Container } from "./Container";
import { RevealText } from "./RevealText";
import { TypingRole } from "./TypingRole";
import { Magnetic } from "./Magnetic";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { useIsCoarsePointer } from "@/lib/useIsCoarsePointer";

export function Hero() {
  const isCoarsePointer = useIsCoarsePointer();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <AnimatedBackground />

      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to opportunities
            </motion.span>

            <h1 className="font-heading text-4xl font-bold leading-[1.1] text-foreground sm:text-6xl">
              <RevealText text={`Hi, I'm ${personalInfo.name}.`} delay={0.15} />
              <br />
              <TypingRole roles={personalInfo.rolesForTyping} />
            </h1>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-base text-muted sm:text-lg"
            >
              {personalInfo.summary}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <Magnetic>
                <a
                  href="#projects"
                  className="hover-target group flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-shadow hover:shadow-xl hover:shadow-accent/30 active:scale-95"
                >
                  View My Work
                  <FaArrowRight
                    size={12}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={personalInfo.resumeViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-target flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <FaEye size={12} />
                  View Resume
                </a>
              </Magnetic>
              <Magnetic strength={0.5}>
                <a
                  href="#contact"
                  className="hover-target flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-muted transition-colors hover:text-foreground"
                >
                  Get in Touch
                </a>
              </Magnetic>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-4 pt-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target={social.name === "Email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover-target flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto hidden aspect-square w-full max-w-sm lg:block"
          >
            <motion.div
              animate={isCoarsePointer ? undefined : { rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-border"
            />
            <motion.div
              animate={isCoarsePointer ? undefined : { rotate: -360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 rounded-full border border-border"
            />
            <div className="animate-float absolute inset-10 rounded-full bg-gradient-to-br from-accent via-accent-2 to-accent-3 p-1.5 shadow-2xl shadow-accent/30">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-surface">
                <Image
                  src={personalInfo.photo}
                  alt={personalInfo.fullName}
                  fill
                  sizes="320px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <motion.div
              animate={isCoarsePointer ? undefined : { y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-4 rounded-2xl border border-border bg-surface/80 px-4 py-3 text-xs font-medium text-foreground shadow-lg backdrop-blur-md sm:-left-8"
            >
              🚀 7+ yrs experience
            </motion.div>
            <motion.div
              animate={isCoarsePointer ? undefined : { y: [0, 14, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-2 bottom-6 rounded-2xl border border-border bg-surface/80 px-4 py-3 text-xs font-medium text-foreground shadow-lg backdrop-blur-md sm:-right-6"
            >
              ⚡ 280K+ npm downloads
            </motion.div>
          </motion.div>
        </div>
      </Container>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="hover-target absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
