import { FaTiktok, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import AltBackground from "@/components/Shared/AltBackground";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[var(--color-charcoal)] border-t border-[var(--color-dark-gray)] mt-8 overflow-hidden">
      <AltBackground />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <Image
              src="/logos/orbit/orbitLogo.png"
              alt="Orbit"
              width={56}
              height={56}
              className="h-14 w-auto opacity-90 hover:opacity-100 transition"
            />

            <p className="text-[var(--color-charcoal-light)] leading-relaxed max-w-xs">
              Orbit is a student organisation exploring innovation, technology
              and space. We build projects, collaborate with industry, and push
              the limits of what students can create.
            </p>

            <div className="flex gap-4 pt-2 text-[var(--color-charcoal-light)]">
              <a href="https://www.tiktok.com/@orbitntnu2025" className="footer-icon hover:text-[var(--color-cloud-white)] transition">
                <FaTiktok />
              </a>
              <a href="https://www.instagram.com/orbitntnu/" className="footer-icon hover:text-[var(--color-cloud-white)] transition">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/orbitntnu" className="footer-icon hover:text-[var(--color-cloud-white)] transition">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/company/orbit-ntnu" className="footer-icon hover:text-[var(--color-cloud-white)] transition">
                <FaLinkedinIn />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="footer-title text-[var(--color-cloud-white)]">Navigation</h3>

            <ul className="space-y-3">
              <li>
                <a href="https://orbitntnu.com/team" className="footer-link underline-emerald">
                  Teams
                </a>
              </li>
              <li>
                <a href="https://orbitntnu.com/about" className="footer-link underline-pink">
                  About
                </a>
              </li>
              <li>
                <a href="https://orbitntnu.com/sponsors" className="footer-link underline-blue">
                  Sponsors
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="footer-title text-[var(--color-cloud-white)]">Contact</h3>

            <p className="text-[var(--color-charcoal-light)] leading-relaxed">
              O.S Bragstad Plass 2B, Elektro D<br />
              7034 Trondheim<br />
              Org.Nr 999 171 583
            </p>

            <p className="text-[var(--color-charcoal-light)]">
              contact@orbitntnu.com
            </p>
          </motion.div>

        </div>

        <div className="border-t border-[var(--color-dark-gray)] mt-14 pt-6 flex flex-col md:flex-row justify-between gap-4 text-[var(--color-muted)] text-sm">
          <span>© {new Date().getFullYear()} Orbit NTNU</span>
          <span className="opacity-70">To create the space talent of tomorrow</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;