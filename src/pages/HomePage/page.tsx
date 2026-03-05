import StarsBackground from "@/components/Canvas/StarsBackground";
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
    <div className="relative overflow-hidden">

      <StarsBackground />

      <div className="relative z-10">
        <Navbar />
        <HeroSection onApply={handleRouteToForm} />
        <PhilosophySection />
        <OrbitVideoSection />
        <GallerySection />
        <Footer />

      </div>
    </div>
  );
}