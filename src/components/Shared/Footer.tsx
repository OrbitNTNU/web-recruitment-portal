import { motion } from "framer-motion";
import Image from "next/image";

export const Footer = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative bg-[var(--color-night-sky)] text-[var(--color-cloud-white)] overflow-hidden"
        >
            <div className="border-b border-white/10 bg-[var(--color-moonlight)]">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-[11px] tracking-[0.3em]">
                    <span className="opacity-70">ORBIT // SYSTEM INTERFACE</span>
                    <span className="text-[var(--color-emerald-fizz)] animate-pulse">
                        ONLINE
                    </span>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="border border-white/10 bg-black/20 p-6"
                    >
                        <div className="mb-4 flex items-center gap-4">
                            <Image
                                src="/logos/orbitTextLogo.png"
                                alt="Orbit Logo"
                                width={80}
                                height={80}
                            />
                        </div>

                        <p className="text-sm leading-relaxed opacity-80">
                            Orbit NTNU is a student organization at NTNU dedicated to designing,
                            building, and launching small satellites. From concept to orbit, we
                            train the next generation of space engineers.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="border border-white/10 bg-black/20 p-6"
                    >
                        <h4 className="mb-6 text-xs tracking-[0.3em] text-[var(--color-laser-lemon)]">
                            MENU DIRECTORY
                        </h4>

                        <ul className="space-y-4 text-sm">
                            {[
                                ["ABOUT ORBIT", "https://orbitntnu.com/about"],
                                ["TEAMS & SYSTEMS", "https://orbitntnu.com/teams"],
                                ["SPONSORS", "https://orbitntnu.com/sponsors"],
                            ].map(([label, href]) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="flex items-center gap-3 opacity-80 text-xs transition hover:opacity-100"
                                    >
                                        <span className="tracking-widest">{label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="border border-white/10 bg-black/20 p-6"
                    >
                        <h4 className="mb-6 text-xs tracking-[0.3em] text-[var(--color-pink-blast)]">
                            PARTNERS
                        </h4>

                        <div className="flex flex-wrap gap-6 opacity-80">
                            {[
                                "/logos/kongsberg.png",
                                "/logos/norsk_romsenter.png",
                                "/logos/andoya_space.png",
                            ].map((src, i) => (
                                <div
                                    key={i}
                                    className="relative h-[50px] w-[80px] flex items-center justify-center"
                                >
                                    <Image
                                        src={src}
                                        alt="Partner Logo"
                                        fill
                                        className="object-contain grayscale hover:grayscale-0 transition"
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="my-14 h-px w-full bg-white/20" />

                <div className="flex flex-col items-center gap-6 text-[11px] opacity-70 md:grid md:grid-cols-3">
                    <span className="md:justify-self-start">
                        © {new Date().getFullYear()} ORBIT NTNU - ALL RIGHTS RESERVED
                    </span>

                    <div className="flex justify-center gap-8 text-lg">
                        {[
                            { href: "https://x.com/orbit_ntnu", icon: "fa-twitter" },
                            { href: "https://www.tiktok.com/@orbitntnu2025", icon: "fa-tiktok" },
                            { href: "https://www.linkedin.com/company/orbit-ntnu", icon: "fa-linkedin" },
                            { href: "https://www.instagram.com/orbitntnu/", icon: "fa-instagram" },
                        ].map(({ href, icon }, i) => (
                            <a
                                key={i}
                                href={href}
                                className="transition-transform hover:scale-110 hover:text-[var(--color-emerald-fizz)]"
                            >
                                <i className={`fa-brands ${icon}`} />
                            </a>
                        ))}
                    </div>

                    <span className="md:justify-self-end text-[var(--color-sky-mint)]">
                        CONTACT@ORBITNTNU.COM
                    </span>
                </div>

            </div>
        </motion.section>
    );
};
