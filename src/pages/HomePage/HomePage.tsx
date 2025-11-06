import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Shared/Navbar";
import { useRouter } from "next/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn, fadeInUp, fadeOut } from "@/utils/loading/Animations";
import { useHomePageStore } from "@/stores/HomePageStore/useHomePageStore";
import EarthWithSat from "@/components/Three/EarthWithSat";
import { Footer } from "@/components/HomePage/Footer";

export default function HomePage() {
  const router = useRouter();

  const handleRouteToForm = () => {
    router.push("/Form");
  };
  const { hasPlayed, setHasPlayed } = useHomePageStore();
  const [showIntro, setShowIntro] = useState(!hasPlayed);
  const logoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showIntro]);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden ">
      <Navbar />
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <video
              src="/shared/introVideo.mp4"
              autoPlay
              muted
              playsInline
              onEnded={() => {
                setShowIntro(false);
                setHasPlayed(true);
              }}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 bg-black"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative flex min-h-screen flex-col justify-center items-cente overflow-hidden px-6 sm:px-4 md:px-16 sm:text-left">
        <motion.div variants={fadeOut} className="animate-background absolute inset-0 bg-cover bg-center opacity-70 bg-url('/shared/orbitsat.jpg')" style={{ backgroundImage: "url('/shared/orbitsat.jpg')" }}>
          <div className="absolute bottom-0 right-0 left-0 sm:right-10 sm:left-auto flex animate-bounce justify-center sm:justify-end items-center px-4">
            <span className="font-poppins mb-2 text-sm text-[var(--color-cloud-white)]">
              Scroll to see why you should apply
            </span>
          </div>
        </motion.div>

        <div className="relative z-10 max-w-2xl">
          <h2 className="animate-slideInUp mb-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-strong)]">
            Orbit Application Form
          </h2>
          <p className="animate-slideInLeft text-xs sm:text-base md:text-lg mb-4 text-[var(--color-cloud-white)]">
            Join Our Team! We're on the lookout for passionate individuals to
            fill several key roles. While we've highlighted our most
            sought-after positions below, we value diverse talents and
            interests. If you're passionate about a role not listed here, don't
            hesitate to apply. Your enthusiasm could be the perfect fit for
            Orbit NTNU!
          </p>
          <div className="text-center sm:text-left">
            <button
              onClick={handleRouteToForm}
              className="animate-button rounded-full bg-[var(--color-orange-sherbert)] px-4 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-[var(--color-dark-gray)] transition-colors duration-300 hover:bg-[var(--color-laser-lemon)]"
            >
              Proceed to apply
            </button>
          </div>
        </div>
      </section>

      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        className="relative flex flex-col md:flex-row min-h-screen"
      >
        <motion.div variants={fadeInUp} className="flex w-full items-center justify-center p-8 sm:p-10 md:w-1/2">
          <div className="max-w-lg text-center md:text-left">
            <h3 className="mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-strong)]">
              Why Join Orbit NTNU?
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-[var(--color-cloud-white)] md:text-xl">
              Orbit NTNU is a volunteer student organization dedicated to
              educating tomorrow’s space engineers. We design and build small
              satellites using in-house subsystems, pushing the boundaries of
              what is possible. By joining, you’ll gain hands-on experience in
              satellite development, from concept to launch.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-1 items-center justify-center p-8"
        >
          <div className="w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[36rem] lg:h-[36rem] flex items-center justify-center">
            <EarthWithSat />
          </div>
        </motion.div>
      </motion.section>
      <Footer />
    </div>
  );
}
