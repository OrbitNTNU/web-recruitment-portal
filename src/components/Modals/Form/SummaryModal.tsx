import { motion } from "framer-motion";
import { useFormStore, useSessionStorageSync } from "@/stores/useFormStore";

interface SummaryItemProps {
  label: string;
  value: string | number;
}

const SummaryItem = ({ label, value }: SummaryItemProps) => (
  <div className="flex justify-between items-center border-b border-[var(--color-slate)]/20 pb-3">
    <span className="text-sm text-[var(--color-muted)]">{label}</span>
    <span className="text-sm font-medium text-[var(--color-cloud-white)]">
      {value || "—"}
    </span>
  </div>
);

interface TextBlockProps {
  title: string;
  content: string;
}

const TextBlock = ({ title, content }: TextBlockProps) => (
  <div className="space-y-2 rounded-lg border border-[var(--color-slate)]/20 bg-[var(--color-night-sky)]/50 p-5">
    <h4 className="text-sm font-semibold text-[var(--color-cloud-white)]">
      {title}
    </h4>
    <p className="whitespace-pre-line text-sm leading-relaxed text-[var(--color-muted)]">
      {content || "—"}
    </p>
  </div>
);

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
    <div className="flex min-h-[calc(100vh-180px)] items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl space-y-10"
      >
        <div className="space-y-3 text-center">
          <h1 className="text-[var(--color-strong)]">
            Review Your Application
          </h1>
          <p className="text-[var(--color-muted)]">
            Make sure everything looks correct before submitting
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-[var(--color-cloud-white)] border-b border-[var(--color-slate)]/30 pb-3">
                Personal Information
              </h3>
              <div className="space-y-3">
                <SummaryItem label="Full Name" value={fullName} />
                <SummaryItem label="Field of Study" value={fieldOfStudy} />
                <SummaryItem label="Year of Study" value={yearOfStudy} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-[var(--color-cloud-white)] border-b border-[var(--color-slate)]/30 pb-3">
                Contact Information
              </h3>
              <div className="space-y-3">
                <SummaryItem label="Username" value={username} />
                <SummaryItem label="Primary Email" value={email} />
                <SummaryItem label="Secondary Email" value={emailAddress} />
                <SummaryItem label="Phone" value={phoneNumber} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-[var(--color-cloud-white)] border-b border-[var(--color-slate)]/30 pb-3">
                Team Preferences
              </h3>
              <div className="rounded-lg border border-[var(--color-slate)]/20 bg-[var(--color-night-sky)]/50 p-4">
                <p className="text-sm capitalize text-[var(--color-cloud-white)]">
                  {teamsDisplay}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-[var(--color-cloud-white)] border-b border-[var(--color-slate)]/30 pb-3">
              About You
            </h3>
            <div className="space-y-4">
              <TextBlock title="Description" content={description} />
              <TextBlock title="Experience" content={experience} />
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="
              rounded-lg border-2 border-[var(--color-berry-blast)] 
              bg-[var(--color-berry-blast)] px-8 py-3 
              text-sm font-semibold text-white
              transition-all duration-200
              hover:bg-[var(--color-berry-blast)]/90
              shadow-lg shadow-[var(--color-berry-blast)]/30
            "
          >
            Submit Application
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}