'use client';
import Wrapper from '@/app/wrapper';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MenuItem from '../../views/ui/navbar/MetuItems';
import navbar from '../../Data/header/navbar.json';
import close from '../../Data/ShardData/closeMenu.json';
import ModalManager from '../auth/modals/ModalManager';

const Header = () => {
  const router = useRouter();

  const [menuItems, setMenuItems] = useState<{ label: string; enabled: boolean }[]>([]);
  const [icons, setIcons] = useState<{ img: string; label: string }[]>([]);
  const [mobileMenu, setMobileMenu] = useState<{ img: string; label: string } | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<'login' | 'register' | 'recover' | 'reset' | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setMenuItems(navbar.menuItems);
    setIcons(navbar.icons);
    setMobileMenu(navbar.mobileMenu);
  }, []);

  const closeModal = () => setActiveModal(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleAccountClick = () => {
    if (isLoggedIn) {
      router.push('/Account/changepassword');
    } else {
      setActiveModal('login');
    }
  };

  return (
    <>
      <nav className="bg-[#FFFFFF] relative">
        <Wrapper>
          {isSearchActive ? (
            <div className="flex justify-center py-[16px] ">
              <div className="flex items-center bg-[#DBDBEA]  gap-2 border-gray-300 rounded-lg px-2 py-1 w-full w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  className="w-full outline-none text-sm bg-[#DBDBEA]  text-gray-700 py-[15px]"
                />
                <div className='w-[14px] mr-[15px] ' onClick={() => setIsSearchActive(false)}>

                  <img src="/cross.svg" alt="" />
                </div>

              </div>
            </div>
          ) : (
            <div className="flex justify-between py-[16px]">
              <div className="lg:hidden">
                <button onClick={toggleMenu}>
                  {mobileMenu && <img src={mobileMenu.img} alt={mobileMenu.label} className="w-[24px] h-[24px]" />}
                </button>
              </div>

              <p className="text-[#383838] text-[24px] font-medium leading-[25px]">
                <span className="text-[#F5A3B7]">Bloom </span>Beauty
              </p>

              <div className="hidden lg:flex items-center">
                <ul className="flex gap-[40px]">
                  {menuItems.map((item) => (
                    <MenuItem key={item.label} label={item.label} enabled={item.enabled} />
                  ))}
                </ul>
              </div>

              <div className="flex gap-[20px] text-[#383838] font-normal">
                {icons.map(({ img, label }) => (
                  <div
                    key={label}
                    className={`group flex flex-col items-center cursor-pointer ${label.toLowerCase() !== "cart" ? "hidden lg:flex" : ""
                      }`}
                    onClick={() => {
                      if (label.toLowerCase() === "account") {
                        handleAccountClick();
                      } else if (label.toLowerCase() === "search") {
                        setIsSearchActive(true);
                      }
                    }}
                  >
                    <img src={img} alt={label} className="w-[24px] h-[24px]" />
                    <p className="text-[12px] font-normal group-hover:text-[#F5A3B7]">{label}</p>
                  </div>
                ))}
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
