import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-body font-semibold transition-colors whitespace-nowrap";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

const variants: Record<Variant, string> = {
  primary: "bg-app-primary text-app-bg hover:bg-app-primary/90 clip-boxcut",
  secondary:
    "bg-app-surface-alt text-app-text border border-app-border-strong rounded-app-sm hover:border-app-primary/40",
  ghost: "text-app-primary hover:text-app-primary/80 px-3",
};

type SharedProps = {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

type AnchorButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type ButtonProps = AnchorButtonProps | NativeButtonProps;

export function Button({
  as = "button",
  variant = "primary",
  size = "lg",
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (as === "a") {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {icon}
    </button>
  );
}
