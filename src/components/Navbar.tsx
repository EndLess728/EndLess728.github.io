"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks, personalInfo } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/75 backdrop-blur-lg"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <motion.div
          style={{ scaleX: progress }}
          className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-accent via-accent-2 to-accent-3"
        />
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          <a
            href="#top"
            className="hover-target font-heading text-lg font-bold text-foreground"
          >
            Mantu<span className="text-accent">.</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`hover-target relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {activeSection === link.href && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full border border-accent/30 bg-accent/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href={personalInfo.resumeDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-target flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
            >
              <FaDownload size={12} />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="hover-target flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground"
            >
              <FaBars size={14} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <a
                href="#top"
                onClick={() => setMenuOpen(false)}
                className="hover-target font-heading text-lg font-bold text-foreground"
              >
                Mantu<span className="text-accent">.</span>
              </a>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="hover-target flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground"
              >
                <FaTimes size={14} />
              </button>
            </div>

            <nav className="flex flex-col gap-1 px-6 pt-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setMenuOpen(false)}
                  className={`hover-target font-heading border-b border-border py-4 text-3xl font-bold ${
                    activeSection === link.href ? "text-accent" : "text-foreground"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * navLinks.length, duration: 0.4 }}
              href={personalInfo.resumeDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-target mx-6 mt-8 flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white"
            >
              <FaDownload size={12} />
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
