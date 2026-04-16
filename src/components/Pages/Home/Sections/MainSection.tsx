"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import StarsBackground from "@/components/Canvas/StarsBackground";
import dynamic from "next/dynamic";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const EarthWireframe = dynamic(
  () => import("@/components/Canvas/Earth"),
  { ssr: false }
);

export const HeroSection = ({ onApply }: { onApply: () => void }) => {
  const { scrollY } = useScroll();

  const fade = useTransform(scrollY, [0, 300], [1, 0]);
  const drift = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section className="relative min-h-[91vh] w-full overflow-hidden flex items-center">

      <div className="absolute inset-0">
        <StarsBackground />
      </div>
      
      <motion.div
        style={{ y: drift }}
        className="
          absolute
          right-[-60vw] md:right-[-35vw] lg:right-[-220px]
          top-[65%] md:top-[55%] lg:top-1/4
          -translate-y-1/2
          w-[180vw] md:w-[120vw] lg:w-[1200px]
          h-[180vw] md:h-[120vw] lg:h-[1200px]
          pointer-events-none
        "
      >
        <EarthWireframe />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
          px-6 sm:px-8 lg:px-12
          z-10
        "
      >
        <div className="max-w-xl space-y-6">

          <span className="text-[10px] sm:text-[11px] tracking-[0.45em] text-[var(--color-berry-blast)]">
            ORBIT NTNU RECRUITMENT
          </span>

          <h1
            className="
              text-[2.5rem]
              sm:text-[3.5rem]
              md:text-[4.5rem]
              lg:text-[5rem]
              font-semibold
              leading-[1.05]
              tracking-tight
              text-[var(--color-strong)]
            "
          >
            Join <br />
            Orbit NTNU
          </h1>

          <p className="max-w-md text-sm sm:text-base text-[var(--color-charcoal-light)] leading-relaxed">
            Join Orbit NTNU and help design the next generation of
            satellites and space technology.
          </p>

          <button
            onClick={onApply}
            className="
              mt-4
              rounded-xl
              bg-[var(--color-cloud-white)]
              px-6 py-3
              text-xs sm:text-sm
              font-semibold
              tracking-[0.2em]
              text-[var(--color-charcoal)]
              transition
              hover:brightness-110
            "
          >
            APPLY
          </button>
        </div>
      </motion.div>

      <div
        className="
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2
          md:left-8 md:translate-x-0
          flex gap-5
          text-lg
          text-[var(--color-strong)]
        "
      >
        <a
          href="https://www.instagram.com/orbitntnu/"
          className="hover:opacity-70 transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://twitter.com/orbitntnu"
          className="hover:opacity-70 transition"
        >
          <FaTwitter />
        </a>

        <a
          href="https://www.linkedin.com/company/orbit-ntnu"
          className="hover:opacity-70 transition"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </section>
  );
};