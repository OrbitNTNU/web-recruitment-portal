"use client";

import { SOCIAL_IMAGES } from "@/components/Data/SocialImages";
import { GalleryCard } from "@/components/Pages/Home/GalleryCard";
import { motion } from "framer-motion";
import { SocialImages } from "@/constants/socialImages";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useGalleryScroll } from "@/hooks/useGalleryScroll";
import StarsBackground from "@/components/Canvas/StarsBackground";

export const GallerySection = () => {
  const { scrollRef, canScrollLeft, canScrollRight, scroll } = useGalleryScroll();

  return (
    <section className="relative py-28">
      <div className="absolute inset-0">
        <StarsBackground />
      </div>
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="flex items-start justify-left gap-8"
        >
          <div className="text-left">
            <h2 className="mt-5 text-3xl font-light tracking-wide text-[var(--color-cloud-white)] md:text-4xl">
              More Than Just Satellites
            </h2>

            <p className="mt-3 max-w-xs text-xs leading-relaxed text-[var(--color-charcoal-light)]/45">
              Orbit is not just about building satellites. It is about community,
              collaboration, and shared experiences.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative">
        {/* Left and right edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[var(--color-charcoal)] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[var(--color-charcoal)] to-transparent z-10" />

        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-[var(--color-cloud-white)] hover:text-[var(--color-sky-mint)] transition"
          >
            <FaChevronLeft size={22} />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex overflow-x-auto overflow-y-hidden touch-pan-x no-scrollbar scroll-smooth snap-x snap-mandatory pb-2"
        >
          {Object.entries(SocialImages).map(([key, value]) => {
            const img = SOCIAL_IMAGES[value as keyof typeof SOCIAL_IMAGES];
            return (
              <div key={key} className="snap-center min-w-full overflow-visible">
                <GalleryCard
                  src={img.src}
                  title={img.title}
                  description={img.description}
                />
              </div>
            );
          })}
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-[var(--color-cloud-white)] hover:text-[var(--color-sky-mint)] transition"
          >
            <FaChevronRight size={22} />
          </button>
        )}
      </div>
    </section>
  );
};