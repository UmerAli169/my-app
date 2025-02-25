import React, { useState } from "react";
import Link from "next/link";
import NavbarShowAllDropDown from "../DropdownMenu/NavbarShowAllDropDown";
import NavbarBestSellerDropdown from "../DropdownMenu/NavbarBestSellerDropdown";

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
  href={
    label.toLowerCase() === "aboutus"
      ? "/AboutUs"
      : label.toLowerCase() === "blog"
      ? "/Blogs"
      : "/"
  }
  className={`flex items-center ${enabled ? "text-black" : "text-gray-400"}`}
>
  <span className="text-[16px] text-[#383838] font-medium">{label}</span>
</Link>

      {hasSubmenu && (
        <img src="/chevron.svg" alt="submenu" className="w-[12px] h-[12px] md:block sm:block hidden" />
      )}

      {isHovered && label === "SHOP ALL" && <NavbarShowAllDropDown />}
      {isHovered && label === "Bestsellers" && <NavbarBestSellerDropdown  />}
    </li>
  );
};

export default MenuItem;
