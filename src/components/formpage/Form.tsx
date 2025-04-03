import React from "react";
import FourthStep from "@/components/formpage/FourthStep";
import ThirdStep from "@/components/formpage/ThirdStep";
import { useStepStore } from "@/stores/useStepStore";
import SecondStep from "./SecondStep";
import FirstStep from "./FirstStep";
import FifthStep from "./FifthStep";
import ApplyStep from "./ApplyStep";
import ParticlesBackground from "@/components/ParticlesBackground";
import ParticlesStars from "@/components/ParticlesStars";

export default function MultiStepForm() {
  const { step} = useStepStore();

  return (
    <main className="h-screen w-screen overflow-y-clip bg-black bg-cover bg-center relative">
      <form className="flex h-full items-center justify-center relative z-30">
        <section className="relative h-full w-full p-6">
          {step === 1 && <FirstStep />}
          {step === 2 && <SecondStep />}
          {step === 3 && <ThirdStep />}
          {step === 4 && <FourthStep />}
          {step === 5 && <FifthStep />}
          {step === 6 && <ApplyStep />}
        </section>
      </form>
      
      <div className="absolute inset-0 z-20">
        <ParticlesBackground />
      </div>
      <div className="absolute inset-0 z-10">
        <ParticlesStars />
      </div>
    </main>
  );
}