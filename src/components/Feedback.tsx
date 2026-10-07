import type { ReactNode } from "react";

export type FeedbackState = "loading" | "empty" | "error" | "success";

type FeedbackProps = {
  state: FeedbackState;
  children: ReactNode;
  className?: string;
};

const stateClasses: Record<FeedbackState, string> = {
  loading: "text-muted",
  empty: "text-muted",
  error: "text-danger",
  success: "text-success",
};

export function Feedback({ state, children, className = "" }: FeedbackProps) {
  return (
    <p
      className={`text-[11px] ${stateClasses[state]} ${className}`}
      role={state === "error" ? "alert" : "status"}
      aria-live={state === "error" ? "assertive" : "polite"}
    >
      {state === "loading" && (
        <span
          className="mr-2 inline-block size-2 animate-pulse rounded-full bg-current"
          aria-hidden="true"
        />
      )}
      {children}
    </p>
  );
}
