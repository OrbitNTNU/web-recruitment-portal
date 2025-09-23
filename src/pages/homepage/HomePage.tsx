import React from "react";
import Navbar from "@/components/shared/Navbar";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleRouteToForm = () => {
    router.push("/Form");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="relative flex-grow flex items-center px-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('shared/orbitsat.jpg')" }}
        />

        <div className="relative z-10 max-w-3xl text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-strong)] mb-4">
            Orbit Application Form
          </h2>
          <p className="text-[var(--color-cloud-white)] text-base md:text-lg mb-8">
            Join Our Team! We're on the lookout for passionate individuals to fill
            several key roles. While we've highlighted our most sought-after
            positions below, we value diverse talents and interests. If you're
            passionate about a role not listed here, don't hesitate to apply using
            the links provided. Your enthusiasm could be the perfect fit for Orbit
            NTNU!
          </p>
          <div className="text-center">
            <button
              onClick={handleRouteToForm}
              className="bg-[var(--color-orange-sherbert)] hover:bg-[var(--color-laser-lemon)] text-[var(--color-dark-gray)] font-semibold px-10 py-3 rounded-full transition-colors duration-300"
            >
              Proceed to apply
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
