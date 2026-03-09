interface SummaryItemProps {
  label: string;
  value: string | number;
}

const SummaryItem = ({ label, value }: SummaryItemProps) => (
  <div className="flex items-start justify-between border-b border-[var(--color-dark-gray)] pb-3 gap-6">
    <span className="text-sm text-[var(--color-charcoal-light)] shrink-0">
      {label}
    </span>

    <span className="text-sm font-medium text-[var(--color-cloud-white)] text-right max-w-[60%] break-words">
      {value || "—"}
    </span>
  </div>
);

export default SummaryItem;