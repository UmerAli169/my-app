"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function Filters() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    productType: false,
    ingredientType: false,
    skinType: true,
    priceRange: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="w-[250px] bg-white p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-bold flex items-center gap-1">
        FILTERS <span className="text-red-500">*</span>
      </h2>

      {/* Product Type */}
      <div className="border-b py-2">
        <button
          className="w-full flex justify-between items-center text-gray-700"
          onClick={() => toggleSection("productType")}
        >
          Product Type
          {openSections.productType ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {/* Ingredient Type */}
      <div className="border-b py-2">
        <button
          className="w-full flex justify-between items-center text-gray-700"
          onClick={() => toggleSection("ingredientType")}
        >
          Ingredient Type
          {openSections.ingredientType ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {/* Skin Type */}
      <div className="border-b py-2">
        <button
          className="w-full flex justify-between items-center text-gray-700"
          onClick={() => toggleSection("skinType")}
        >
          Skin Type <span className="text-red-500">*</span>
          {openSections.skinType ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        {openSections.skinType && (
          <div className="mt-2 space-y-2">
            {["All", "Combination/Oily", "Dry", "Normal", "Sensitive"].map((type) => (
              <label key={type} className="flex items-center gap-2 text-gray-700">
                <input type="checkbox" className="w-4 h-4" />
                {type}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="border-b py-2">
        <button
          className="w-full flex justify-between items-center text-gray-700"
          onClick={() => toggleSection("priceRange")}
        >
          Price Range <span className="text-red-500">*</span>
          {openSections.priceRange ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        {openSections.priceRange && (
          <div className="mt-2 space-y-2">
            {["Under $25", "$25 - $50", "$50 - $100"].map((range) => (
              <label key={range} className="flex items-center gap-2 text-gray-700">
                <input type="radio" name="price" className="w-4 h-4" />
                {range}
              </label>
            ))}
            {/* Custom Price Range */}
            <label className="flex items-center gap-2 text-gray-700">
              <input type="radio" name="price" className="w-4 h-4" />
              <input type="text" placeholder="$ Min" className="border p-1 w-16 text-center text-sm rounded" />
              <input type="text" placeholder="$ Max" className="border p-1 w-16 text-center text-sm rounded" />
            </label>
          </div>
        )}
      </div>

      {/* Apply Button */}
      <button className="w-full mt-4 py-2 bg-gray-100 border rounded hover:bg-gray-200">
        Apply
      </button>
    </div>
  );
}
