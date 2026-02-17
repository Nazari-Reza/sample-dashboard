import React from "react";

type BadgeVariant = "success" | "danger" | "info" | "warning" | "neutral";

interface Props {
  label: string;
  variant?: BadgeVariant;
}
const styles: Record<BadgeVariant, string> = {
  success: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20",
  danger: "bg-red-500/10 text-red-400 ring-red-500/20",
  info: "bg-blue-500/10 text-blue-400 ring-blue-500/20",
  warning: "bg-yellow-500/10 text-yellow-400 ring-yellow-500/20",
  neutral: "bg-slate-500/10 text-slate-400 ring-slate-500/20",
};
const Badge = ({ label, variant = "neutral" }: Props) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ring-1 ring-inset ${styles[variant]}`}
    >
      {label}
    </span>
  );
};

export default Badge;
