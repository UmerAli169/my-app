"use client";
import Wrapper from "@/app/wrapper";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import navbar from "../../Data/header/navbar.json";
import ModalManager from "../auth/modals/ModalManager";
import { CartModal } from "../model/RightModal";
import Link from "next/link";
import SearchBar from "../../components/navbar/SearchBar";
import DesktopMenu from "../../components/navbar/DesktopMenu";
import IconSection from "../../components/navbar/IconSection";
import MobileMenu from "../../components/navbar/MobileMenu";

const Header = () => {
  const router = useRouter();
  const [menuItems, setMenuItems]: any = useState([]);
  const [icons, setIcons]: any = useState([]);
  const [mobileMenu, setMobileMenu]: any = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    setMenuItems(navbar.menuItems);
    setIcons(navbar.icons);
    setMobileMenu(navbar.mobileMenu);
  }, []);

  const closeModal = () => setActiveModal(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleAccountClick = () => {
    isLoggedIn
      ? router.push("/Account/changepassword")
      : setActiveModal("login");
  };

  return (
    <>
      <nav className="bg-[#FFFFFF] relative">
        <Wrapper>
          {isSearchActive ? (
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              setIsSearchActive={setIsSearchActive}
            />
          ) : (
            <div className="flex justify-between py-[16px]">
              <div className="lg:hidden">
                <button onClick={toggleMenu}>
                  {mobileMenu && (
                    <img
                      src={mobileMenu.img}
                      alt={mobileMenu.label}
                      className="w-[24px] h-[24px]"
                    />
                  )}
                </button>
              </div>

              <Link
                className="text-[#383838] text-[24px] font-medium leading-[25px]"
                href={"/"}
              >
                <span className="text-[#F5A3B7]">Bloom </span>Beauty
              </Link>

              <DesktopMenu menuItems={menuItems} />
              <IconSection
                icons={icons}
                handleAccountClick={handleAccountClick}
                setIsSearchActive={setIsSearchActive}
                setIsCartOpen={setIsCartOpen}
              />
            </div>
          )}
        </Wrapper>
      </nav>

      <MobileMenu
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        mobileMenu={mobileMenu}
        menuItems={menuItems}
        icons={icons}
      />
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={[]}
      />
      <ModalManager
        activeModal={activeModal}
        closeModal={closeModal}
        setActiveModal={setActiveModal}
      />
    </>
  );
};

export default Header;
