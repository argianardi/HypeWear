"use client";

import React from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

const HeroSection = () => {
  const handleScroll = () => {
    const target = document?.getElementById("our-collection");
    const headerOffset = 100;

    if (target) {
      const elementPosition =
        target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="hero h-[580px]"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60" />
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-[500px] xl:max-w-[750px] px-1 md:px-4">
          {/* Logo */}
          <div className="flex items-center gap-2 mx-auto w-fit">
            <Image src={"/logo.png"} width={28} height={28} alt="logo" />
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white">
              HypeWear
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 mb-5 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-6 xs:leading-7 sm:leading-8 md:leading-9 lg:leading-10 xl:leading-[48px] 2xl:leading-[56px] text-white font-semibold">
            Ekspresikan Gaya mu dengan Koleksi Terbaru Kami
          </h1>

          {/* Paragraph */}
          <p className="mb-5 text-white text-xs md:text-sm leading-4 2xl:leading-[21px] max-w-full md:max-w-[600px] mx-auto font-normal">
            Temukan koleksi pilihan yang dirancang untuk menyempurnakan gaya mu.
            Dari kebutuhan klasik yang abadi hingga tren terbaru, setiap item
            dibuat untuk menciptakan kesan. Semua yang kamu butuhkan ada di satu
            tempat.
          </p>

          {/* Button */}
          <button
            className="flex items-center gap-2 mx-auto px-3 sm:px-4 md:px-5 lg:px-6 border border-white py-2 sm:py-2.5 md:py-3 lg:py-4 font-bold text-xs sm:text-sm md:text-base lg:text-lg text-white rounded-[36px]"
            onClick={handleScroll}
          >
            <span>Mulai Sekarang</span>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
