import { motion } from "framer-motion"
import Image from "next/image";
import { container, fadeIn, fadeInUp } from "@/utils/animations";

export const Footer = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className="relative bg-[var(--color-dark-gray)] text-[var(--color-cream)]"
        >
            <div className="mx-auto max-w-8xl px-6 sm:px-10 py-12 sm:py-16">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
                    <motion.div variants={fadeInUp} className="space-y-4">
                        <Image
                            src="/logos/orbitTextlogo.png"
                            alt="Orbit Logo"
                            width={75}
                            height={75}
                        />
                        <p className="text-sm opacity-75 leading-relaxed">
                            Orbit NTNU is a student organization at the Norwegian University
                            of Science and Technology (NTNU) dedicated to designing,
                            building, and launching small satellites.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li>
                                <a href="https://orbitntnu.com/about" className="hover:underline hover:opacity-100">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="https://orbitntnu.com/teams" className="hover:underline hover:opacity-100">
                                    Teams
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <h4 className="mb-4 text-lg font-semibold">Our Sponsors</h4>
                        <div className="flex flex-wrap items-center gap-4">
                            {[
                                "/logos/kongsberg.png",
                                "/logos/norsk_romsenter.png",
                                "/logos/andoya_space.png",
                            ].map((src, i) => (
                                <div key={i} className="opacity-70">
                                    <motion.img
                                        src={src}
                                        alt="Sponsor Logo"
                                        width={75}
                                        height={75}
                                    />
                                </div>
                            ))}
                            <a href="https://orbitntnu.com/sponsors" className="hover:underline hover:opacity-100">
                                +++
                            </a>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <h4 className="mb-4 text-lg font-semibold">Stay Connected</h4>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                            {[
                                { href: "https://x.com/orbit_ntnu", icon: "fa-tiktok" },
                                { href: "https://www.tiktok.com/@orbitntnu2025", icon: "fa-twitter" },
                                { href: "https://www.linkedin.com/company/orbit-ntnu", icon: "fa-linkedin" },
                                { href: "https://www.instagram.com/orbitntnu/", icon: "fa-instagram" },
                                { href: "https://www.instagram.com/orbitntnu/", icon: "fa-facebook" },
                            ].map(({ href, icon }, i) => (
                                <a key={i} href={href} className="transition-transform hover:scale-110">
                                    <i className={`fa-brands ${icon} text-2xl`} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div className="border-[var(--color-cream)]/30 my-10 border-t" />

                <motion.div variants={container} viewport={{ once: true }} className="flex flex-col items-center justify-center gap-2 text-sm opacity-70 md:flex-row md:justify-between">
                    <motion.p variants={fadeInUp}>© {new Date().getFullYear()} Orbit. All rights reserved.</motion.p>
                    <motion.p variants={fadeInUp}>Contact - contact@orbitntnu.com</motion.p>
                    <motion.p variants={fadeInUp}>Search Orbit NTNU now!</motion.p>
                </motion.div>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </motion.section>
    )
}
