import {
  useFormStore,
  useSessionStorageSync,
} from "@/stores/form-store/useFormStore";
import { useStepStore } from "@/stores/step-store/useStepStore";
import { motion } from "framer-motion";
import StepSlider from "@/components/form/StepSlider";
import BackButton from "@/components/form/BackButton";

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
    experience,
    description,
  } = useFormStore();

  useSessionStorageSync();

  return (
    <div className="flex min-h-screen items-start justify-center px-4 pt-10 md:items-center md:pt-0">
      <motion.article
        initial={{ opacity: 0, scale: 0.9, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative flex w-full max-w-md flex-col items-center justify-center overflow-y-auto p-6 sm:p-8"
      >
        <div className="mb-6 w-full">
          <StepSlider />
        </div>
        <h2 className="mb-6 text-center text-3xl font-bold text-white">
          🚀 Overview 🚀
        </h2>

        <div className="grid max-h-[60vh] w-full grid-cols-1 gap-4 overflow-y-auto pr-2 text-white sm:grid-cols-2">
          <OverviewItem label="Full Name" value={fullName} />
          <OverviewItem label="Username" value={username} />
          <OverviewItem label="Email" value={email} />
          <OverviewItem label="Phone Number" value={phoneNumber} />
          <OverviewItem label="Alt. Email" value={emailAddress} />
          <OverviewItem label="Field of Study" value={fieldOfStudy} />
          <OverviewItem label="Year of Study" value={yearOfStudy} />
        </div>

        <div className="mt-6 w-full rounded-xl border border-purple-300 bg-gray-700 p-4 text-purple-100 shadow-md">
          <h3 className="mb-2 text-lg font-semibold text-white">
            Description:
          </h3>
          <p className="rounded-md bg-gray-700 p-2 text-purple-100">
            {description}
          </p>
        </div>

        <div className="mt-6 w-full rounded-xl border border-purple-300 bg-gray-700 p-4 text-purple-100 shadow-md">
          <h3 className="mb-2 text-lg font-semibold text-white">Experience:</h3>
          <p className="rounded-md bg-gray-700 p-2 text-purple-100">
            {experience}
          </p>
        </div>

        <div className="mt-8 flex w-full justify-center space-x-4">
          <BackButton />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-md border border-blue-600 bg-blue-700 px-6 py-2 text-blue-100 shadow transition-all hover:bg-blue-600"
          >
            Apply to Orbit
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
      whileHover={{ scale: 1.01 }}
      className="w-full rounded-xl border border-purple-300 bg-gray-700 p-3 shadow-md transition-all"
    >
      <span className="block text-sm font-medium text-blue-300">{label}</span>
      <span className="text-md break-words font-medium text-white">
        {value || "—"}
      </span>
    </motion.div>
  );
}
