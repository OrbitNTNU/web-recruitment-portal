"use client";

import { motion } from "framer-motion";
import { useVideoSection } from "@/hooks/useVideoSection";

export const OrbitVideoSection = () => {
  const { ref, videoRef, opacity, y, scale } = useVideoSection();

  return (
    <section
      ref={ref}
      className="relative h-[85vh] w-full overflow-hidden bg-[var(--color-charcoal)]"
    >

      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[60%] bg-gradient-to-r from-transparent via-[var(--color-charcoal-light)] to-transparent" />

      <motion.video
        ref={videoRef}
        src="/shared/video/Galla.mp4"
        muted
        loop
        playsInline
        preload="none"
        style={{ scale }}
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />

      <div className="absolute inset-0 bg-[var(--color-charcoal)]/70" />

      <div className="absolute top-0 h-40 w-full bg-gradient-to-b from-[var(--color-charcoal)] to-transparent" />
      <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-[var(--color-charcoal)] to-transparent" />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 flex h-full items-center justify-center"
      >
        <div className="max-w-xl px-6 md:px-8 text-center">
          <span className="text-[10px] tracking-[0.45em] text-[var(--color-charcoal-light)]">
            ORBIT NTNU
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-light tracking-wide text-[var(--color-cloud-white)]">
            Building satellites.
            <br />
            Training space talent.
          </h2>
        </div>
      </motion.div>
    </section>
  );
};
