import React from "react";

const UsersTableHeader = () => {
  return (
    <div className="flex items-center px-4 py-3 border-b border-slate-700 bg-slate-800/50 gap-4">
      <div className="w-56 shrink-0">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          User
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Email
        </span>
      </div>
      <div className="w-40 shrink-0 hidden lg:block">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Phone
        </span>
      </div>
      <div className="w-28 shrink-0">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Role
        </span>
      </div>
      <div className="w-40 shrink-0 hidden xl:block">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Department
        </span>
      </div>
      <div className="w-16 shrink-0 text-right">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Gender
        </span>
      </div>
    </div>
  );
};
export default UsersTableHeader;
