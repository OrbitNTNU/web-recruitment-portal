import StarsBackground from "@/components/Canvas/StarsBackground";
import { motion, useScroll, useTransform } from "framer-motion";

export const HeroSection = ({ onApply }: { onApply: () => void }) => {
  const { scrollY } = useScroll();

  const fadeOut = useTransform(scrollY, [0, 300], [1, 0]);
  const driftDown = useTransform(scrollY, [0, 300], [0, 40]);

  return (
    <section className="relative flex min-h-[95vh] items-center justify-center overflow-visible px-6 md:px-8">

      <div className="absolute inset-0 -top-24 z-0 pointer-events-none">
        <StarsBackground />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl -translate-y-12 text-center">
        <motion.div style={{ opacity: fadeOut, y: driftDown }}>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-5 inline-block text-[11px] tracking-[0.45em] text-[var(--color-laser-lemon)]"
          >
            ORBIT NTNU RECRUITMENT
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="
              mb-6
              text-4xl sm:text-5xl md:text-[3.2rem]
              font-semibold
              tracking-[0.06em]
              text-[var(--color-cloud-white)]
            "
          >
            ORBIT APPLICATION
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="
              mx-auto mb-10 max-w-xl
              text-lg md:text-base
              leading-relaxed
              text-[var(--color-charcoal-light)]
            "
          >
            Join us and help design the next generation of satellites.
            Apply for an open role or reach out if your interests align
            with Orbit NTNU.
          </motion.p>

          <motion.button
            onClick={onApply}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            className="
              rounded-xl
              bg-[var(--color-orange-sherbert)]
              px-9 py-3
              text-sm tracking-[0.2em]
              font-bold
              text-[var(--color-dark-gray)]
              transition
              hover:brightness-110
            "
          >
            APPLY HERE
          </motion.button>

        </motion.div>
      </div>

      <motion.div
        style={{ opacity: fadeOut, y: driftDown }}
        className="absolute bottom-10 animate-bounce text-[var(--color-charcoal-light)]"
      >
        <span className="text-[10px] tracking-[0.2em]">
          SCROLL TO SEE WHY YOU SHOULD APPLY
        </span>
      </motion.div>

    </section>
  );
};