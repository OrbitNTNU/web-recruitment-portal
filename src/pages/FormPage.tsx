import React from "react";
import { useStepStore } from "@/stores/useStepStore";
import { useFormStore } from "@/stores/useFormStore";
import FifthStep from "@/components/formpage/modaler/FifthStep";
import FourthStep from "@/components/formpage/modaler/FourthStep";
import SecondStep from "@/components/formpage/modaler/SecondStep";
import FirstStep from "@/components/formpage/modaler/FirstStep";
import SixthStep from "@/components/formpage/modaler/SixthStep";
import ApplyStep from "@/components/formpage/modaler/ApplyStep";
import ThirdStep from "@/components/formpage/modaler/ThirdStep";
import "@/styles/globals.css";

export default function FormPage(){
    const { step } = useStepStore();
    const { description, fullName, username, email, phoneNumber, emailAddress,fieldOfStudy,yearOfStudy,positions, experience} = useFormStore();

    const submitApplication = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name: fullName,
      personalEmail: emailAddress,
      ntnuUsername: username,
      phoneNumber: phoneNumber,
      fieldOfStudy: fieldOfStudy,
      yearOfStudy: yearOfStudy,
      experience: experience,
      description: description,
      submissionDate: new Date().toISOString(),
      saveApplication: true,
    };

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      console.log(res)

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
    <main className="h-screen w-screen overflow-y-clip bg-black bg-cover bg-[url('/spacebg.jpg')]  bg-center relative">  
      <form className="flex h-full items-center justify-center relative z-10" onSubmit={submitApplication}>
        <section className="relative h-full w-full p-6">
          {step === 1 && <FirstStep />}
          {step === 2 && <SecondStep />}
          {step === 3 && <ThirdStep />}
          {step === 4 && <FourthStep />}
          {step === 5 && <FifthStep />}
          {step === 6 && <SixthStep />}
          {step === 7 && <ApplyStep />}
        </section>
      </form>
    </main>
  );
}