import React, { useEffect, useState } from "react";
import Navbar from "@/components/Shared/Navbar";
import { useRouter } from "next/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { AnimatePresence, motion } from "framer-motion";
import { Footer } from "@/components/Home/Footer";
import HyperspaceIntro from "@/components/Canvas/HyperSpaceIntro";
import { HeroSection } from "@/components/Sections/Home/HeroSection";
import { VideoSection } from "@/components/Sections/Home/VideoSection";
import { OrbitSection } from "@/components/Sections/Home/OrbitSection";

export default function HomePage() {
  const router = useRouter();

  const handleRouteToForm = () => {
    router.push("/Form");
  };

  const [showWarp, setShowWarp] = useState(true);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWarp(false);
      setShowPage(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <AnimatePresence>
        {showWarp && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HyperspaceIntro label="HOME" />
          </motion.div>
        )}
      </AnimatePresence>

      {showPage && (
        <div>
          <Navbar />
          <HeroSection onApply={handleRouteToForm} />
          <OrbitSection />
          <VideoSection />
          <Footer />
        </div>
      )}
    </div>
  );
}

