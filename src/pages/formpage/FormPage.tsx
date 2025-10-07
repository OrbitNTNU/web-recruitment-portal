import React from "react";
import { useStepStore } from "@/stores/StepStore/UseStepStore";
import { useFormStore } from "@/stores/FormStore/UseFormStore";
import TeamsAndWishesModal from "@/components/Modaler/TeamsAndWishes/TeamsAndWishesModal";
import DescriptionAndExperienceModal from "@/components/Modaler/DescriptionAndExperience/DescriptionAndExperienceModal";
import PersonalInfoModal from "@/components/Modaler/PersonalInformation/PersonalInformationModal";
import SummaryModal from "@/components/Modaler/Summary/SummaryModal";
import LoadingModal from "@/components/Modaler/LoadingScreen/LoadingScreenModal";
import Navbar from "@/components/Shared/Navbar";

export default function FormPage() {
  const { step } = useStepStore();
  const {
    description,
    fullName,
    username,
    phoneNumber,
    emailAddress,
    fieldOfStudy,
    yearOfStudy,
    experience,
  } = useFormStore();
  const orbitLogo = "/";

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
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(res);

      type SubmitResponse = { message: string } | { error: string };
      const data = (await res.json()) as SubmitResponse;
      console.log(data);
      if (!res.ok) {
        const errMsg = "error" in data ? data.error : "Submission failed";
        throw new Error(errMsg);
      }

      alert("Application submitted successfully!");
    } catch (err) {
      console.error("Submission error:", err);
      alert("Failed to submit application.");
    }
  };

  return (
    <main className="relative h-screen w-screen overflow-y-clip bg-black bg-[url('/shared/orbitsat.jpg')] bg-cover bg-center">
      <Navbar />
      <LoadingModal logoSrc="logos/orbitLogo.png" />

      <form
        className="relative z-10 flex h-full items-center justify-center"
        onSubmit={submitApplication}
      >
        <section className="relative h-full w-full p-6">
          {step === 1 && <PersonalInfoModal />}
          {step === 2 && <DescriptionAndExperienceModal />}
          {step === 3 && <TeamsAndWishesModal />}
          {step === 4 && <SummaryModal />}
        </section>
      </form>
    </main>
  );
}
