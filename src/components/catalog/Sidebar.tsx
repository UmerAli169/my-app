"use client";
import Link from "next/link";
import { useState } from "react";
import categoriesData from "../../Data/categories/categorie.json";

export default function Sidebar() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (slug: string) => {
    setOpenCategory(openCategory === slug ? null : slug);
  };

  return (
    <div className="w-1/4 p-4 bg-white">
      <h2 className="font-bold text-lg mb-4">Shop All</h2>
      <ul>
        {categoriesData.map((category) => (
          <li key={category.slug} className="mb-2">
            <div
              onClick={() => toggleCategory(category.slug)}
              className="flex justify-between items-center cursor-pointer font-semibold text-gray-800"
            >
              {category.name}
              {category.subcategories?.length > 0 && (
                <span>{openCategory === category.slug ? "▲" : "▼"}</span>
              )}
            </div>

            {openCategory === category.slug && category.subcategories?.length > 0 && (
              <ul className="ml-4 mt-2">
                {category.subcategories.map((sub) => (
                  <li key={sub.slug} className="mb-1">
                    <Link href={`/screen/catalog/${category.slug}/${sub.slug}`} className="text-gray-600">
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
