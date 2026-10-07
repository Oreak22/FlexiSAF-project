import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type SharedFieldProps = {
  label: string;
  error?: string;
  hint?: string;
};

type InputProps = SharedFieldProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

type TextAreaProps = SharedFieldProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

const fieldClass =
  "mt-[7px] block w-full resize-y border-0 border-b border-[#d1cec3] bg-transparent py-[10px] text-[11px] text-ink outline-none placeholder:text-[#a09e94] focus:border-olive focus-visible:shadow-focus disabled:cursor-not-allowed disabled:border-line disabled:text-disabled";

function FieldMessage({
  error,
  hint,
}: Pick<SharedFieldProps, "error" | "hint">) {
  if (!error && !hint) return null;

  return (
    <span
      className={`mt-1 block text-[10px] ${error ? "text-danger" : "text-muted"}`}
    >
      {error ?? hint}
    </span>
  );
}

export function Input({
  label,
  error,
  hint,
  id,
  className = "",
  ...props
}: InputProps) {
  const inputId =
    id ?? props.name ?? label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <label
      className="my-[14px] block text-label text-[#54534a]"
      htmlFor={inputId}
    >
      {label}
      <input
        {...props}
        id={inputId}
        className={`${fieldClass} ${className}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={error || hint ? `${inputId}-message` : undefined}
      />
      {(error || hint) && (
        <span id={`${inputId}-message`}>
          <FieldMessage error={error} hint={hint} />
        </span>
      )}
    </label>
  );
}

export function TextArea({
  label,
  error,
  hint,
  id,
  className = "",
  ...props
}: TextAreaProps) {
  const inputId =
    id ?? props.name ?? label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <label
      className="my-[14px] block text-label text-[#54534a]"
      htmlFor={inputId}
    >
      {label}
      <textarea
        {...props}
        id={inputId}
        className={`${fieldClass} ${className}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={error || hint ? `${inputId}-message` : undefined}
      />
      {(error || hint) && (
        <span id={`${inputId}-message`}>
          <FieldMessage error={error} hint={hint} />
        </span>
      )}
    </label>
  );
}
