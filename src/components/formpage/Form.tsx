import React from "react";
import FourthStep from "@/components/formpage/FourthStep";
import ThirdStep from "@/components/formpage/ThirdStep";
import { useStepStore } from "@/stores/useStepStore";
import { button } from "framer-motion/client";
import SecondStep from "./SecondStep";

export default function MultiStepForm() {
  const { step, nextStep, prevStep } = useStepStore(); 
  return (
    <main className="h-screen w-screen overflow-y-clip bg-black bg-cover bg-center">
      <form className="flex h-full items-center justify-center">
        <section className="border-radius:3 relative h-full w-full p-6">
          {step === 1 && (
            <article className="w-1/3">
              <label htmlFor="name" className="text-white">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border p-2 opacity-100"
              />
              <button
                type="button"
                onClick={nextStep}
                className="mt-3 items-end rounded bg-blue-500 px-4 py-2 text-white"
              >
                Next
              </button>
            </article>
          )}

          {step === 2 && <SecondStep />}

          {step === 3 && <ThirdStep />}

          {step === 4 && <FourthStep />}

          {step === 5 && (
            <article className="w-1/3">
              <label htmlFor="comment" className="text-white">
                Comments:
              </label>
              <textarea
                id="comment"
                name="comment"
                className="mt-1 block w-full border p-2"
              ></textarea>

              <button
                type="button"
                onClick={prevStep}
                className="mt-3 rounded bg-gray-500 px-4 py-2 text-white"
              >
                Back
              </button>
              <button
                type="submit"
                className="ml-2 mt-3 rounded bg-green-500 px-4 py-2 text-white"
              >
                Submit
              </button>
            </article>
          )}
        </section>
      </form>
    </main>
  );
}
