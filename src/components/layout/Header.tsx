'use client';
import Wrapper from '@/app/wrapper';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import MenuItem from '../../views/ui/navbar/MetuItems'; 
import data from './heraderData.json';

const Header = () => {
  const [menuItems, setMenuItems] = useState<{ label: string; enabled: boolean }[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMenuItems(data.menuItems);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <nav className='bg-[#FFFFFF]'>
    <Wrapper>
        <div className='flex justify-between py-[16px]'>
          <p className='text-[#383838] text-[24px] font-[poppins] font-medium leading-[25px]'>
            <span className='text-[#F5A3B7]'>Bloom </span>Beauty
          </p>

          <div className='hidden lg:flex items-center '>
            <ul className='flex gap-[40px]'>
              {menuItems.map((item) => (
                <MenuItem key={item.label} label={item.label} enabled={item.enabled} />
              ))}
            </ul>
          </div>

          <div className='lg:hidden flex items-center'>
            <button onClick={toggleMenu} className='text-black bg-[#F5A3B7] px-4 py-2 rounded-md'>
              MENU
            </button>
          </div>

          <div className='flex gap-[20px]'>
            {[
              { img: '/search.svg', label: 'Search' },
              { img: '/account.svg', label: 'Account' },
              { img: '/cart.svg', label: 'Cart' }
            ].map(({ img, label }) => (
              <div key={label} className='flex flex-col items-center'>
                <img src={img} alt={label} className='w-[24px] h-[24px]' />
                <p className='font-[poppins] text-[12px] text-[#383838] font-normal'>{label}</p>
              </div>
            ))}
          </div>
        </div>

  
        {isMenuOpen && (
          <div className='lg:hidden absolute top-0 left-0 w-full bg-[#F5A3B7] text-white shadow-md z-50'>
            <div className='flex justify-between items-center p-4'>
              <span className='text-lg font-semibold'>MENU</span>
              <button onClick={toggleMenu} className='text-white text-xl'>✕</button>
            </div>
            <ul className='bg-white text-black p-4 space-y-4'>
              {menuItems.map((item) => (
                <MenuItem key={item.label} label={item.label} enabled={item.enabled} />
              ))}
            </ul>
          </div>
        )}
    </Wrapper>
      </nav>
  );
};

export default Header;
