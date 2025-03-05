"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const AccountSidebar = () => {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    orders: false,
    wishlist: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const links = [
    { label: "Contact Information", href: "/Account/contactinformation", className: "text-[#383838] font-semibold" },
    { label: "Change Password", href: "/Account/changepassword", className: "text-[#383838] font-semibold" },
    { label: "Addresses", href: "/Account/addresses", className: "text-[#383838] font-semibold" },
  ];

  const sections = [
    {
      href: "/Account/orders",
      key: "orders",
      title: "Orders",
      items: ["All period", "For this month", "Last this month", "This year", "Last year"],
      titleClass: "hover:text-[#E49BAE] font-semibold cursor-pointer flex items-center justify-between",
    },
    {
      href: "/Account/wishlist",
      key: "wishlist",
      title: "Wishlist",
      items: ["All period", "For this month", "Last this month", "This year", "Last year"],
      titleClass: "hover:text-[#E49BAE] font-semibold cursor-pointer flex items-center justify-between",
    },
  ];

  return (
    <div className="lg:min-w-[250px] bg-[#FFFFFF] rounded-[6px] py-[20px] px-[30px]">
      <h2 className="text-[24px] font-bold text-[#383838] mb-4">Account</h2>

      <ul className="space-y-[20px]">
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <li key={index}>
              <Link
                href={link.href}
                className={`block text-[16px] ${
                  isActive ? "text-[#F5A3B7] font-semibold" : link.className
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {sections.map((section) => (
        <div key={section.key} className="mt-6">
          <Link href={section.href} className={section.titleClass}>
            <span onClick={(e) => {
              e.preventDefault();
              toggleSection(section.key);
            }}>
              {section.title}
            </span>
            {openSections[section.key] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Link>

          {openSections[section.key] && (
            <ul className="space-y-2 mt-2">
              {section.items.map((item, idx) => (
                <li key={idx} className="text-[16px] text-[#383838]">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccountSidebar;
