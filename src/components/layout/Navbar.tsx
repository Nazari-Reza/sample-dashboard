import React from "react";
import { useLocation } from "react-router-dom";

const PAGE_TITLES: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/users": "Users",
  "/products": "Products",
};
const Navbar = () => {
  const { pathname } = useLocation();
  const title = PAGE_TITLES[pathname] ?? "Dashboard";
  return (
    <header className="h-16 bg-slate-950/80 backdrop-blur border-b border-slate-800 flex items-center px-6 sticky top-0 z-10">
      <div>
        <p className="text-xs text-slate-500">Pages / {title}</p>
        <h1 className="text-base font-semibold text-white">{title}</h1>
      </div>
    </header>
  );
};

export default Navbar;
