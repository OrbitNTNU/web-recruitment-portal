"use client";

import { motion } from "framer-motion";

type Props = {
  src: string;
  title: string;
  description: string;
};

export function GalleryCard({ src, title, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="relative min-w-[320px] h-[420px] rounded-xl overflow-hidden border border-white/10"
    >
      <img
        src={src}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-lg font-light text-white">{title}</h3>

        <p className="mt-2 text-sm text-white/70 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}