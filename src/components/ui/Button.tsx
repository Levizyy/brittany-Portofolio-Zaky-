import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "outline";
};

const variantClasses = {
  primary:
    "bg-[#6C63FF] text-white hover:bg-[#5a52e0] neon-glow",
  outline:
    "border border-white/20 text-white hover:bg-white/10",
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center px-6 py-3 rounded font-medium transition ${variantClasses[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}
