import React from "react";

const UsersSkeleton = () => {
  return (
    <div className="divide-y divide-slate-800/60">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center px-4 gap-4 h-16 animate-pulse"
        >
          <div className="w-9 h-9 rounded-full bg-slate-700 shrink-0" />
          <div className="flex-1 space-y-1.5">
            <div className="h-3 bg-slate-700 rounded w-32" />
            <div className="h-2 bg-slate-800 rounded w-20" />
          </div>
          <div className="h-3 bg-slate-700 rounded w-40 hidden lg:block" />
          <div className="h-5 bg-slate-700 rounded-full w-16" />
        </div>
      ))}
    </div>
  );
};
export default UsersSkeleton;
