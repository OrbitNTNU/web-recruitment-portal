import { useFormStore, useSessionStorageSync } from "@/stores/useFormStore";
import { useStepStore } from "@/stores/useStepStore";
import { motion } from "framer-motion";
import Button from "../shared/NavButton";

export default function ApplyStep() {
  const {
    fullName,
    username,
    email,
    phoneNumber,
    emailAddress,
    fieldOfStudy,
    yearOfStudy,
    positions,
    comments,
  } = useFormStore();

  const { prevStep, nextStep } = useStepStore();

  useSessionStorageSync();

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <motion.article
        initial={{ opacity: 0, scale: 0.9, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="rp-10 relative w-full max-w-3xl"
      >
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          🚀 Application Overview
        </h2>

        <div className="grid grid-cols-1 gap-6 text-white sm:grid-cols-2">
          <OverviewItem label="Full Name" value={fullName} />
          <OverviewItem label="Username" value={username} />
          <OverviewItem label="Email" value={email} />
          <OverviewItem label="Phone Number" value={phoneNumber} />
          <OverviewItem label="Alt. Email" value={emailAddress} />
          <OverviewItem label="Field of Study" value={fieldOfStudy} />
          <OverviewItem label="Year of Study" value={yearOfStudy} />
          <OverviewItem
            label="Preferred Teams"
            value={positions.map((p) => p.toString()).join(", ")}
          />
        </div>

        <div className="mt-2 block w-full rounded-xl border border-purple-300 bg-gray-700 p-3 text-purple-100 placeholder-purple-400 shadow-md transition-all focus:outline-none">
          <h3 className="mb-2 text-lg font-semibold text-white">
            Additional Comments:
          </h3>
          <p className="rounded-md border-purple-300 bg-gray-700 p-3 text-purple-100 placeholder-purple-400 shadow-md">
            {comments || "No comments provided."}
          </p>
        </div>

        <div className="mt-10 flex justify-center space-x-4">
          <Button onClick={prevStep} label="Back" variant="back" />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-md border border-blue-600 bg-blue-700 px-6 py-2 text-blue-100 shadow transition-all hover:bg-blue-600"
          >
            Apply to Orbit 🌌
          </motion.button>
        </div>
      </motion.article>
    </div>
  );
}

function OverviewItem({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <motion.div
      whileFocus={{
        scale: 1.02,
        boxShadow: "0px 0px 8px #9b6dde",
      }}
      className="mt-2 block w-full rounded-xl border border-purple-300 bg-gray-700 p-3 text-purple-100 placeholder-purple-400 shadow-md transition-all focus:outline-none"
    >
      <span className="block text-sm font-medium text-blue-300 text-opacity-80">
        {label}
      </span>
      <span className="text-md font-semibold text-white text-opacity-90">
        {value || "—"}
      </span>
    </motion.div>
  );
}
