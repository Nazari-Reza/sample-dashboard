import React, { ReactNode } from "react";

const UsersTable = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
      {children}
    </div>
  );
};
export default UsersTable;
