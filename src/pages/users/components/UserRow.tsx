import React from "react";
import { User } from "../../../api/dummyjson/types";
import Badge from "../../../components/ui/Badge";

const getRoleBadge = (role: string) => {
  if (role === "admin") return "danger";
  if (role === "moderator") return "warning";
  return "info";
};
const UserRow = ({
  index,
  style,
  data,
}: {
  index: number;
  style: React.CSSProperties;
  data: User[];
}) => {
  const user = data[index];
  if (!user) return null;

  return (
    <div
      style={style}
      className={`flex items-center px-4 gap-4 border-b border-slate-800/60 hover:bg-slate-800/40 transition ${
        index % 2 === 0 ? "bg-transparent" : "bg-slate-800/10"
      }`}
    >
      {/* Avatar + Name */}
      <div className="flex items-center gap-3 w-56 shrink-0">
        <img
          src={user.image}
          alt={user.firstName}
          className="w-9 h-9 rounded-full ring-2 ring-slate-700 object-cover"
        />
        <div className="min-w-0">
          <p className="text-sm font-medium text-white truncate">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-xs text-slate-500 truncate">@{user.username}</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex-1 min-w-0">
        <p className="text-sm text-slate-300 truncate">{user.email}</p>
      </div>

      {/* Phone */}
      <div className="w-40 shrink-0 hidden lg:block">
        <p className="text-sm text-slate-400">{user.phone}</p>
      </div>

      {/* Role */}
      <div className="w-28 shrink-0">
        <Badge label={user.role} variant={getRoleBadge(user.role) as any} />
      </div>

      {/* Department */}
      <div className="w-40 shrink-0 hidden xl:block">
        <p className="text-sm text-slate-400 truncate">
          {user.company?.department}
        </p>
      </div>

      {/* Gender */}
      <div className="w-16 shrink-0 text-right">
        <span className="text-xs text-slate-500 capitalize">{user.gender}</span>
      </div>
    </div>
  );
};

export default UserRow;
