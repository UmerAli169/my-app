'use client';
import Wrapper from '@/app/wrapper';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import MenuItem from '../../views/ui/navbar/MetuItems';
import navbar from '../../Data/header/navbar.json';
import close from '../../Data/ShardData/closeMenu.json';

import ModalManager from '../auth/modals/ModalManager';

const Header = () => {
  const [menuItems, setMenuItems] = useState<{ label: string; enabled: boolean }[]>([]);
  const [icons, setIcons] = useState<{ img: string; label: string }[]>([]);
  const [mobileMenu, setMobileMenu] = useState<{ img: string; label: string } | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<'login' | 'register' | 'recover' | 'reset' | null>(null);
  const closeModal = () => setActiveModal(null);

  useEffect(() => {
    setMenuItems(navbar.menuItems);
    setIcons(navbar.icons);
    setMobileMenu(navbar.mobileMenu);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigationIcons = icons.filter((icon) => icon.label.toLowerCase() !== 'cart');
  const cartIcon = icons.find((icon) => icon.label.toLowerCase() === 'cart');

  return (
    <>
      <nav className='bg-[#FFFFFF]'>
        <Wrapper>
          <div className='flex justify-between py-[16px]'>
            <div className='lg:hidden'>
              <button onClick={toggleMenu}>
                {mobileMenu && <img src={mobileMenu.img} alt={mobileMenu.label} className='w-[24px] h-[24px]' />}
              </button>
            </div>

            <p className='text-[#383838] text-[24px] font-[poppins] font-medium leading-[25px]'>
              <span className='text-[#F5A3B7]'>Bloom </span>Beauty
            </p>

            <div className='hidden lg:flex items-center'>
              <ul className='flex gap-[40px]'>
                {menuItems.map((item) => (
                  <MenuItem key={item.label} label={item.label} enabled={item.enabled} />
                ))}
              </ul>
            </div>

            <div className='flex gap-[20px] text-[#383838] font-normal'>
              {icons.map(({ img, label }) => (
                <div
                  key={label}
                  className={`group flex flex-col items-center cursor-pointer ${
                    label.toLowerCase() !== 'cart' ? 'hidden lg:flex' : ''
                  }`}
                  onClick={() => {
                    if (label.toLowerCase() === 'account') {
                      setActiveModal('login');
                    }
                  }}
                >
                  <img src={img} alt={label} className='w-[24px] h-[24px]' />
                  <p className='font-[poppins] text-[12px] font-normal group-hover:text-[#F5A3B7]'>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {isMenuOpen && (
            <div className='lg:hidden fixed inset-0 z-50'>
              <div className='fixed inset-0 bg-black bg-opacity-25' onClick={toggleMenu} />
              <div className='fixed top-0 left-0 bottom-0 w-full max-w-sm bg-white'>
                <div className='flex justify-between items-center p-4 bg-[#F5A3B7]'>
                  <span className='text-lg font-semibold text-white'>MENU</span>

                  {close && (
                    <img
                      src={close.closeMenu.img}
                      alt={close.closeMenu.label}
                      onClick={toggleMenu}
                      className='w-[14px] h-[14px] cursor-pointer'
                    />
                  )}
                </div>

                <div className='p-4 space-y-4'>
                  {navigationIcons.map(({ img, label }) => (
                    <div key={label} className='flex items-center p-2 text-[#383838]'>
                      <img src={img} alt={label} className='w-[24px] h-[24px] mr-2' />
                      <span className='font-[poppins] text-[16px] font-normal'>{label.toUpperCase()}</span>
                    </div>
                  ))}

                  <ul className='space-y-4'>
                    {menuItems.map((item) => (
                      <MenuItem
                        key={item.label}
                        label={item.label}
                        enabled={item.enabled}
                        hasSubmenu={item?.hasSubmenu}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </Wrapper>
      </nav>
      
      <ModalManager activeModal={activeModal} closeModal={closeModal} setActiveModal={setActiveModal} />
    </>
  );
};

export default Header;
