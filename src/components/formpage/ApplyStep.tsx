import { useFormStore, useSessionStorageSync } from "@/stores/useFormStore";
import { useStepStore } from "@/stores/useStepStore";
import { motion } from "framer-motion";

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
    <div className="flex items-center justify-center min-h-screen px-4">
      <motion.article
        initial={{ opacity: 0, scale: 0.9, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-3xl rp-10 shadow-2xl"
      >
        <h2 className="mb-8 text-center text-3xl font-bold text-white">🚀 Application Overview</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white">
          <OverviewItem label="Full Name" value={fullName} />
          <OverviewItem label="Username" value={username} />
          <OverviewItem label="Email" value={email} />
          <OverviewItem label="Phone Number" value={phoneNumber} />
          <OverviewItem label="Alt. Email" value={emailAddress} />
          <OverviewItem label="Field of Study" value={fieldOfStudy} />
          <OverviewItem label="Year of Study" value={yearOfStudy} />
          <OverviewItem label="Preferred Teams" value={positions.map(p => p.toString()).join(", ")} />
        </div>

        <div className="mt-8">
          <h3 className="mb-2 text-lg font-semibold text-white">Additional Comments:</h3>
          <p className="rounded-md bg-gray-700 p-4 text-white">{comments || "No comments provided."}</p>
        </div>

        <div className="mt-10 flex justify-center space-x-4">
          <motion.button
            type="button"
            onClick={prevStep}
            whileHover={{ scale: 1.05, y: 0 }}
            whileTap={{ scale: 1.2 }}
            className="rounded-lg border border-gray-500 bg-gray-700 px-6 py-2 text-white shadow-md transition hover:bg-gray-600"
          >
            Back
          </motion.button>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, y: 0}}
            whileTap={{ scale: 1.2 }}
            className="rounded-lg border border-blue-400 bg-blue-500 px-6 py-2 text-white shadow-md transition hover:bg-blue-600"
          >
            Apply to Orbit 🌌
          </motion.button>
        </div>
      </motion.article>
    </div>
  );
}

function OverviewItem({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-lg bg-gray-700 p-4 shadow-sm hover:shadow-md transition">
      <span className="block text-sm font-medium text-gray-300">{label}</span>
      <span className="text-md font-semibold text-white">{value || "—"}</span>
    </div>
  );
}
