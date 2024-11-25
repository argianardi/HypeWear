"use client";

import { RiShoppingBag3Line } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

import SearchInput from "./SearchInput";
import { highlightedCategories } from "@/constans/fakeData";
import { useState } from "react";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="relative">
        <div className="w-full max-w-[1920px] px-6 flex fixed bg-OffWhite z-50 top-0  justify-between items-center mx-auto py-3 gap-28">
          {/* Logo and Search Input*/}
          <div className="flex items-center gap-12 flex-grow">
            <Link href={"/"} className="flex items-center gap-2">
              <Image src={"/logo.png"} width={28} height={28} alt="logo" />
              <span className="text-xl font-bold text-gray-700">HypeWear</span>
            </Link>

            <div className="flex-grow hidden lg:block">
              <SearchInput />
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button
              aria-label="open sidebar"
              onClick={toggleDrawer}
              className="p-2 rounded text-gray-700 text-2xl cursor-pointer hover:bg-gray-100"
            >
              <HiOutlineMenuAlt3 />
            </button>
          </div>

          {/* Profile & Cart (Visible on Large Screens) */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href={"/profile"} className="flex items-center gap-2">
              <Image
                width={32}
                height={32}
                alt="profile"
                className="rounded-full"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
              <h4 className="text-gray-700 font-semibold text-sm">
                Nurul Huda
              </h4>
            </Link>
            <Link href={"/cart"} className="flex items-center gap-2">
              <RiShoppingBag3Line color="black" size={20} />
              <h4 className="text-gray-700 font-semibold text-sm">Cart(0)</h4>
            </Link>
          </div>
        </div>

        {/* Highlighted Categories */}
        <div className="w-full px-4 sm:px-6 py-5 mt-16 flex items-center gap-4 overflow-x-auto bg-gray-800 scrollbar-hide">
          <h4 className="text-white font-bold text-sm sm:text-base flex-none">
            Mulai dari Rp.25k
          </h4>
          <span className="hidden sm:block text-white">|</span>
          {highlightedCategories.map((category, index) => (
            <Link
              key={index}
              href={`/products/category/${category}`}
              className="flex-none text-white font-normal text-sm sm:text-base hover:underline whitespace-nowrap"
            >
              {category}
            </Link>
          ))}
        </div>
      </header>

      {/* Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-all duration-500 ease-in-out ${
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      />

      {/* Drawer Content */}
      <div
        className={`fixed top-0 left-0 bg-gray-50 border-r w-64 min-h-screen p-4 space-y-4 z-50 transition-transform duration-500 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <Link
            href={"/profile"}
            className="flex items-center gap-2 text-gray-700 font-semibold text-sm"
          >
            <Image
              width={32}
              height={32}
              alt="profile"
              className="rounded-full"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
            Nurul Huda
          </Link>
          <button
            aria-label="close menu"
            onClick={toggleDrawer}
            className="text-gray-700 text-xl cursor-pointer hover:bg-gray-100 p-2 rounded"
          >
            ✕
          </button>
        </div>

        <Link
          href={"/cart"}
          className="flex items-center gap-2 text-gray-700 font-semibold text-sm"
        >
          <RiShoppingBag3Line size={20} />
          Cart(0)
        </Link>

        <SearchInput />

        {highlightedCategories.map((category, index) => (
          <Link
            key={index}
            href={`/products/category/${category}`}
            className="block text-gray-700 font-normal text-sm"
          >
            {category}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;
