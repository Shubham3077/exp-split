import { Logo } from "../assets/logo";
import { UserCircleIcon } from "@heroicons/react/16/solid";

import { navItems } from "../utils/navigationMenu";
import { useState } from "react";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <nav className="my-2">
      {/* Mobile Navbar */}
      <div className="flex justify-between items-center md:hidden sticky z-50 top-2">
        <Logo />
        <UserCircleIcon className="size-7" />
      </div>

      {/* Mobile navigation */}
      <div className="flex justify-between px-4 pt-6 border-b border-gray-100 ">
        {navItems.map((item) => {
          const isActive = item.id === activeMenu;

          return (
            <div
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`flex items-center justify-center gap-2 px-4 pb-3 cursor-pointer`}
            >
              <item.icon
                className={`size-4 ${isActive ? "stroke-2 " : "stroke-1"}`}
              />
              <span
                className={`text-sm ${isActive ? "font-semibold" : "font-normal"}`}
              >
                {item.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* Desktop / tablet navbar */}
    </nav>
  );
};

export default Navbar;
