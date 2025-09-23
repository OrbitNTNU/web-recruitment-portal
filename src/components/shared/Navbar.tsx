import React, { useEffect } from "react";
import { useFunFactStore } from "@/stores/fun-fact-store/useFunFactStore";
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
    <nav className="bg-[var(--color-night-sky)] text-[var(--color-strong)] p-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 onClick={() => handleRouteToHome()} className="text-2xl md:text-3xl font-bold font-mono tracking-wide cursor-pointer hover:text-[var(--color-sky-mint)] transition-colors">
          ORBIT
        </h1>

        <span className="text-[var(--color-sky-mint)] font-medium hidden md:inline max-w-xs truncate">
          {currentFact || "Exploring the cosmos"}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
