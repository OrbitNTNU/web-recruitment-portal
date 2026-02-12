import React, { useEffect, useState } from "react";
import { useStepStore } from "@/stores/useStepStore";
import { useFormStore } from "@/stores/useFormStore";
import TeamsAndWishesModal from "@/components/Modals/Form/TeamsAndWishesModal";
import DescriptionAndExperienceModal from "@/components/Modals/Form/DescriptionAndExperienceModal";
import PersonalInformationModal from "@/components/Modals/Form/PersonalInformationModal";
import SummaryModal from "@/components/Modals/Form/SummaryModal";
import LoadingModal from "@/components/Modals/Form/LoadingScreenModal";
import Navbar from "@/components/Shared/Navbar";
import StepSlider from "@/components/Form/StepSlider";
import { AnimatePresence, motion } from "framer-motion";
import HyperspaceIntro from "@/components/Canvas/HyperSpaceIntro";

export default function FormPage() {
  const [showWarp, setShowWarp] = useState(true);
  const [showPage, setShowPage] = useState(false);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWarp(false);
      setShowPage(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-y-clip">
      <AnimatePresence>
        {showWarp && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HyperspaceIntro label="FORM" />
          </motion.div>
        )}
      </AnimatePresence>

      {showPage && (
        <div>
          <Navbar />
          <LoadingModal logoSrc="logos/orbitLogo.png" />

          <form
            className="relative flex h-full items-center justify-center "
            onSubmit={submitApplication}
          >
            <section className="relative h-full w-full p-6 ">
              {step === 1 && <PersonalInformationModal />}
              {step === 2 && <DescriptionAndExperienceModal />}
              {step === 3 && <TeamsAndWishesModal />}
              {step === 4 && <SummaryModal />}
            </section>
          </form>
          <StepSlider />
        </div>
      )
      }
    </main>

  );
}
