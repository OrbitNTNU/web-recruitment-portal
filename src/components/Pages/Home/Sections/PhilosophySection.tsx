"use client";

import { motion } from "framer-motion";
import { DividedLine } from "@/components/Shared/DividedLine";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const PhilosophySection = () => {
  return (
    <section className="relative pt-20 pb-36 bg-[var(--color-charcoal)]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <span className="text-[10px] tracking-[0.45em] text-[var(--color-sky-mint)]">
            OUR GOAL
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-wide text-[var(--color-cloud-white)]">
            To create the space talent of tomorrow
          </h2>
        </motion.div>

        <div className="flex justify-center mb-10">
          <DividedLine
            direction="vertical"
            length={80}
            thickness={3}
            color="var(--color-sky-mint)"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="text-center mb-10 max-w-xl mx-auto"
        >
          <span className="text-[10px] tracking-[0.45em] text-[var(--color-laser-lemon)]">
            MISSION
          </span>

          <p className="mt-4 text-base text-[var(--color-charcoal-light)] leading-relaxed">
            We create meaningful learning experiences through real satellite
            missions and close team collaboration.
          </p>
        </motion.div>

        <div className="flex justify-center mb-6">
          <DividedLine
            direction="vertical"
            length={50}
            thickness={3}
            color="var(--color-laser-lemon)"
          />
        </div>

        <div className="flex justify-center mb-12">
          <DividedLine
            direction="horizontal"
            length={420}
            thickness={3}
            color="var(--color-berry-blast)"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.15 }}
          className="grid md:grid-cols-3 gap-10 text-center"
        >

          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <h3 className="mb-2 text-lg font-light text-[var(--color-cloud-white)]">
              Learning
            </h3>

            <p className="text-[var(--color-charcoal-light)] text-sm leading-relaxed">
              We believe in learning by doing through responsibility
              and real engineering projects.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <h3 className="mb-2 text-lg font-light text-[var(--color-cloud-white)]">
              Curiosity
            </h3>

            <p className="text-[var(--color-charcoal-light)] text-sm leading-relaxed">
              We question how things work and explore new ideas to
              discover better solutions.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <h3 className="mb-2 text-lg font-light text-[var(--color-cloud-white)]">
              Ambition
            </h3>

            <p className="text-[var(--color-charcoal-light)] text-sm leading-relaxed">
              We set high standards and take responsibility to deliver
              high-quality work.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};