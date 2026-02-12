import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useFunFactStore } from "@/stores/useFunFactStore";
import { useRouter } from "next/navigation";
import { routeTo } from "@/utils/routes";
import { Routes } from "@/consts/routes";
import { motion } from "framer-motion";

const Navbar = () => {
  const { currentFact, setRandomFact } = useFunFactStore();
  const [hidden, setHidden] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomFact();
    }, 5000);
    return () => clearInterval(interval);
  }, [setRandomFact]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false); 
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed left-0 top-0 z-50 w-full bg-transparent"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        <div className="flex items-center">
          <div
            onClick={() => routeTo(router, Routes.HOME)}
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/logos/orbitTextLogo.png"
              alt="Orbit Logo"
              width={80}
              height={30}
              priority
            />
          </div>
        </div>

        <div className="flex items-center">
          <span className="hidden max-w-xs truncate font-bold text-[var(--color-orange-sherbert)] md:block">
            {currentFact || "Build cubesats with us!"}
          </span>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;
