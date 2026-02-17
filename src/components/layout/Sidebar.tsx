import React from "react";
import { useAuth } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/products", label: "Products" },
];

const Sidebar = () => {
  const { logout, user } = useAuth();

  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 flex flex-col">
      <div className="px-6 py-5 border-b border-slate-800">
        <span className="text-xl font-bold text-white">
          {[`${user?.firstName ?? ""}`, `${user?.lastName ?? ""}`].join(" ")}
        </span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="px-4 py-4 border-t border-slate-800">
        <button
          onClick={logout}
          className="w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
