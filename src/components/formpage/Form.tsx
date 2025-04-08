import React from "react";
import FourthStep from "@/components/formpage/FourthStep";
import ThirdStep from "@/components/formpage/ThirdStep";
import { useStepStore } from "@/stores/useStepStore";
import { useFormStore } from "@/stores/useFormStore";
import SecondStep from "./SecondStep";
import FirstStep from "./FirstStep";
import FifthStep from "./FifthStep";
import ApplyStep from "./ApplyStep";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function MultiStepForm() {
  const { step } = useStepStore();
  const {  fullName, username, email, phoneNumber, emailAddress,fieldOfStudy,yearOfStudy,positions, comments} = useFormStore();
  console.log({  fullName, username, email, phoneNumber, emailAddress,fieldOfStudy,yearOfStudy,positions, comments})

  const submitApplication = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name: fullName,
      personalEmail: emailAddress,
      ntnuUsername: username,
      phoneNumber: phoneNumber,
      fieldOfStudy: fieldOfStudy,
      yearOfStudy: yearOfStudy,
      experience: comments,
      description: comments,
      submissionDate: new Date().toISOString(),
      saveApplication: 1,
    };

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      type SubmitResponse = { message: string } | { error: string };
      const data = (await res.json()) as SubmitResponse;
      console.log(data);
      if (!res.ok) {
        const errMsg = 'error' in data ? data.error : 'Submission failed';
        throw new Error(errMsg);
      }

      alert('Application submitted successfully!');
    } catch (err) {
      console.error('Submission error:', err);
      alert('Failed to submit application.');
    }
  };



  return (
    <main className="h-screen w-screen overflow-y-clip bg-black bg-cover bg-center relative">
      <form className="flex h-full items-center justify-center relative z-30" onSubmit={submitApplication}>
        <section className="relative h-full w-full p-6">
          {step === 1 && <FirstStep />}
          {step === 2 && <SecondStep />}
          {step === 3 && <ThirdStep />}
          {step === 4 && <FourthStep />}
          {step === 5 && <FifthStep />}
          {step === 6 && <ApplyStep />}
        </section>
      </form>
      <div className="absolute inset-0 z-10">
        <ParticlesBackground />
      </div>

    </main>
  );
}