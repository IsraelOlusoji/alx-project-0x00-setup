import React from "react";
import { ButtonProps } from "@/interfaces";

const sizeClasses = {
  small: "text-sm px-2 py-1",
  medium: "text-base px-4 py-2",
  large: "text-lg px-6 py-3",
};

const shapeClasses = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
};

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  className = "",
}) => {
  return (
    <button
      type="button"
      className={`bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75
         ${sizeClasses[size]}
        ${shapeClasses[shape]}
         ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
