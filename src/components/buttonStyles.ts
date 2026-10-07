export type ButtonVariant = "primary" | "light" | "outline";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-olive text-white hover:bg-olive-dark",
  light: "bg-paper text-ink hover:bg-white",
  outline: "border border-olive text-olive hover:bg-olive hover:text-white",
};

export function buttonClasses(variant: ButtonVariant = "primary") {
  return `inline-flex min-h-[46px] items-center justify-center gap-[17px] rounded-control px-[19px] text-[11px] font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive disabled:translate-y-0 disabled:cursor-not-allowed disabled:bg-disabled disabled:text-white disabled:opacity-70 motion-reduce:transform-none ${variantClasses[variant]}`;
}
