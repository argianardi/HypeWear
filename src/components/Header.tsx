import { RiShoppingBag3Line } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

import SearchInput from "./SearchInput";
import { highlightedCategories } from "@/constans/fakeData";

const Header = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-OffWhite sticky z-[9999] top-0  w-full">
        <div className="w-full px-6  flex items-center overflow-x-hidden mx-auto space-x-4 sm:space-x-6 md:space-x-4 lg:space-x-8 py-2 gap-28">
          <div className="flex items-center gap-12 flex-grow">
            <Link href={"/"} className="flex items-center gap-2">
              <Image src={"/logo.png"} width={28} height={28} alt="logo" />
              <span className="text-xl font-bold text-CoolGray"> HypeWear</span>
            </Link>

            <div className="flex-grow">
              <SearchInput />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href={"/profile"} className=" gap-2  flex items-center">
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
            <Link href={"/cart"} className="hidden md:flex items-center gap-2">
              <RiShoppingBag3Line color="black" size={20} />
              <h4 className="text-CoolGray font-semibold text-sm">Cart(0)</h4>
            </Link>
          </div>
        </div>
        <div className=" w-full px-6 py-5 flex items-center overflow-x-hidden  gap-6   bg-CoolGray">
          <h4 className="text-PureWhite font-bold text-base">
            Mulai dari Rp.25k
          </h4>
          <span>|</span>
          {highlightedCategories.map((category, index) => (
            <Link
              key={index}
              href={`/products/category/${category}`}
              className="text-PureWhite font-normal text-sm hover:underline"
            >
              {category}
            </Link>
          ))}
        </div>
      </header>
      {/* Menu Sidebar */}
      {/* <MenuSidebar
        isMenuSidebarOpen={showMenuSidebar}
        setIsMenuSidebarOpen={setShowMenuSidebar}
      /> */}
    </>
  );
};

export default Header;
