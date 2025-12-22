import React from "react";
import NavButton from "../ui/NavButton";

export default function Header() {
  return (
    <div className="top-0 bg-[var(--header-bg-color)] h-[var(--header-height)] sticky border-b-[2px] border-[#D4D1CB] z-50">
      <div className="flex items-center justify-between h-full px-8">
        {/* Left: Logo text */}
        <div className="text-gray-800 text-4xl font-semibold flex-1 text-left">
          KNOWEI
        </div>
        {/* Center: Navigation links */}
        <nav className="flex-1 flex justify-center w-80vw">
          <ul className="flex gap-8 text-lg font-medium text-gray-700">
            <li>
              <NavButton text="toolboxen"></NavButton>
            </li>
            <li>
              <NavButton text="toolbox op maat"></NavButton>
            </li>
            <li>
              <NavButton text="voorbereiden"></NavButton>
            </li>
            <li>
              <NavButton text="mijn verhaal"></NavButton>
            </li>
          </ul>
        </nav>
        <div className="flex-1 flex justify-end">
          <img
            src="../../public/logo.png"
            alt="KNOWEI Logo"
            className="h-10 w-auto"
          />
        </div>
      </div>
    </div>
  );
}
