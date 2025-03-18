import React from "react";
import FourthStep from "@/components/formpage/FourthStep";
import { useFormStore } from "@/stores/useFormStore";



export default function MultiStepForm() {
    const { step, nextStep, prevStep } = useFormStore();
    return (
        <main
            className="w-screen h-screen bg-cover bg-center overflow-y-clip bg-black"

        >

            <form className="h-full flex justify-center items-center">
                <section className=" w-full h-full border-radius:3 p-6 relative">
                    {step === 1 && (
                        <article className="w-1/3">
                            <label htmlFor="name" className="text-white">Name:</label>
                            <input type="text" id="name" name="name"
                                   className="opacity-100 block w-full border p-2 mt-1"/>
                            <button type="button" onClick={nextStep}
                                    className="mt-3 bg-blue-500 text-white px-4 py-2 rounded items-end">
                                Next
                            </button>
                        </article>
                    )}

                    {step === 2 && (
                        <article className="w-1/3">
                            <label htmlFor="school-email" className="text-white">School Email:</label>
                            <input type="email" id="school-email" name="school-email"
                                   className="block w-full border p-2 mt-1"/>

                            <label htmlFor="personal-email" className="text-white">Personal Email:</label>
                            <input type="email" id="personal-email" name="personal-email"
                                   className="block w-full border p-2 mt-1"/>

                            <button type="button" onClick={prevStep}
                                    className="mt-3 bg-gray-500 text-white px-4 py-2 rounded">
                                Back
                            </button>
                            <button type="button" onClick={nextStep}
                                    className="mt-3 ml-2 bg-blue-500 text-white px-4 py-2 rounded">
                                Next
                            </button>
                        </article>
                    )}

                    {step === 3 && (
                        <article className="w-1/3">
                            <label htmlFor="study-background" className="text-white">Study Background:</label>
                            <input type="text" id="study-background" name="study-background"
                                   className="block w-full border p-2 mt-1"/>

                            <label htmlFor="year-of-study" className="text-white">Year of Study:</label>
                            <input type="number" id="year-of-study" name="year-of-study"
                                   className="block w-full border p-2 mt-1"/>

                            <button type="button" onClick={prevStep}
                                    className="mt-3 bg-gray-500 text-white px-4 py-2 rounded">
                                Back
                            </button>
                            <button type="button" onClick={nextStep}
                                    className="mt-3 ml-2 bg-blue-500 text-white px-4 py-2 rounded">
                                Next
                            </button>
                        </article>
                    )}

                    {step === 4 && <FourthStep />}

                    {step === 5 && (
                        <article className="w-1/3">
                            <label htmlFor="comment" className="text-white">Comments:</label>
                            <textarea id="comment" name="comment" className="block w-full border p-2 mt-1"></textarea>

                            <button type="button" onClick={prevStep}
                                    className="mt-3 bg-gray-500 text-white px-4 py-2 rounded">
                                Back
                            </button>
                            <button type="submit" className="mt-3 ml-2 bg-green-500 text-white px-4 py-2 rounded">
                                Submit
                            </button>
                        </article>
                    )}
                </section>
            </form>
        </main>
    );
}
