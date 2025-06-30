import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger" | "white";
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className,
}) => {
  const baseStyles =
    "px-7 py-3 rounded-md text-sm font-medium focus:outline-none transition";
  const variants = {
    primary: "bg-[#ff8000] text-white hover:bg-[#e87707]",
    secondary:
      "bg-black/10 text-black text-white hover:text-black border-1 border-[#ff8000] hover:bg-[#ff8000]",
    danger: "bg-red-600 text-white hover:bg-red-700",
    white:
      "bg-black/10 text-white hover:text-black border-1 border-white hover:bg-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(baseStyles, variants[variant], className, {
        "opacity-50 cursor-not-allowed": disabled,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
