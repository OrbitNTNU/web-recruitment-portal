import { useEffect } from "react";
import { useFormStore } from "@/stores/useFormStore";
import { useRouter } from "next/router";

import { HeroSection } from "@/components/Pages/Home/Sections/MainSection";
import { PhilosophySection } from "@/components/Pages/Home/Sections/PhilosophySection";
import { OrbitVideoSection } from "@/components/Pages/Home/Sections/VideoSection";
import { GallerySection } from "@/components/Pages/Home/Sections/GallerySection";

export default function HomePage() {
  const { fetchTeams } = useFormStore();
  const router = useRouter();

  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

  return (
    <main className="relative flex flex-col">
      <HeroSection onApply={() => router.push("/Form")} />
      <PhilosophySection />
      <OrbitVideoSection />
      <GallerySection />
    </main>
  );
}