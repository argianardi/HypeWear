import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className="hero  h-[580px] "
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-[696px]">
          <h1 className="mb-5 text-5xl leading-[56px] text-white font-semibold ">
            Ekspresikan Gaya mu dengan Koleksi Terbaru Kami
          </h1>
          <p className="mb-5 text-white text-sm leading-[21px] max-w-[600px] mx-auto font-normal">
            Temukan koleksi pilihan yang dirancang untuk menyempurnakan gaya mu.
            Dari kebutuhan klasik yang abadi hingga tren terbaru, setiap item
            dibuat untuk menciptakan kesan. Semua yang kamu butuhkan ada di satu
            tempat.
          </p>
          <button className="px-6 py-3 btn btn-outline border-white font-bold text-sm text-white rounded-[36px]">
            <span>Mulai Sekarang</span>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
