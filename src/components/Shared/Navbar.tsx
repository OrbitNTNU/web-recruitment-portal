"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { routeTo } from "@/utils/routes";
import { Routes } from "@/constants/routes";
import { motion } from "framer-motion";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const router = useRouter();

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
      className="sticky top-0 z-50 w-full bg-transparent"
    >
      <div className="relative mx-auto flex items-center justify-center px-6 py-4">
        <div
          onClick={() => routeTo(router, Routes.HOME)}
          className="cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/logos/orbit/orbitTextLogo.png"
            alt="Orbit Logo"
            width={90}
            height={32}
            priority
          />
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;