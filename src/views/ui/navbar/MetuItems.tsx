import React, { useState } from "react";
import Link from "next/link";
import DropdownMenu from "../DropdownMenu/NavbarDropDown"; 

interface MenuItemProps {
  label: string;
  enabled: boolean;
  hasSubmenu?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, enabled, hasSubmenu }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li 
      className="relative flex justify-between items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={label.toLowerCase() === "aboutus" ? "/AboutUs" : "/"}
        className={`flex items-center ${enabled ? "text-black" : "text-gray-400"}`}
      >
        <span className="text-[16px] text-[#383838] font-medium">{label}</span>
      </Link>

      {hasSubmenu && (
        <img src="/chevron.svg" alt="submenu" className="w-[12px] h-[12px] md:block sm:block hidden" />
      )}

      {/* Render DropdownMenu when hovering over "SHOP ALL" */}
      {isHovered && label === "SHOP ALL" && <DropdownMenu />}
    </li>
  );
};

export default MenuItem;
