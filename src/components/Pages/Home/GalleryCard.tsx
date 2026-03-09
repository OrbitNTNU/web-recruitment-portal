"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type GalleryCardProps = {
  src: string;
  title: string;
  description: string;
};

export function GalleryCard({ src, title, description }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      whileHover={{ scale: 1.03 }}
      className="
        relative
        min-w-[320px] h-[420px]
        overflow-hidden
        rounded-xl
        border border-[var(--color-dark-gray)]
        bg-[var(--color-charcoal)]
      "
    >
      <Image
        src={src}
        alt={title}
        width={1200}
        height={800}
        quality={70}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-[var(--color-charcoal)]
          via-[rgba(0,0,0,0.25)]
          to-transparent
        "
      />

      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-lg font-light text-[var(--color-cloud-white)]">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-[var(--color-charcoal-light)]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}