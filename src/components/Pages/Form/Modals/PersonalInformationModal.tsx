"use client";

import { motion } from "framer-motion";
import { useFormStore, useSessionStorageSync } from "@/stores/useFormStore";
import InfoIcon from "@/components/Pages/Form/InfoIcon";
import FormInput from "@/components/Pages/Form/FormInput";
import { FaUser, FaBook, FaGraduationCap } from "react-icons/fa";
import { INPUT_CLASSES } from "@/constants/styles";

const YEAR_OPTIONS = [1, 2, 3, 4, 5] as const;

export default function PersonalInformationModal() {
  const {
    fullName,
    setFullName,
    fieldOfStudy,
    setFieldOfStudy,
    yearOfStudy,
    setYearOfStudy,
  } = useFormStore();

  useSessionStorageSync();

  return (
    <div className="flex items-center justify-center px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-xl space-y-10"
      >
        <div className="space-y-4 text-center">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <h1 className="text-xl sm:text-2xl font-semibold tracking-wide text-[var(--color-cloud-white)]">
              Personal Information
            </h1>

            <InfoIcon text="This information is only used for the application process. It is stored securely and used to contact you regarding recruitment and to verify your student status." />
          </div>

          <p className="text-sm text-[var(--color-charcoal-light)]">
            Let’s start with the basics
          </p>

          <div className="mx-auto max-w-md text-xs text-[var(--color-charcoal-light)] border border-[var(--color-dark-gray)] rounded-lg p-4 bg-[var(--color-charcoal)]/70 leading-relaxed">
            We ask for both personal and student information so we can contact
            you during the recruitment process and verify that applicants are
            active students.
          </div>
        </div>

        <div className="space-y-7">

          <FormInput
            label="Full Name"
            value={fullName}
            onChange={setFullName}
            placeholder="John Doe"
            icon={<FaUser />}
            info="Your legal name so we know who you are during the recruitment process."
          />

          <FormInput
            label="Field of Study"
            value={fieldOfStudy}
            onChange={setFieldOfStudy}
            placeholder="Computer Science"
            icon={<FaBook />}
            info="Your current study program at NTNU. This helps us understand your academic background."
          />


          <motion.div whileHover={{ scale: 1.01 }} className="space-y-2">

            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-[var(--color-cloud-white)]">
                Year of Study
              </label>

              <InfoIcon text="Your current year in your study program." />
            </div>

            <div className="relative">

              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-charcoal-light)]">
                <FaGraduationCap />
              </div>

              <select
                value={yearOfStudy}
                onChange={(e) => setYearOfStudy(Number(e.target.value))}
                className={`
                  ${INPUT_CLASSES}
                  pl-11
                `}
                required
              >
                {YEAR_OPTIONS.map((year) => (
                  <option
                    key={year}
                    value={year}
                    className="bg-[var(--color-charcoal)]"
                  >
                    Year {year}
                  </option>
                ))}
              </select>

            </div>

          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}