import React, { useEffect } from "react";
import Image from "next/image";
import { useFunFactStore } from "@/stores/FunFactStore/UseFunFactStore";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { currentFact, setRandomFact } = useFunFactStore();
  const router = useRouter();

  const handleRouteToHome = () => {
    router.push("/Home");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomFact();
    }, 5000);
    return () => clearInterval(interval);
  }, [setRandomFact]);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div
          onClick={handleRouteToHome}
          className="cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/shared/Orbit text Small.png"
            alt="Orbit Logo"
            width={80}
            height={30} 
            priority
          />
        </div>

        <span className="--font-poppins hidden max-w-xs truncate font-bold text-[var(--color-orange-sherbert)] md:inline">
          {currentFact || "Build cubesats with us!"}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
