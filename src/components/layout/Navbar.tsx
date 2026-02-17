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
  return <header className="">Navbar</header>;
};

export default Navbar;
