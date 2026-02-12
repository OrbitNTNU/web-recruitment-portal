import StarsBackground from "@/components/Canvas/StarsBackground";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection({ onApply }: { onApply: () => void }) {
  const { scrollY } = useScroll();

  const fadeOut = useTransform(scrollY, [0, 300], [1, 0]);
  const driftDown = useTransform(scrollY, [0, 300], [0, 30]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <StarsBackground />

      <motion.div
        style={{ opacity: fadeOut, y: driftDown }}
        className="relative z-10 max-w-3xl text-center"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mb-4 inline-block text-[11px] tracking-[0.4em] text-[var(--color-laser-lemon)]"
        >
          ◆ WELCOME TO ORBIT NTNU RECRUITMENT PORTAL
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="
            mb-6
            text-4xl sm:text-5xl md:text-6xl
            font-extrabold
            tracking-wide
            text-[var(--color-strong)]
            drop-shadow-[0_0_12px_rgba(255,255,255,0.18)]
          "
        >
          ORBIT APPLICATION
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="
            mx-auto mb-8 max-w-2xl
            text-sm sm:text-base md:text-lg
            leading-relaxed
            tracking-wide
            text-[var(--color-cloud-white)]
            text-white/80
          "
        >
        BLBALBALBABA
          <br />
          BLABLABLABLABLAB BLABLABLABABA BLABLABLABLAA.
        </motion.p>

        <motion.button
          onClick={onApply}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="
            relative overflow-hidden rounded-full
            bg-[var(--color-orange-sherbert)]
            px-10 py-4
            text-sm tracking-[0.25em]
            font-semibold
            text-[var(--color-dark-gray)]
          "
        >
          <motion.span className="absolute inset-0 bg-white/20" />
          <span className="relative z-10">
            INITIATE APPLICATION
          </span>
        </motion.button>
      </motion.div>

      <motion.div
        style={{ opacity: fadeOut, y: driftDown }}
        className="
          pointer-events-none absolute bottom-6
          flex flex-col items-center
          tracking-[0.35em]
          text-[10px]
          text-white/60
        "
      >
        <span className="mb-1 animate-bounce">
          SCROLL
        </span>
      </motion.div>
    </section>
  );
}
