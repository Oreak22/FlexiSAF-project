import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tone?: "paper" | "soft";
};

export function Card({
  children,
  tone = "soft",
  className = "",
  ...props
}: CardProps) {
  const toneClass = tone === "soft" ? "bg-surface-soft" : "bg-paper";
  const classes = ["rounded-card", toneClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
}
