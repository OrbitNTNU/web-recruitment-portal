import { motion } from "framer-motion";

interface TextBlockProps {
  title: string;
  content: string;
}

const TextBlock = ({ title, content }: TextBlockProps) => (
  <motion.div
    whileHover={{ scale: 1.01 }}
    className="space-y-2 rounded-xl border border-[var(--color-dark-gray)] bg-[var(--color-charcoal)]/70 p-5 backdrop-blur-sm"
  >
    <h4 className="text-sm font-semibold text-[var(--color-cloud-white)]">
      {title}
    </h4>

    <p className="whitespace-pre-line text-sm leading-relaxed text-[var(--color-charcoal-light)] break-words">
      {content || "—"}
    </p>
  </motion.div>
);

export default TextBlock;