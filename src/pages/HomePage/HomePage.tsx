import Navbar from "@/components/Shared/Navbar";
import { useRouter } from "next/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Footer } from "@/components/Home/Footer";
import { HeroSection } from "@/components/Sections/Home/HeroSection";
import { OrbitSection } from "@/components/Sections/Home/OrbitSection";
import StarsBackground from "@/components/Canvas/StarsBackground";

export default function HomePage() {
  const router = useRouter();

  const handleRouteToForm = () => {
    router.push("/Form");
  };

  return (
    <div className="overflow-hidden">
      <StarsBackground />

      <div className="relative z-10">
        <Navbar />
        <HeroSection onApply={handleRouteToForm} />
        <OrbitSection />
        <Footer />
      </div>
    </div>
  );
}

