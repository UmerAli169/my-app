"use client"
import Link from "next/link";
import { useState } from "react";
import categoriesData from "../../Data/categories/categorie.json";


export default function Sidebar() {
  return (
    <div className="w-1/4 p-4 bg-gray-100">
      <h2 className="font-semibold mb-4">Categories</h2>
      <ul>
        {categoriesData.map((category) => (
          <li key={category.slug} className="mb-2">
            <Link href={`/screen/catalog/${category.slug}`} className="text-blue-500">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
