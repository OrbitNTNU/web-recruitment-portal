"use client";

import { motion } from "framer-motion";

type Video = {
  id: string;
  src: string;
  title: string;
};

const VIDEOS: Video[] = [
  {
    id: "galla",
    src: "/shared/Galla.mp4",
    title: "Orbit Launch Event",
  },
];

export function OrbitSection() {
  const video = VIDEOS[0];

  if (!video) {
    return null;
  }

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <motion.div
        className="flex w-full md:w-1/2 items-center justify-center p-10"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-lg">
          <span className="mb-2 inline-block text-xs tracking-widest text-[var(--color-laser-lemon)]">
            WHY ORBIT
          </span>

          <h3 className="mb-6 text-3xl font-bold text-[var(--color-strong)]">
            Why Join Orbit NTNU?
          </h3>

          <p className="text-lg text-[var(--color-cloud-white)] leading-relaxed">
            Orbit NTNU is a volunteer student organization dedicated to
            educating tomorrow’s space engineers. We design and build
            satellites in-house, giving members hands-on experience from
            concept to launch.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-1 items-center justify-center p-10"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="relative w-full max-w-xl">

          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md">

            <video
              src={video.src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-[22rem] md:h-[28rem] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-5 left-5">
              <span className="text-sm tracking-widest text-white/80">
                {video.title}
              </span>
            </div>

            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-2 left-2 h-4 w-4 border-l border-t border-white/30" />
              <div className="absolute top-2 right-2 h-4 w-4 border-r border-t border-white/30" />
              <div className="absolute bottom-2 left-2 h-4 w-4 border-l border-b border-white/30" />
              <div className="absolute bottom-2 right-2 h-4 w-4 border-r border-b border-white/30" />
            </div>

          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

    </section>
  );
}