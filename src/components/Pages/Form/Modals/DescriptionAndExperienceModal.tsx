"use client";

import { motion } from "framer-motion";
import { useFormStore, useSessionStorageSync } from "@/stores/useFormStore";
import InfoIcon from "@/components/Pages/Form/InfoIcon";
import FormInput from "@/components/Pages/Form/FormInput";
import FormTextarea from "@/components/Pages/Form/FormTextArea";
import { FaEnvelopeOpen, FaPhone, FaUser } from "react-icons/fa";
import { useEffect } from "react";

export default function DescriptionAndExperienceModal() {
  const {
    username,
    setUsername,
    setEmail,
    emailAddress,
    setEmailAddress,
    phoneNumber,
    setPhoneNumber,
    description,
    setDescription,
    experience,
    setExperience,
  } = useFormStore();

  useSessionStorageSync();

  useEffect(() => {
    if (username) {
      setEmail(`${username}@stud.ntnu.no`);
    } else {
      setEmail("");
    }
  }, [username, setEmail]);

  return (
    <div className="flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl space-y-10"
      >

        <div className="space-y-3 text-center">

          <div className="flex items-center justify-center gap-2">
            <h1 className="text-2xl font-semibold text-[var(--color-cloud-white)]">
              Contact & Experience
            </h1>

            <InfoIcon text="This information allows us to contact you during the recruitment process and understand your background and motivation." />
          </div>

          <p className="text-sm text-[var(--color-charcoal-light)]">
            Tell us how to reach you and what you bring
          </p>

          <div
            className="
              mx-auto max-w-xl
              rounded-lg
              border border-[var(--color-dark-gray)]
              bg-[var(--color-charcoal)]
              p-4
              text-xs
              text-[var(--color-muted)]
            "
          >
            Your NTNU username is used to generate your student email automatically.
            We ask for a personal email so we can reliably contact you during the
            recruitment process.
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormInput
            label="NTNU Username"
            value={username}
            onChange={setUsername}
            placeholder="username"
            info="Your NTNU username (without @ntnu.no). Used to verify student status."
            icon={<FaUser size={14} />}
          />
          <FormInput
            label="Primary Contact Email"
            value={emailAddress}
            onChange={setEmailAddress}
            type="email"
            placeholder="personal@email.com"
            info="Your personal email so we can reach you even if your student account changes."
            icon={<FaEnvelopeOpen size={14} />}
          />
          <FormInput
            label="Phone Number"
            value={phoneNumber}
            onChange={setPhoneNumber}
            type="tel"
            placeholder="+47 123 45 678"
            info="Optional but helpful if we need to reach you quickly."
            icon={<FaPhone size={14} />}
          />
        </div>

        <div className="space-y-6">
          <FormTextarea
            label="Short Description"
            value={description}
            onChange={setDescription}
            placeholder="Tell us about yourself and what motivates you..."
            maxLength={500}
            info="Who you are, what motivates you, and why you're applying."
          />

          <FormTextarea
            label="Relevant Experience"
            value={experience}
            onChange={setExperience}
            placeholder="Projects, programming, electronics, teamwork..."
            maxLength={1000}
            info="Relevant projects, technical skills, teamwork, or experience."
          />
        </div>
      </motion.div>
    </div>
  );
}