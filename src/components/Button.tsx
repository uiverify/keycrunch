import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "accent" | "outline";
  size?: "default" | "small";
  block?: boolean;
};

export function Button({ variant = "primary", size = "default", block = false, className, ...rest }: Props) {
  const classes = ["button", variant, size === "small" ? "small" : "", block ? "block" : "", className ?? ""].filter(Boolean).join(" ");
  return <button type="button" className={classes} {...rest} />;
}
