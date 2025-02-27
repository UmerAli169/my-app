import Link from "next/link";
import { useState } from "react";
import categoriesData from "@/data/categories.json";

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-100 p-4">
      <h2 className="text-lg font-bold">Shop All</h2>
      {categoriesData.map((category) => (
        <div key={category.name}>
          <Link href={`/catalog/${category.slug}`} className="font-semibold">
            {category.name}
          </Link>
          <ul className="ml-4">
            {category.subcategories.map((sub) => (
              <li key={sub.name}>
                <Link href={`/catalog/${category.slug}/${sub.slug}`}>{sub.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
