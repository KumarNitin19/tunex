import React from "react";

type ButtonProps = {
  variant?: "conatined" | "text" | "outline";
  size?: "small" | "medium" | "large";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// Define base styles
const baseStyles =
  "font-semibold rounded cursor-pointer focus:outline-none transition-all duration-200";

// Variant styles
const variantStyles = {
  conatined:
    "bg-primary text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700",
  outline:
    "border-2 border-primary text-primary hover:bg-[#f8f9fa] dark:hover:bg-[#1e3a8a1a] dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-900",
  text: "text-primary hover:text-blue-700 dark:text-blue-600 dark:hover:text-blue-700",
};

// Size styles
const sizeStyles = {
  small: "px-4 py-2 text-sm",
  medium: "px-6 py-3 text-base",
  large: "px-8 py-4 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  variant = "conatined",
  size = "medium",
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} transition-colors duration-200 ${className}`}
    />
  );
};

export default Button;
