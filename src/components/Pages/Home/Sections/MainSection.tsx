import { motion, useScroll, useTransform } from "framer-motion";

export const HeroSection = ({ onApply }: { onApply: () => void }) => {
  const { scrollY } = useScroll();

  const fadeOut = useTransform(scrollY, [0, 300], [1, 0]);
  const driftDown = useTransform(scrollY, [0, 300], [0, 40]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-8">

      <div className="mx-auto w-full max-w-[1400px]">

        <motion.div
          style={{ opacity: fadeOut, y: driftDown }}
          className="mx-auto max-w-2xl text-center"
        >

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
              text-[var(--color-strong)]
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
              text-sm md:text-base
              leading-relaxed
              text-white/70
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
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="
              rounded-full
              bg-[var(--color-orange-sherbert)]
              px-9 py-3
              text-xs tracking-[0.35em]
              font-semibold
              text-[var(--color-dark-gray)]
              transition
            "
          >
            INITIATE APPLICATION
          </motion.button>

        </motion.div>

      </div>
      <motion.div
        style={{ opacity: fadeOut, y: driftDown }}
        className="absolute bottom-5 text-white/50 animate-bounce"
      >
        <span className="text-[10px] tracking-[0.2em] text-white/60e">
          SCROLL TO SEE WHY YOU SHOULD APPLY
        </span>
      </motion.div>

    </section>
  );
}