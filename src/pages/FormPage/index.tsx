"use client";

import { useStepStore } from "@/stores/useStepStore";
import { useFormStore } from "@/stores/useFormStore";
import PersonalInformationModal from "@/components/Pages/Form/Modals/PersonalInformationModal";
import DescriptionAndExperienceModal from "@/components/Pages/Form/Modals/DescriptionAndExperienceModal";
import TeamsAndWishesModal from "@/components/Pages/Form/Modals/TeamsAndWishesModal";
import SummaryModal from "@/components/Pages/Form/Modals/SummaryModal";
import LoadingModal from "@/components/Pages/Form/Modals/LoadingScreenModal";
import StepSlider from "@/components/Pages/Form/StepSlider";
import AltBackground from "@/components/Shared/AltBackground";

type SubmitResponse = {
  error?: string;
};

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

  const submitApplication = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      name: fullName,
      personalEmail: emailAddress,
      ntnuUsername: username,
      phoneNumber,
      fieldOfStudy,
      yearOfStudy,
      experience,
      description,
      submissionDate: new Date().toISOString(),
      saveApplication: true,
    };

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: unknown = await res.json();

       if (!res.ok) {
        let errorMessage = "Submission failed";

        if (
          typeof data === "object" &&
          data !== null &&
          "error" in data &&
          typeof (data as SubmitResponse).error === "string"
        ) {
          errorMessage = (data as SubmitResponse).error!;
        }

        throw new Error(errorMessage);
      }

      alert("Application submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to submit application.");
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <AltBackground />
      <LoadingModal logoSrc="/logos/orbit/orbitLogo.png" />

      <form
        onSubmit={submitApplication}
        className="relative flex flex-1 flex-col items-center justify-center px-4 sm:px-6"
      >
        <section className="w-full max-w-4xl py-10">
          {step === 1 && <PersonalInformationModal />}
          {step === 2 && <DescriptionAndExperienceModal />}
          {step === 3 && <TeamsAndWishesModal />}
          {step === 4 && <SummaryModal />}
        </section>
        <StepSlider />
      </form>
    </main>
  );
}
