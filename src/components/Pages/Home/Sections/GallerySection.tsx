"use client";

import { SOCIAL_IMAGES } from "@/components/Data/SocialImages";
import { GalleryCard } from "@/components/Pages/Home/GalleryCard";
import { motion } from "framer-motion";
import { SocialImages } from "@/constants/socialImages";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { DividedLine } from "@/components/Shared/DividedLine";

export const GallerySection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;

    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < maxScroll - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const cardWidth = container.firstElementChild?.clientWidth ?? 320;
    const gap = 32;

    const amount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });

    setTimeout(updateScrollState, 400);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState);

    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <section className="relative py-28 bg-[var(--color-charcoal)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-8 mb-16"
        >
          <div className="hidden md:block">
            <DividedLine
              direction="vertical"
              length={90}
              thickness={2}
              color="var(--color-berry-blast)"
              start={0}
              end={0.8}
            />
          </div>

          <div className="text-center max-w-xl">
            <span className="text-[10px] tracking-[0.45em] text-[var(--color-berry-blast)]">
              LIFE AT ORBIT
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-wide text-[var(--color-cloud-white)]">
              More Than Just Satellites
            </h2>

            <p className="mt-4 text-sm text-[var(--color-charcoal-light)] max-w-xl mx-auto">
              Orbit is not just about building satellites. It is about community,
              collaboration, and shared experiences.
            </p>
          </div>

          <div className="hidden md:block">
            <DividedLine
              direction="vertical"
              length={90}
              thickness={2}
              color="var(--color-berry-blast)"
              start={0.2}
              end={1}
            />
          </div>

        </motion.div>

        <div className="relative">

          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="
                absolute left-2 top-1/2 -translate-y-1/2 z-10
                text-[var(--color-cloud-white)]
                hover:text-[var(--color-sky-mint)]
                transition
              "
            >
              <FaChevronLeft size={22} />
            </button>
          )}

          <div
            ref={scrollRef}
            className="
              flex gap-8
              overflow-x-auto
              overflow-y-hidden
              touch-pan-x
              no-scrollbar
              scroll-smooth
              snap-x snap-mandatory
              pb-2
            "
          >
            {Object.entries(SocialImages).map(([key, value]) => {
              const img =
                SOCIAL_IMAGES[value as keyof typeof SOCIAL_IMAGES];

              return (
                <div
                  key={key}
                  className="
                    snap-center
                    min-w-full
                    sm:min-w-[320px]
                  "
                >
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
              className="
                absolute right-2 top-1/2 -translate-y-1/2 z-10
                text-[var(--color-cloud-white)]
                hover:text-[var(--color-sky-mint)]
                transition
              "
            >
              <FaChevronRight size={22} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};