import React from "react";
import dropdownData from "../../../Data/header/ShowApp.json";

const DropdownMenu: React.FC = () => {
  return (
    <div className="absolute left-0 top-full w-[600px] bg-white shadow-lg p-6 grid grid-cols-3 gap-6">
      {dropdownData.dropdownItems.map((category, index) => (
        <div key={index}>
          <h4 className="font-semibold text-[#383838]">{category.title}</h4>
          <ul className="mt-2 space-y-1">
            {category.links.map((item, i) => (
              <li key={i} className="text-sm text-gray-600 hover:text-black">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
