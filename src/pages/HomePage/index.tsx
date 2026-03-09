"use client";

import { GallerySection } from "@/components/Pages/Home/Sections/GallerySection";
import { HeroSection } from "@/components/Pages/Home/Sections/MainSection";
import { OrbitVideoSection } from "@/components/Pages/Home/Sections/VideoSection";
import { PhilosophySection } from "@/components/Pages/Home/Sections/PhilosophySection";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleRouteToForm = () => {
    router.push("/Form");
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--color-charcoal)]">
      <Navbar />
      <main className="relative z-10 flex flex-1 flex-col">
        <HeroSection onApply={handleRouteToForm} />
        <PhilosophySection />
        <OrbitVideoSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}