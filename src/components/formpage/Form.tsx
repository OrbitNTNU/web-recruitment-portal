import React from "react";
import FourthStep from "@/components/formpage/FourthStep";
import { useFormStore } from "@/stores/useFormStore";

export default function MultiStepForm() {
  const { step, nextStep, prevStep } = useFormStore();
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

          {step === 2 && (
            <article className="w-1/3">
              <label htmlFor="school-email" className="text-white">
                School Email:
              </label>
              <input
                type="email"
                id="school-email"
                name="school-email"
                className="mt-1 block w-full border p-2"
              />

              <label htmlFor="personal-email" className="text-white">
                Personal Email:
              </label>
              <input
                type="email"
                id="personal-email"
                name="personal-email"
                className="mt-1 block w-full border p-2"
              />

              <button
                type="button"
                onClick={prevStep}
                className="mt-3 rounded bg-gray-500 px-4 py-2 text-white"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="ml-2 mt-3 rounded bg-blue-500 px-4 py-2 text-white"
              >
                Next
              </button>
            </article>
          )}

          {step === 3 && (
            <article className="w-1/3">
              <label htmlFor="study-background" className="text-white">
                Study Background:
              </label>
              <input
                type="text"
                id="study-background"
                name="study-background"
                className="mt-1 block w-full border p-2"
              />

              <label htmlFor="year-of-study" className="text-white">
                Year of Study:
              </label>
              <input
                type="number"
                id="year-of-study"
                name="year-of-study"
                className="mt-1 block w-full border p-2"
              />

              <button
                type="button"
                onClick={prevStep}
                className="mt-3 rounded bg-gray-500 px-4 py-2 text-white"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="ml-2 mt-3 rounded bg-blue-500 px-4 py-2 text-white"
              >
                Next
              </button>
            </article>
          )}

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
