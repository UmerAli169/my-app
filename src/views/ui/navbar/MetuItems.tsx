import React from 'react';

interface MenuItemProps {
  label: string;
  enabled: boolean;
  hasSubmenu?: boolean; 
}

const MenuItem: React.FC<MenuItemProps> = ({ label, enabled, hasSubmenu }) => {
  return (
    <li className="flex justify-between items-center">
      <button className={`flex items-center ${enabled ? 'text-black' : 'text-gray-400'}`}>
        <span className=' text-[16px] text-[#383838] font-medium'>{label}</span>
      </button>

      {hasSubmenu && (
        <img 
          src="/chevron.svg" 
          alt="submenu" 
          className="w-[12px] h-[12px] md:block sm:block hidden"
        />
      )}
    </li>
  );
};

export default MenuItem;
