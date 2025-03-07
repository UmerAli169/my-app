"use client";
import Wrapper from "@/app/wrapper";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MenuItem from "../../components/navbar/MetuItems";
import navbar from "../../Data/header/navbar.json";
import ModalManager from "../auth/modals/ModalManager";
import { CartModal } from "../model/RightModal";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  const [menuItems, setMenuItems] = useState<
    { label: string; enabled: boolean }[]
  >([]);
  const [icons, setIcons] = useState<{ img: string; label: string }[]>([]);
  const [mobileMenu, setMobileMenu] = useState<{
    img: string;
    label: string;
  } | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<
    "login" | "register" | "recover" | "reset" | null
  >(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
    if (isLoggedIn) {
      router.push("/Account/changepassword");
    } else {
      setActiveModal("login");
    }
  };

  return (
    <>
      <nav className="bg-[#FFFFFF] relative">
        <Wrapper>
          {isSearchActive ? (
            <div className="flex justify-center py-[16px] ">
              <div className="flex items-center bg-[#DBDBEA]  gap-2 border-gray-300 rounded-lg px-2 py-1 w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  className="w-full outline-none text-sm bg-[#DBDBEA] text-gray-700 py-[15px]"
                />
                <div
                  className="w-[14px] mr-[15px] filter brightness-0 cursor-pointer"
                  onClick={() => setIsSearchActive(false)}
                >
                  <img src="/svgs/Shared/cross/cross.svg" alt="Close" />
                </div>
              </div>
            </div>
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

              <div className="hidden lg:flex items-center">
                <ul className="flex gap-[40px]">
                  {menuItems.map((item) => (
                    <MenuItem
                      key={item.label}
                      label={item.label}
                      enabled={item.enabled}
                    />
                  ))}
                </ul>
              </div>

              <div className="flex gap-[20px] text-[#383838] font-normal">
                {icons.map(({ img, label }) => (
                  <div
                    key={label}
                    className={`group flex flex-col items-center cursor-pointer ${
                      label.toLowerCase() !== "cart" ? "hidden lg:flex" : ""
                    }`}
                    onClick={() => {
                      if (label.toLowerCase() === "account") {
                        handleAccountClick();
                      } else if (label.toLowerCase() === "search") {
                        setIsSearchActive(true);
                      } else if (label.toLowerCase() === "cart") {
                        setIsCartOpen(true);
                      }
                    }}
                  >
                    <img src={img} alt={label} className="w-[24px] h-[24px]" />
                    <p className="text-[12px] font-normal group-hover:text-[#F5A3B7]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {isMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-50">
              <div
                className="fixed inset-0 bg-black bg-opacity-25"
                onClick={toggleMenu}
              />
              <div className="fixed top-0 left-0 bottom-0 w-full max-w-sm bg-white">
                <div className="flex justify-between items-center p-4 bg-[#F5A3B7]">
                  <span className="text-lg font-semibold text-white">MENU</span>

                  {mobileMenu && (
                    <img
                      src="/svgs/Shared/cross/cross.svg"
                      alt="Close Menu"
                      onClick={toggleMenu}
                      className="w-[14px] h-[14px] cursor-pointer"
                    />
                  )}
                </div>

                <div className="p-4 space-y-4">
                  {icons
                    .filter(({ label }) => label.toLowerCase() !== "cart")
                    .map(({ img, label }) => (
                      <div
                        key={label}
                        className="flex items-center p-2 text-[#383838]"
                      >
                        <img
                          src={img}
                          alt={label}
                          className="w-[24px] h-[24px] mr-2"
                        />
                        <span className="font-[poppins] text-[16px] font-normal">
                          {label.toUpperCase()}
                        </span>
                      </div>
                    ))}

                  <ul className="space-y-4">
                    {menuItems.map((item) => (
                      <MenuItem
                        key={item.label}
                        label={item.label}
                        enabled={item.enabled}
                        disableHover={true}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </Wrapper>
      </nav>

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
