"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronDown, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { fadeUp, viewportOnce } from "@/lib/motion";
import type { experience } from "@/data/portfolio";

const VISIBLE_COUNT = 4;

export function ExperienceItem({
  item,
  index,
  isLast,
}: {
  item: (typeof experience)[number];
  index: number;
  isLast: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = item.bullets.length > VISIBLE_COUNT;
  const visibleBullets = expanded ? item.bullets : item.bullets.slice(0, VISIBLE_COUNT);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      custom={index}
      className="relative flex gap-6 pb-14 last:pb-0"
    >
      <div className="flex flex-col items-center">
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-white p-2 shadow-sm">
          <Image
            src={item.logo}
            alt={`${item.company} logo`}
            width={40}
            height={40}
            className="h-full w-full object-contain"
          />
        </div>
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-gradient-to-b from-border to-transparent" />
        )}
      </div>

      <div className="flex-1 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl">
              {item.role}
            </h3>
            <p className="text-accent font-medium">{item.company}</p>
          </div>
          <div className="flex flex-col items-end gap-1 text-xs text-muted sm:text-sm">
            <span className="flex items-center gap-1.5">
              <FaCalendarAlt size={11} /> {item.date}
            </span>
            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt size={11} /> {item.location}
            </span>
          </div>
        </div>

        <ul className="mt-4 flex flex-col gap-2.5">
          {visibleBullets.map((bullet) => (
            <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-muted sm:text-[15px]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {bullet}
            </li>
          ))}
        </ul>

        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-accent cursor-pointer"
          >
            {expanded ? "Show less" : `Show ${item.bullets.length - VISIBLE_COUNT} more`}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <FaChevronDown size={11} />
            </motion.span>
          </button>
        )}
      </div>
    </motion.div>
  );
}
