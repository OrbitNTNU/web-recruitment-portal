import React from "react";
import { useStepStore } from "@/stores/useStepStore";
import { useFormStore } from "@/stores/useFormStore";
import TeamsAndWishesModal from "@/components/Pages/Form/Modals/TeamsAndWishesModal";
import DescriptionAndExperienceModal from "@/components/Pages/Form/Modals/DescriptionAndExperienceModal";
import PersonalInformationModal from "@/components/Pages/Form/Modals/PersonalInformationModal";
import SummaryModal from "@/components/Pages/Form/Modals/SummaryModal";
import LoadingModal from "@/components/Pages/Form/Modals/LoadingScreenModal";
import Navbar from "@/components/Shared/Navbar";
import StepSlider from "@/components/Pages/Form/StepSlider";
import AltBackground from "@/components/Shared/AltBackground";

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

    const formData = {
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
        body: JSON.stringify(formData),
      });

      type SubmitResponse = {
        error?: string;
      };

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
    } catch (err) {
      console.error(err);
      alert("Failed to submit application.");
    }
  };
  
  return (
    <main className="relative flex min-h-screen flex-col">
          <AltBackground />
          <Navbar />
          <LoadingModal logoSrc="/logos/orbitLogo.png" />

          <form
            className="relative flex flex-1 items-center justify-center"
            onSubmit={submitApplication}
          >
            <section className="w-full">
              {step === 1 && <PersonalInformationModal />}
              {step === 2 && <DescriptionAndExperienceModal />}
              {step === 3 && <TeamsAndWishesModal />}
              {step === 4 && <SummaryModal />}
            </section>
          </form>

          <StepSlider />
    </main>
  );
}
