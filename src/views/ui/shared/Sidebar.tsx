"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface SidebarProps {
  title?: string;
  links?: { label: string; href: string }[];
  collapsibleSections?: {
    key: string;
    title: string;
    href?: string;
    items: { label: string; href: string }[];
  }[];
}

const Sidebar = ({ title, links = [], collapsibleSections = [] }: SidebarProps) => {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (event: React.MouseEvent, section: string) => {
    event.preventDefault(); // Prevent navigation when clicking the toggle
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="lg:min-w-[250px] bg-[#FFFFFF] rounded-[6px] py-[20px] px-[30px]">
      {title && <h2 className="text-[24px] font-bold text-[#383838] mb-4">{title}</h2>}

      <ul className="space-y-[20px]">
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <li key={index}>
              <Link
                href={link.href}
                className={`block text-[16px] ${isActive ? "text-[#F5A3B7] font-semibold" : "text-[#383838]"}`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {collapsibleSections.map((section) => {
        const isActive = pathname === section.href;

        return (
          <div key={section.key} className="mt-6">
            <div
              className={`hover:text-[#E49BAE] font-semibold flex items-center justify-between cursor-pointer ${isActive ? "text-[#F5A3B7]" : "text-[#383838]"
                }`}
            >
              <Link href={section.href || "#"}>{section.title}</Link>

              <button onClick={(e) => toggleSection(e, section.key)} className="ml-2">
                {openSections[section.key] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>

            {openSections[section.key] && (
              <ul className="space-y-2 mt-2">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} className="text-[16px] text-[#383838] block hover:text-[#E49BAE]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
