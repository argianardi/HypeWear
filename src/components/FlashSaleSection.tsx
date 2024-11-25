"use client";

import { useEffect, useState } from "react";
import FlashSaleProductCard from "./FlashSaleProductCard";
import { featuredProducts } from "@/constans/fakeData";
import Image from "next/image";

const FlashSaleSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const flashSaleEndTime = new Date().getTime() + 1000 * 60 * 60;

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = flashSaleEndTime - now;

      if (distance <= 0) {
        return {
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    };

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredProducts.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-OffWhite px-6 py-8 2xl:py-10">
      {/* Countdown Timer */}
      <div className="mb-6 flex items-center gap-4 md:justify-start justify-between">
        <h4 className="text-xl lg:text-2xl font-bold text-CoolGray">
          Flash Sale
        </h4>
        <p className="text-CoolGray">
          <span className="text-xs md:text-sm 2xl:text-base font-semibold 2xl:font-medium text-AshGray leading-6 ">
            Habis dalam
          </span>
          &nbsp; &nbsp;
          <span
            className={`px-[9px] py-[6px] font-bold text-xs sm:text-base rounded text-white bg-Red transition-transform duration-300`}
          >
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          &nbsp; : &nbsp;
          <span
            className={`px-[9px] py-[6px] font-bold text-xs sm:text-base rounded text-white bg-Red transition-transform duration-300`}
          >
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          &nbsp; : &nbsp;
          <span
            className={`px-[9px] py-[6px] font-bold text-xs sm:text-base rounded text-white bg-Red transition-transform duration-300`}
          >
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </p>
      </div>

      <div className="h-[406px] w-full relative">
        <div className="h-[406px] relative  w-[200px] 2xl:w-[387px] bg-[#FF6B35] rounded-lg ">
          <Image
            src={"/cornerPattern.png"}
            alt="cornerPattern"
            width={175}
            height={190}
            className="absolute w-[107px] h-[107px] 2xl:h-[190px] 2xl:w-[175px] -top-9 2xl:-top-12 -left-8 2xl:-left-11"
          />

          <div className="w-[128px] h-[178px] absolute bottom-7 left-3 2xl:bottom-8 2xl:left-8 leading-9 text-white">
            <p className="text-lg 2xl:text-2xl font-bold leading-6 2xl:leading-9">
              Potongan Harga
            </p>
            <p className="text-6xl font-bold leading-[72px]">
              90<span className="text-2xl">%</span>
            </p>
            <p className="text-[10px] 2xl:text-sm font-bold mt-3 leading-4 2xl:leading-5">
              Periode November
            </p>
          </div>

          <Image
            src={"/cornerPattern.png"}
            alt="cornerPattern"
            width={175}
            height={190}
            className="absolute w-[107px] h-[107px] 2xl:h-[190px] 2xl:w-[175px] -bottom-3 2xl:-bottom-[68px] -right-9 2xl:right-0 "
          />
        </div>
        <div className="absolute left-[120px] 2xl:left-[300px] rounded-lg overflow-x-auto top-6 w-full">
          <div
            className="flex 2xl:hidden pr-6 gap-4  2xl:w-full sm:w-[80%] overflow-x-auto xl:w-fit"
            style={{
              width: "calc(100% - 96px)",
            }}
          >
            {featuredProducts?.map((product, index) => (
              <FlashSaleProductCard
                image={product.image}
                price={product.price}
                discountPercentage={product.discountPercentage}
                totalStock={product.totalStock}
                availableStock={product.availableStock}
                name={product.name}
                key={index}
              />
            ))}
          </div>

          <div className="2xl:block hidden">
            <div
              className="flex pr-6 gap-4 2xl:w-full sm:w-[80%] overflow-x-auto xl:w-fit"
              style={{
                width: "calc(100% - 276px)",
              }}
            >
              {featuredProducts?.map((product, index) => (
                <FlashSaleProductCard
                  image={product.image}
                  price={product.price}
                  discountPercentage={product.discountPercentage}
                  totalStock={product.totalStock}
                  availableStock={product.availableStock}
                  name={product.name}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleSection;
