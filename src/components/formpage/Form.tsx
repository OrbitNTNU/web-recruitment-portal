import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FourthStep from "@/components/formpage/FourthStep";



export default function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [sectionWidth, setSectionWidth]= useState(33);


    const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));



    useEffect(() => {
        const updateWidth = () => {
            const section = document.querySelector("section");
            if (section) {
                setSectionWidth((section.offsetWidth / window.innerWidth) * 100);
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);


    const positions = [
        { x: `${sectionWidth}vw` },
        { x: `${sectionWidth * 1.25}vw` },
        { x: `${sectionWidth * 1.5}vw` },
        { x: `${sectionWidth * 1.75}vw` },
        { x: `${sectionWidth * 2}vw` },
    ];
    const colors = ["#FF0000", "#FF7F00", "#FFFF00", "#c0f638", "#21dc5b"];





    return (
        <main
            className="w-screen h-screen bg-cover bg-center overflow-y-clip bg-black"

        >

            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 203.556 203.556"
                className="absolute bottom-10 w-16 h-16"
                animate={{ x: positions[step - 1]?.x ?? 0, fill: colors[step - 1] ?? "#FF0000" }}
                transition={{duration: 0.7, ease: "easeInOut"}}
            >
                <g>
                    <path d="M201.359,137.3l-43.831-43.831l11.453-11.452c1.407-1.407,2.197-3.314,2.197-5.304
                        c0-1.989-0.79-3.896-2.197-5.304l-36.835-36.834c-2.929-2.928-7.677-2.928-10.606,0l-11.452,11.452L66.253,2.196
                        c-2.93-2.928-7.678-2.928-10.606,0L18.813,39.03c-2.929,2.93-2.929,7.678,0,10.607l43.831,43.831l-11.453,11.452
                        c-1.407,1.407-2.197,3.314-2.197,5.304s0.79,3.896,2.197,5.304l36.837,36.836c1.464,1.464,3.384,2.196,5.303,2.196
                        c1.919,0,3.839-0.732,5.303-2.196l11.453-11.453l43.83,43.83c1.465,1.464,3.384,2.196,5.303,2.196
                        c1.919,0,3.839-0.732,5.303-2.196l36.835-36.834c1.407-1.407,2.197-3.314,2.197-5.304
                        C203.556,140.614,202.766,138.707,201.359,137.3z"/>
                </g>
            </motion.svg>

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

                    {step === 4 && <FourthStep setStep={setStep} />}

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
