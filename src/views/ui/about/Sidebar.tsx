"use client"; // Required for client components

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname(); 

  const links = [
    { label: "About Us", href: "/AboutUs" },
    { label: "Shipping & Returns", href: "/shipping-returns" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "FAQs", href: "/faqs" },
  ];

  return (
    <div className="lg:min-w-[250px] bg-[#FFFFFF] rounded-[6px] py-[20px] px-[30px]">
      <div>

      <ul className="flex flex-col gap-[20px]">
        {links.map((link, index) => {
          const isActive = pathname === link.href; 
          return (
            <li key={index}>
              <Link
                href={link.href}
                className={`block text-[16px] font-medium ${
                  isActive ? "text-[#F5A3B7] font-medium" : "text-[#383838] hover:text-black"
                }`}
                >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
        </div>
    </div>
  );
};

export default Sidebar;
