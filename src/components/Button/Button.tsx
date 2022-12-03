import React from "react";

import { cva } from "class-variance-authority";

const ButtonStyles = cva([
  "text-blue-400",
  "hover:text-blue-500",
  "active:text-blue-600",
  "border-blue-400",
  "hover:border-blue-500",
  "active:border-blue-600",
  "rounded-md",
  "p-1",
  "px-2",
  "border",
]);

export const Button = ({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className={ButtonStyles()} {...props} />;
};
