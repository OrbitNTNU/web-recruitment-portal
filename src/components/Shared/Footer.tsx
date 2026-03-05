import { FaTiktok, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import AltBackground from "./AltBackground";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[var(--color-charcoal)] border-t border-white/10 mt-32 overflow-hidden">

    <AltBackground />

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <img
              src="/logos/orbit/orbitLogo.png"
              alt="Orbit"
              className="h-14 w-auto opacity-90 hover:opacity-100 transition"
            />

            <p className="text-[var(--color-charcoal-light)] leading-relaxed max-w-xs">
              Orbit is a student organisation exploring innovation, technology
              and space. We build projects, collaborate with industry, and push
              the limits of what students can create.
            </p>

            <div className="flex gap-4 pt-2">
              <a href="https://www.tiktok.com/@orbitntnu2025" className="footer-icon">
                <FaTiktok />
              </a>
              <a href="https://www.instagram.com/orbitntnu/" className="footer-icon">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/orbitntnu" className="footer-icon">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/company/orbit-ntnu" className="footer-icon">
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
            <h3 className="footer-title">Navigation</h3>

            <ul className="space-y-3">
              <li><a href="https://orbitntnu.com/team" className="footer-link underline-emerald">Teams</a></li>
              <li><a href="https://orbitntnu.com/about" className="footer-link underline-pink">About</a></li>
              <li><a href="https://orbitntnu.com/sponsors" className="footer-link underline-blue">Sponsors</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="footer-title">Contact</h3>

            <p className="text-[var(--color-charcoal-light)]">
            O.S Bragstad Plass 2B, Elektro D
            7034, Trondheim
            Org.Nr 999 171 583
            </p>

            <p className="text-[var(--color-charcoal-light)]">
              contact@orbitntnu.com
            </p>
          </motion.div>

        </div>

        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between gap-4 text-[var(--color-muted)] text-sm">
          <span>© {new Date().getFullYear()} Orbit NTNU</span>
          <span className="opacity-70">To create the space talent of tomorrow</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;