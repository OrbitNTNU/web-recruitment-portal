"use client";

import { motion } from "framer-motion";
import { useFormStore, useSessionStorageSync } from "@/stores/useFormStore";
import InfoIcon from "@/components/Pages/Form/InfoIcon";
import SummaryItem from "@/components/Pages/Form/SummaryItem";
import TextBlock from "@/components/Pages/Form/TextBlock";

export default function SummaryModal() {
  const {
    fullName,
    username,
    email,
    phoneNumber,
    emailAddress,
    fieldOfStudy,
    yearOfStudy,
    description,
    experience,
    teams,
  } = useFormStore();

  useSessionStorageSync();

  const teamsDisplay =
    teams.length > 0
      ? teams.map((t, i) => `${i + 1}. ${t.teamName}`).join("\n")
      : "No teams selected";

  return (
    <div className="flex justify-center px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-5xl space-y-10"
      >
        <div className="space-y-4 text-center">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <h1 className="text-xl sm:text-2xl font-semibold text-[var(--color-cloud-white)]">
              Review Your Application
            </h1>

            <InfoIcon text="Review your application before submitting. You can still go back and edit any section." />
          </div>

          <p className="text-sm text-[var(--color-charcoal-light)]">
            Make sure everything looks correct before submitting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <section className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--color-cloud-white)] border-b border-[var(--color-dark-gray)] pb-3">
                Personal Information
              </h3>

              <div className="space-y-3">
                <SummaryItem label="Full Name" value={fullName} />
                <SummaryItem label="Field of Study" value={fieldOfStudy} />
                <SummaryItem label="Year of Study" value={yearOfStudy} />
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--color-cloud-white)] border-b border-[var(--color-dark-gray)] pb-3">
                Contact Information
              </h3>

              <div className="space-y-3">
                <SummaryItem label="NTNU Username" value={username} />
                <SummaryItem label="Primary Email" value={email} />
                <SummaryItem label="Secondary Email" value={emailAddress} />
                <SummaryItem label="Phone" value={phoneNumber} />
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--color-cloud-white)] border-b border-[var(--color-dark-gray)] pb-3">
                Team Preferences
              </h3>

              <motion.div
                whileHover={{ scale: 1.01 }}
                className="rounded-lg border border-[var(--color-dark-gray)] bg-[var(--color-charcoal)]/70 p-4 backdrop-blur-sm"
              >
                <p className="text-sm whitespace-pre-line text-[var(--color-cloud-white)] break-words">
                  {teamsDisplay}
                </p>
              </motion.div>
            </section>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-[var(--color-cloud-white)] border-b border-[var(--color-dark-gray)] pb-3">
              About You
            </h3>

            <TextBlock title="Description" content={description} />

            <TextBlock title="Relevant Experience" content={experience} />
          </div>
        </div>

        <div className="flex justify-center sm:justify-center pt-6">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="
              relative
              px-8 py-3
              rounded-xl
              text-sm font-semibold
              text-[var(--color-charcoal)]
              bg-[var(--color-cloud-white)]
              transition
              shadow-lg
              overflow-hidden
            "
          >
            <span className="relative z-10">Submit Application</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}