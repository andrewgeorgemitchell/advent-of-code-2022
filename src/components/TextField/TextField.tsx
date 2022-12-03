import { cva } from "class-variance-authority";
import { useMemo } from "react";
import { uuid } from "~/utils";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const TextFieldInputStyles = cva([
  "p-1",
  "px-2",
  "border",
  "rounded-md",
  "text-white-400",
  "border-white-400",
  "hover:border-blue-200",
]);

export const TextField = ({ label, ...props }: TextFieldProps) => {
  const labelId = useMemo(uuid, []);
  const inputId = useMemo(uuid, []);

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label id={labelId} htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-labelledby={labelId}
        className={TextFieldInputStyles()}
        {...props}
      />
    </div>
  );
};
