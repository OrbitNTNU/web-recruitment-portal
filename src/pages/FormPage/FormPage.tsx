import React from "react";
import { useStepStore } from "@/stores/useStepStore";
import { useFormStore } from "@/stores/useFormStore";
import TeamsAndWishesModal from "@/components/Modals/Form/TeamsAndWishesModal";
import DescriptionAndExperienceModal from "@/components/Modals/Form/DescriptionAndExperienceModal";
import PersonalInformationModal from "@/components/Modals/Form/PersonalInformationModal";
import SummaryModal from "@/components/Modals/Form/SummaryModal";
import LoadingModal from "@/components/Modals/Form/LoadingScreenModal";
import Navbar from "@/components/Shared/Navbar";
import StepSlider from "@/components/Form/StepSlider";

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
