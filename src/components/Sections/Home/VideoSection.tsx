"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Video = {
  id: string;
  src: string;
  title: string;
};

const VIDEOS: Video[] = [
  { id: "galla", src: "/shared/Galla.mp4", title: "Galla Launch" },
  { id: "gall 2", src: "/shared/Integration.mp4", title: "gal2" },
  { id: "gall 3", src: "/shared/Testing.mp4", title: "gal3" },
];

function VideoThumbnail({ src }: { src: string }) {
  return (
    <video
      src={src}
      muted
      playsInline
      preload="metadata"
      onLoadedMetadata={(e) => {
        e.currentTarget.currentTime = 0.2;
        e.currentTarget.pause();
      }}
      className="h-24 w-full object-cover"
    />
  );
}

export function VideoSection() {
  const [active, setActive] = useState<Video>(() => {
    const first = VIDEOS[0];
    if (!first) throw new Error("VIDEOS array must not be empty");
    return first;
  });

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="absolute top-8 left-8 z-20">
        <span className="block text-[10px] tracking-[0.35em] text-[var(--color-laser-lemon)]">
          ◆ ORBIT MEDIA ARCHIVE
        </span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center gap-8 px-6">
        <div className="flex-1">
          <div className="relative overflow-hidden rounded-xl">

            <AnimatePresence mode="wait">
              <motion.video
                key={active.id}
                src={active.src}
                autoPlay
                muted
                loop
                playsInline
                className="h-[28rem] md:h-[36rem] w-full object-cover"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-2 left-2 h-4 w-4 border-l border-t border-white/30" />
              <div className="absolute top-2 right-2 h-4 w-4 border-r border-t border-white/30" />
              <div className="absolute bottom-2 left-2 h-4 w-4 border-l border-b border-white/30" />
              <div className="absolute bottom-2 right-2 h-4 w-4 border-r border-b border-white/30" />
            </div>
          </div>
        </div>

        <div className="flex w-40 md:w-52 flex-col gap-4">
          <span className="text-[10px] tracking-[0.3em] text-white/60">
            SELECT CLIP
          </span>

          {VIDEOS.map((video) => (
            <motion.button
              key={video.id}
              onClick={() => setActive(video)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`relative overflow-hidden rounded-lg text-left ring-1 ${
                video.id === active.id
                  ? "ring-white/40"
                  : "ring-white/10"
              }`}
            >
              <VideoThumbnail src={video.src} />

              <div
                className={`absolute inset-0 ${
                  video.id === active.id ? "" : "bg-black/50"
                }`}
              />

              <span className="absolute bottom-2 left-2 text-xs tracking-widest text-white/70">
                {video.title}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
