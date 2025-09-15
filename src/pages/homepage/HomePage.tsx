import React from "react";
import Navbar from "@/components/shared/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="relative font-mono flex-grow flex flex-col items-center justify-center text-center text-white px-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/orbitsat.jpg')" }}
        />
        <div className="absolute inset-0 bg-black opacity-60" />

        <div className="relative z-10 flex flex-col justify-start">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Orbit Application Form
          </h2>
          <p className="max-w-2xl mb-8 text-sm md:text-base">
            Join Our Team! We're on the lookout for passionate individuals to
            fill several key roles. While we've highlighted our most
            sought-after positions below, we value diverse talents and
            interests. If you're passionate about a role not listed here, don't
            hesitate to apply using the links provided. Your enthusiasm could be
            the perfect fit for Orbit NTNU!
          </p>
          <button className="bg-[#FFB347] text-black font-medium px-6 py-3 rounded-full hover:bg-violet-600">
            Proceed to apply
          </button>
        </div>
      </main>
    </div>
  );
}
