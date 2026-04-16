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
      className="
        relative
        w-full h-[460px]
        overflow-hidden
        bg-[var(--color-charcoal)]
        rounded-sm
      "
    >
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={title}
          width={1200}
          height={800}
          quality={50}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          className="
           mr-1
            absolute inset-0
            bg-gradient-to-t
            from-[var(--color-charcoal)]
          "
        />

        <div className="absolute bottom-6 left-16 right-6">
          <h3 className="text-lg font-light text-[var(--color-cloud-white)]">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-[var(--color-charcoal-light)]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}