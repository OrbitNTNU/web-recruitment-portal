import { useState } from "react";

export default function MultiStepForm() {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    return (
        <main
                className="w-screen h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('/SelfieSat_Space3.jpeg')" }}
            >
                <form className="h-full flex justify-center items-center">
                    <section className="bg-white p-6 rounded-lg shadow-lg w-96">
                        {step === 1 && (
                            <article>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" className="block w-full border p-2 mt-1" />
                                <button type="button" onClick={nextStep} className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
                                    Next
                                </button>
                            </article>
                        )}

                        {step === 2 && (
                            <article>
                                <label htmlFor="school-email">School Email:</label>
                                <input type="email" id="school-email" name="school-email" className="block w-full border p-2 mt-1" />

                                <label htmlFor="personal-email">Personal Email:</label>
                                <input type="email" id="personal-email" name="personal-email" className="block w-full border p-2 mt-1" />

                                <button type="button" onClick={prevStep} className="mt-3 bg-gray-500 text-white px-4 py-2 rounded">
                                    Back
                                </button>
                                <button type="button" onClick={nextStep} className="mt-3 ml-2 bg-blue-500 text-white px-4 py-2 rounded">
                                    Next
                                </button>
                            </article>
                        )}

                        {step === 3 && (
                            <article>
                                <label htmlFor="study-background">Study Background:</label>
                                <input type="text" id="study-background" name="study-background" className="block w-full border p-2 mt-1" />

                                <label htmlFor="year-of-study">Year of Study:</label>
                                <input type="number" id="year-of-study" name="year-of-study" className="block w-full border p-2 mt-1" />

                                <button type="button" onClick={prevStep} className="mt-3 bg-gray-500 text-white px-4 py-2 rounded">
                                    Back
                                </button>
                                <button type="button" onClick={nextStep} className="mt-3 ml-2 bg-blue-500 text-white px-4 py-2 rounded">
                                    Next
                                </button>
                            </article>
                        )}

                        {step === 4 && (
                            <article>
                                <label>Teams you want to join:</label>
                                <div className="mt-2">
                                    <input type="checkbox" id="team-a" name="teams" value="Team A" />
                                    <label htmlFor="team-a" className="ml-2">Team A</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="team-b" name="teams" value="Team B" />
                                    <label htmlFor="team-b" className="ml-2">Team B</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="team-c" name="teams" value="Team C" />
                                    <label htmlFor="team-c" className="ml-2">Team C</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="team-d" name="teams" value="Team D" />
                                    <label htmlFor="team-d" className="ml-2">Team D</label>
                                </div>

                                <button type="button" onClick={prevStep} className="mt-3 bg-gray-500 text-white px-4 py-2 rounded">
                                    Back
                                </button>
                                <button type="button" onClick={nextStep} className="mt-3 ml-2 bg-blue-500 text-white px-4 py-2 rounded">
                                    Next
                                </button>
                            </article>
                        )}

                        {step === 5 && (
                            <article>
                                <label htmlFor="comment">Comments:</label>
                                <textarea id="comment" name="comment" className="block w-full border p-2 mt-1"></textarea>

                                <button type="button" onClick={prevStep} className="mt-3 bg-gray-500 text-white px-4 py-2 rounded">
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

