import { motion } from "framer-motion";
import EarthWithSat from "@/components/Three/EarthWithSat";

export function OrbitSection() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <motion.div
        className="flex w-full md:w-1/2 items-center justify-center p-10"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-lg">
          <span className="mb-2 inline-block text-xs tracking-widest text-[var(--color-laser-lemon)]">
            ◆ WHY ORBIT
          </span>

          <h3 className="mb-6 text-3xl font-bold text-[var(--color-strong)]">
            Why Join Orbit NTNU?
          </h3>

          <p className="text-lg text-[var(--color-cloud-white)] leading-relaxed">
            Orbit NTNU is a volunteer student organization dedicated to
            educating tomorrow’s space engineers. We design and build
            satellites in-house, giving members hands-on experience from
            concept to launch.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-1 items-center justify-center p-10"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="w-80 h-80 md:w-[28rem] md:h-[28rem]">
          <EarthWithSat />
        </div>
      </motion.div>
    </section>
  );
}
