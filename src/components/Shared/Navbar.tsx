import React, { useEffect } from "react";
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
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[var(--color-moonlight)/70] text-[var(--color-strong)] shadow-lg backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1
          onClick={handleRouteToHome}
          className="--font-poppins cursor-pointer text-2xl font-bold tracking-wide text-[var(--color-strong)] transition-colors duration-300 hover:text-[var(--color-orange-sherbert)] md:text-3xl"
        >
          ORBIT
        </h1>

        <span className="--font-poppins hidden max-w-xs truncate font-bold text-[var(--color-orange-sherbert)] md:inline">
          {currentFact || "Build cubesats with us!"}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
