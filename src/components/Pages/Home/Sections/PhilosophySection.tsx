"use client";

import { motion } from "framer-motion";
import { DividedLine } from "@/components/Shared/DividedLine";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const PhilosophySection = () => {
  return (
    <section className="relative pt-12 md:pt-20 pb-16 md:pb-36 bg-[var(--color-charcoal)]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="text-center mb-6 md:mb-10"
        >
          <span className="text-[10px] tracking-[0.45em] text-[var(--color-charcoal-light)]">
            OUR GOAL
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-wide text-[var(--color-cloud-white)]">
            To create the space talent of tomorrow
          </h2>
        </motion.div>

        <div className="flex justify-center mb-6 md:mb-10">
          <div className="hidden md:block">
            <DividedLine direction="vertical" length={50} thickness={3} color="var(--color-charcoal-light)" />
          </div>
          <div className="md:hidden">
            <DividedLine direction="vertical" length={25} thickness={3} color="var(--color-charcoal-light)" />
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="text-center mb-6 md:mb-10 max-w-xl mx-auto"
        >
          <span className="text-[10px] tracking-[0.45em] text-[var(--color-laser-lemon)]">
            MISSION
          </span>

          <p className="mt-4 text-base text-[var(--color-charcoal-light)] leading-relaxed">
            We create meaningful learning experiences through real satellite
            missions and close team collaboration.
          </p>
        </motion.div>


        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.15 }}
          className="grid md:grid-cols-3 gap-4 md:gap-10 text-center"
        >

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="hidden md:block">
                  <DividedLine direction="vertical" length={240} thickness={3} color="var(--color-laser-lemon)" />
                </div>
                <div className="md:hidden">
                  <DividedLine direction="vertical" length={60} thickness={3} color="var(--color-laser-lemon)" />
                </div>
              </div>

              <h3 className="mb-2 text-lg font-light text-[var(--color-cloud-white)]">
                Learning
              </h3>

              <p className="text-[var(--color-charcoal-light)] text-sm leading-relaxed">
                We believe in learning by doing through responsibility
                and real engineering projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="hidden md:block">
                  <DividedLine direction="vertical" length={240} thickness={3} color="var(--color-laser-lemon)" />
                </div>
                <div className="md:hidden">
                  <DividedLine direction="vertical" length={60} thickness={3} color="var(--color-laser-lemon)" />
                </div>
              </div>

              <h3 className="mb-2 text-lg font-light text-[var(--color-cloud-white)]">
                Curiosity
              </h3>

              <p className="text-[var(--color-charcoal-light)] text-sm leading-relaxed">
                We question how things work and explore new ideas to
                discover better solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="hidden md:block">
                  <DividedLine direction="vertical" length={240} thickness={3} color="var(--color-laser-lemon)" />
                </div>
                <div className="md:hidden">
                  <DividedLine direction="vertical" length={60} thickness={3} color="var(--color-laser-lemon)" />
                </div>
              </div>

              <h3 className="mb-2 text-lg font-light text-[var(--color-cloud-white)]">
                Ambition
              </h3>

              <p className="text-[var(--color-charcoal-light)] text-sm leading-relaxed">
                We set high standards and take responsibility to deliver
                high-quality work.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};