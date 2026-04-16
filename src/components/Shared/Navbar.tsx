"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useNavbar } from "@/hooks/useNavbar";

const Navbar = () => {
  const { hidden } = useNavbar();

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 z-50 flex w-full justify-center"
    >
      <div className="flex items-center gap-12 px-10 py-4">
        <Link
          href="/#teams"
          className="text-xs tracking-[0.25em] text-[var(--color-charcoal-light)] transition-colors duration-200 hover:text-[var(--color-cloud-white)]"
        >
          TEAMS
        </Link>

        <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="transition-transform duration-300 hover:scale-105">
          <Image
            src="/logos/orbit/orbitTextLogo.png"
            alt="Orbit Logo"
            width={80}
            height={28}
            priority
          />
        </Link>

        <Link
          href="/Form"
          className="text-xs tracking-[0.25em] text-[var(--color-charcoal-light)] transition-colors duration-200 hover:text-[var(--color-cloud-white)]"
        >
          APPLY
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
