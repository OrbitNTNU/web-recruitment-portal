"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function DividedLine({
  direction = "vertical",
  length = 120,
  color = "var(--color-sky-mint)",
  thickness = 2,
  start = 0,
  end = 1,
  scrollOffset = ["start 95%", "start 50%"],
}: {
  direction?: "vertical" | "horizontal";
  length?: number;
  color?: string;
  thickness?: number;
  start?: number;
  end?: number;
  scrollOffset?: NonNullable<Parameters<typeof useScroll>[0]>["offset"];
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: scrollOffset,
  });

  const progress = useTransform(scrollYProgress, [start, end], [0, 1]);
  const scale = useTransform(progress, [0, 1], [0, 1]);

  return (
    <div
      ref={ref}
      className="flex justify-center items-center"
      style={{
        width: direction === "horizontal" ? length : thickness,
        height: direction === "vertical" ? length : thickness,
      }}
    >
      <motion.div
        style={{
          backgroundColor: color,
          scaleX: direction === "horizontal" ? scale : 1,
          scaleY: direction === "vertical" ? scale : 1,
          transformOrigin:
            direction === "horizontal" ? "left center" : "top center",
          width: direction === "horizontal" ? "100%" : thickness,
          height: direction === "vertical" ? "100%" : thickness,
        }}
        className="rounded-full"
      />
    </div>
  );
}