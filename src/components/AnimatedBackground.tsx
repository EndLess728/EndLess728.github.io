"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function AnimatedBackground({ edgeFade = false }: { edgeFade?: boolean }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 50, damping: 20, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const blob1X = useTransform(smoothX, [-1, 1], [-30, 30]);
  const blob1Y = useTransform(smoothY, [-1, 1], [-20, 20]);
  const blob2X = useTransform(smoothX, [-1, 1], [25, -25]);
  const blob2Y = useTransform(smoothY, [-1, 1], [20, -20]);
  const blob3X = useTransform(smoothX, [-1, 1], [-15, 15]);
  const blob3Y = useTransform(smoothY, [-1, 1], [15, -15]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${
        edgeFade
          ? "[mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]"
          : ""
      }`}
    >
      <div
        className={`bg-grid absolute inset-0 opacity-[0.4] ${
          edgeFade
            ? "[mask-image:radial-gradient(ellipse_70%_85%_at_50%_50%,#000_40%,transparent_100%)]"
            : "[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]"
        }`}
      />
      <motion.div
        style={{ x: blob1X, y: blob1Y }}
        className="animate-blob absolute -top-32 left-[10%] h-96 w-96 rounded-full bg-accent/30 blur-[110px]"
      />
      <motion.div
        style={{ x: blob2X, y: blob2Y }}
        className="animate-blob absolute top-1/3 right-[5%] h-[26rem] w-[26rem] rounded-full bg-accent-2/25 blur-[120px] [animation-delay:-6s]"
      />
      <motion.div
        style={{ x: blob3X, y: blob3Y }}
        className="animate-blob absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-accent-3/20 blur-[100px] [animation-delay:-12s]"
      />
    </div>
  );
}
