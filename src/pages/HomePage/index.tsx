import { useEffect } from "react";
import { useFormStore } from "@/stores/useFormStore";
import { useRouter } from "next/router";

import { MainSection } from "@/components/Pages/Home/Sections/MainSection";
import { PhilosophySection } from "@/components/Pages/Home/Sections/PhilosophySection";
import { OrbitVideoSection } from "@/components/Pages/Home/Sections/VideoSection";
import { GallerySection } from "@/components/Pages/Home/Sections/GallerySection";
import { TeamsSection } from "@/components/Pages/Home/Sections/TeamsSection";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

export default function HomePage() {
  const { fetchTeams } = useFormStore();
  const router = useRouter();

  useEffect(() => {
    void fetchTeams();
  }, [fetchTeams]);

  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--color-charcoal)]">
      <main className="relative z-10 flex flex-1 flex-col">
        <MainSection onApply={() => router.push("/form")} />
        <TeamsSection />
        <PhilosophySection />
        <OrbitVideoSection />
        <GallerySection />
      </main>
    </div>
  );
}