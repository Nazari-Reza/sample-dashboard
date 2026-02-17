import React from "react";

const UsersHeader = ({ total }: { total: number }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <h2 className="text-xl font-semibold text-white">All Users</h2>
        <p className="text-sm text-slate-400 mt-0.5">
          {total > 0 ? `${total} users total` : "Loading…"}
        </p>
      </div>
    </div>
  );
};
export default UsersHeader;
