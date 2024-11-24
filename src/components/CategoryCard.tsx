import React from "react";

const CategoryCard = ({ image, name }: { image: string; name: string }) => {
  return (
    <div
      className="rounded-lg hero h-40 hover:z-[9999] 2xl:h-60 w-[320px] xl:w-[480px] flex-none hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="rounded-lg overflow-hidden hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <h2 className="text-2xl leading-[36px] text-white font-bold">{name}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
