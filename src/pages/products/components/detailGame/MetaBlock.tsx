import React from "react";

const MetaBlock = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => {
  return (
    <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/50">
      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">
        {label}
      </p>
      <div className="text-sm text-slate-200">{value || "—"}</div>
    </div>
  );
};

export default MetaBlock;
