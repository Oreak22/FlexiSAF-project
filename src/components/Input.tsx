import {
  useId,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";

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
  id,
  error,
  hint,
}: Pick<SharedFieldProps, "error" | "hint"> & { id: string }) {
  if (!error && !hint) return null;

  return (
    <span
      id={id}
      className={`mt-1 block text-label ${error ? "text-danger" : "text-muted"}`}
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
  "aria-describedby": describedBy,
  "aria-invalid": ariaInvalid,
  className = "",
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const messageId = `${inputId}-message`;
  const ariaDescribedBy =
    [describedBy, error || hint ? messageId : undefined]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <label className="my-3.5 block text-label text-[#54534a]" htmlFor={inputId}>
      {label}
      <input
        {...props}
        id={inputId}
        className={`${fieldClass} ${className}`}
        aria-invalid={error ? true : ariaInvalid}
        aria-describedby={ariaDescribedBy}
      />
      <FieldMessage id={messageId} error={error} hint={hint} />
    </label>
  );
}

export function TextArea({
  label,
  error,
  hint,
  id,
  "aria-describedby": describedBy,
  "aria-invalid": ariaInvalid,
  className = "",
  ...props
}: TextAreaProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const messageId = `${inputId}-message`;
  const ariaDescribedBy =
    [describedBy, error || hint ? messageId : undefined]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <label className="my-3.5 block text-label text-[#54534a]" htmlFor={inputId}>
      {label}
      <textarea
        {...props}
        id={inputId}
        className={`${fieldClass} ${className}`}
        aria-invalid={error ? true : ariaInvalid}
        aria-describedby={ariaDescribedBy}
      />
      <FieldMessage id={messageId} error={error} hint={hint} />
    </label>
  );
}
