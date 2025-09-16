interface IconButtonProps {
  label?: string;
  onClick?: () => void;
  icon?: string;
  variant: "primary" | "secondary";
  hiddenLabelOnMobile?: boolean;
  iconLeft?: boolean;
}
const IconButton = ({
  label,
  onClick,
  icon,
  variant = "primary",
  hiddenLabelOnMobile = false,
  iconLeft = false,
}: IconButtonProps) => {
  const baseClasses =
    "rounded-md block px-4 py-2 text-center flex items-center justify-center gap-2 text-darkEmerald bg-emeraldFizz hover:bg-skyMint";

  const variantClasses = variant === "primary" ? "" : "w-full";

  return (
    <button
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
      type="button"
    >
      {icon && iconLeft && <span className="material-icons">{icon}</span>}
      {label && (
        <span className={hiddenLabelOnMobile ? "hidden md:block" : ""}>
          {label}
        </span>
      )}
      {icon && !iconLeft && <span className="material-icons">{icon}</span>}
    </button>
  );
};

export default IconButton;
