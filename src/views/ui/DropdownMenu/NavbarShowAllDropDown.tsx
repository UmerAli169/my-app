import React from "react";
import dropdownData from "../../../Data/header/ShowApp.json";

const NavbarShowAllDropDown: React.FC = () => {
  return (
    <div className="absolute left-0 top-full w-[800px] bg-white shadow-lg p-6 flex">
      <div className="w-1/4 border-r pr-4">
        <ul className="space-y-2">
          {dropdownData.categories?.map((category: string, index: number) => (
            <li key={index} className="font-medium text-[#383838] hover:text-black cursor-pointer">
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 grid grid-cols-3 gap-6">
        {dropdownData.dropdownItems?.map(
          (category: { title: string; links: string[] }, index: number) => (
            <div key={index}>
              <h4 className="font-semibold text-[#383838]">{category.title}</h4>
              <ul className="mt-2 space-y-1">
                {category.links?.map((item: string, i: number) => (
                  <li key={i} className="text-sm text-gray-600 hover:text-black">
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default NavbarShowAllDropDown;
