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
  const drift = useTransform(scrollY, [0, 300], [0, 40]);

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden flex items-center">

      <div className="absolute inset-0 -z-20">
        <StarsBackground />
      </div>

      <motion.div
        style={{ y: drift }}
        className="
          absolute
          right-[-220px]
          top-1/2
          -translate-y-1/2
          w-[1000px]
          h-[1000px]
          pointer-events-none
        "
      >
        <EarthWireframe />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto w-full max-w-7xl px-8 z-10"
      >
        <div className="max-w-xl space-y-6">

          <span className="text-[11px] tracking-[0.45em] text-[var(--color-berry-blast)]">
            ORBIT NTNU RECRUITMENT
          </span>

          <h1
            className="
              text-[3.5rem]
              md:text-[5rem]
              font-semibold
              leading-[1.05]
              tracking-tight
              text-[var(--color-strong)]
            "
          >
            Join <br />
            Orbit NTNU <br />
          </h1>

          <p className="max-w-md text-[var(--color-charcoal-light)] leading-relaxed">
            Join Orbit NTNU and help design the next generation of
            satellites and space technology.
          </p>

          <button
            onClick={onApply}
            className="
              mt-4
              rounded-xl
              bg-[var(--color-cloud-white)]
              px-7
              py-3
              text-sm
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

        <div className="absolute bottom-6 left-8 flex gap-5 text-xl text-[var(--color-strong)]">

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