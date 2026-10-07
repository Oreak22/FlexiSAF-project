import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { buttonClasses, type ButtonVariant } from "./buttonStyles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  loading?: boolean;
};

export function Button({
  variant = "primary",
  loading = false,
  disabled,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`${buttonClasses(variant)} ${className}`}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
    >
      {loading && (
        <span
          className="size-3 animate-spin rounded-full border-2 border-current border-r-transparent"
          aria-hidden="true"
        />
      )}
      {loading ? "Sending..." : children}
    </button>
  );
}

type ButtonLinkProps = Omit<LinkProps, "className" | "children"> & {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link {...props} className={`${buttonClasses(variant)} ${className}`}>
      {children}
    </Link>
  );
}
