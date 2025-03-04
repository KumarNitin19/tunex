import React from "react";

export type SnackbarProps = {
  message: string;
  variant?: "success" | "error" | "warning" | "info";
  position?: "left" | "center" | "right";
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

// Variant styles
const variantStyles: Record<string, string> = {
  success: "bg-green-800 dark:bg-green-600 text-white border-green-400",
  error: "bg-red-800 dark:bg-red-600 text-white border-red-400",
  warning: "bg-yellow-800 dark:bg-yellow-600 text-black border-yellow-400",
  info: "bg-blue-800 dark:bg-blue-600 text-white border-blue-400",
};

// Positioning styles
const positionStyles: Record<string, string> = {
  left: "left-4",
  center: "left-1/2 transform -translate-x-1/2",
  right: "right-4",
};

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  variant = "info",
  position = "center",
  className = "",
  ...props
}) => {
  return (
    <div
      {...props}
      className={`fixed top-6 z-50 w-fit md:min-w-[200px] px-5 h-10 flex items-center justify-center rounded-lg border shadow-lg text-sm font-medium
        ${variantStyles[variant]} ${positionStyles[position]} 
         transition-all duration-500 ease-in-out ${className}`}>
      {message}
    </div>
  );
};

export default Snackbar;
