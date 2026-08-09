"use client";

import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { Container } from "./Container";
import { navLinks, socialLinks, personalInfo } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_70%_100%_at_50%_0%,#000_0%,transparent_75%)]" />
      <Container>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="font-heading text-lg font-bold text-foreground">
            Mantu<span className="text-accent">.</span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.name === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <social.icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {year} {personalInfo.fullName}. Built with Next.js &amp; Tailwind CSS.
          </p>
          <motion.a
            href="#top"
            aria-label="Back to top"
            whileHover={{ y: -3 }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <FaArrowUp size={12} />
          </motion.a>
        </div>
      </Container>
    </footer>
  );
}
