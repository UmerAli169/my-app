import React from "react";
import bestsellers from "../../../Data/header/BestSeller.json";



const NavbarBestSellerDropdown = () => {
  return (
    <div className="absolute left-0 top-full w-[800px] bg-white shadow-lg p-6 flex">
      <div className="w-1/4 border-r pr-4">
        <ul className="space-y-2">
          {bestsellers.bestsellers.categories.map((category, index) => (
            <li key={index} className="font-medium text-[#383838] hover:text-black cursor-pointer">
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 pl-6 grid grid-cols-3 gap-4">
        {bestsellers.bestsellers.products.map((product, index) => (
          <div key={index} className="text-center">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg" />
            <h4 className="font-medium text-black mt-2">{product.name}</h4>
            <p className="text-sm text-gray-600">{product.description}</p>
            <span className="text-black font-semibold">{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarBestSellerDropdown;
