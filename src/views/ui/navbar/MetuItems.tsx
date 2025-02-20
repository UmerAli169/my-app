import React from 'react';

interface MenuItemProps {
  label: string;
  enabled: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, enabled }) => {
  return (
    <li>
      <button className={`flex items-center  ${enabled ? 'text-black' : 'text-gray-400'}`}>
        <span className='font-[poppins] text-[16px] text-[#383838]  font-medium   '>{label}</span>
      </button>
    </li>
  );
};

export default MenuItem;
