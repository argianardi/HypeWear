import { RiShoppingBag3Line } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

import SearchInput from "./SearchInput";
import { highlightedCategories } from "@/constans/fakeData";

const Header = () => {
  return (
    <>
      {/* Header */}
      <div className="drawer bb">
        <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <header className="bg-OffWhite fixed z-[9999] top-0 w-full max-w-[1440px] -ml-1">
            <div className="w-full px-6  flex justify-between items-center overflow-x-hidden mx-auto py-3 gap-28">
              <div className="flex items-center gap-12 flex-grow">
                <Link href={"/"} className="flex items-center gap-2">
                  <Image src={"/logo.png"} width={28} height={28} alt="logo" />
                  <span className="text-xl font-bold text-CoolGray">
                    HypeWear
                  </span>
                </Link>

                <div className="flex-grow hidden lg:block">
                  <SearchInput />
                </div>
              </div>

              {/* Hamburger Menu */}
              <div className="lg:hidden">
                <label
                  htmlFor="mobile-drawer"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost text-CoolGray text-2xl"
                >
                  <HiOutlineMenuAlt3 />
                </label>
              </div>

              {/* Profile & Cart (Visible on Large Screens) */}
              <div className="hidden lg:flex items-center gap-4">
                <Link href={"/profile"} className="flex items-center gap-2">
                  <Image
                    width={32}
                    height={32}
                    alt="profile"
                    className="rounded-full"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                  <h4 className="text-CoolGray font-semibold text-sm">
                    Nurul Huda
                  </h4>
                </Link>
                <Link href={"/cart"} className="flex items-center gap-2">
                  <RiShoppingBag3Line color="black" size={20} />
                  <h4 className="text-CoolGray font-semibold text-sm">
                    Cart(0)
                  </h4>
                </Link>
              </div>
            </div>

            {/* Highlighted Categories */}
            <div className="w-full px-4 sm:px-6 py-5 flex items-center gap-4 overflow-x-auto bg-CoolGray scrollbar-hide">
              <h4 className="text-PureWhite font-bold text-sm sm:text-base flex-none">
                Mulai dari Rp.25k
              </h4>
              <span className="hidden sm:block text-PureWhite">|</span>
              {highlightedCategories.map((category, index) => (
                <Link
                  key={index}
                  href={`/products/category/${category}`}
                  className="flex-none text-PureWhite font-normal text-sm sm:text-base hover:underline whitespace-nowrap"
                >
                  {category}
                </Link>
              ))}
            </div>
          </header>
        </div>

        {/* Drawer Menu */}
        <div className="drawer-side z-[9999]">
          <label
            htmlFor="mobile-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-OffWhite border-r-[1px] border-CoolGray w-auto min-h-full p-4 space-y-4">
            {/* User Profile */}
            <li>
              <div className=" flex justify-between items-center">
                <Link
                  href={"/profile"}
                  className="flex items-center gap-2 text-CoolGray font-semibold text-sm"
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
                {/* Close Button */}
                <label
                  htmlFor="mobile-drawer"
                  aria-label="close menu"
                  className="btn btn-ghost text-CoolGray text-xl"
                >
                  ✕
                </label>
              </div>
            </li>

            {/* Cart */}
            <li>
              <Link
                href={"/cart"}
                className="flex items-center gap-2 text-CoolGray font-semibold text-sm"
              >
                <RiShoppingBag3Line size={20} />
                Cart(0)
              </Link>
            </li>

            {/* Search Input */}
            <li>
              <SearchInput />
            </li>

            {/* Highlighted Categories */}
            {highlightedCategories.map((category, index) => (
              <li key={index}>
                <Link
                  href={`/products/category/${category}`}
                  className="text-CoolGray font-normal text-sm"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
