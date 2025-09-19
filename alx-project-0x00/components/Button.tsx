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
  "rounded-lg": "rounded-lg",
};

const Button: React.FC<ButtonProps> = ({
  title,
  styles,
  size = "medium",
  shape = "rounded-md",
  className = "",
}) => {
  return (
    <button
      type="button"
      className={`${styles} ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
