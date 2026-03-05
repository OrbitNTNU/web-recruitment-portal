"use client";

import { SOCIAL_IMAGES } from "@/components/Data/SocialImages";
import { GalleryCard } from "@/components/Shared/GalleryCard";
import { motion } from "framer-motion";
import { SocialImages } from "@/consts/socialImages";

export const GallerySection = () => {
    return (
        <section className="relative py-28">
            <div className="mx-auto max-w-[1200px] px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >

                    <span className="text-[10px] tracking-[0.45em] ">
                        LIFE AT ORBIT
                    </span>

                    <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-wide">
                        More Than Engineering
                    </h2>

                    <p className="mt-4 text-white/60 max-w-xl mx-auto text-sm">
                        Orbit is not just about building satellites. It is about community,
                        collaboration, and shared experiences.
                    </p>

                </motion.div>

                <div className="flex gap-8 overflow-x-auto overflow-y-hidden no-scrollbar pb-2">
                    {Object.entries(SocialImages).map(([key, value]) => {
                        const img = SOCIAL_IMAGES[value as keyof typeof SOCIAL_IMAGES];

                        return (
                            <GalleryCard
                                key={key}
                                src={img.src}
                                title={img.title}
                                description={img.description}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}