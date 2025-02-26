import React from "react";
import bestsellers from "../../../Data/header/BestSeller.json";



const NavbarBestSellerDropdown = () => {
  return (
    <div className="absolute  top-full left-0 top-0 w-full bg-white shadow-lg  flex  justify-center   z-20">
            <div className="flex w-full max-w-[809px] py-[50px]">
            <div className="w-1/4 ">


<ul className="space-y-2">
{bestsellers.bestsellers.categories.map((category, index) => (
    <li key={index} className="font-medium text-[15px] text-[#4F4F4F] hover:text-black cursor-pointer flex gap-[14px]">
      {category}
    </li>
  ))}
</ul>
</div>
  
      <img src="howerline.svg" alt="" />

      <div className="w-3/4 pl-6 grid grid-cols-4 gap-4">
        {bestsellers.bestsellers.products.map((product, index) => (
          <div key={index} className="text-center">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg" />
            <h4 className="font-medium text-black mt-2">{product.name}</h4>
            <p className="text-sm text-gray-600">{product.description}</p>
            <span className="text-black font-semibold">{product.price}</span>
          </div>
        ))}
      </div></div>
    </div>
  );
};
 
export default NavbarBestSellerDropdown;
