import React from "react";
import CategoryCard from "./CategoryCard";
import { fakeProductCategories } from "@/constans/fakeData";

const CategorySection = () => {
  return (
    <div className="py-10 bg-white overflow-hidden">
      <h3 className="text-xl 2xl:text-2xl font-bold text-CoolGray pl-6 mb-6">
        Kategori
      </h3>
      <div className="relative  group w-full h-[344px] 2xl:h-[504px]">
        <div className="flex gap-4 absolute top-0 left-3 animate-scroll-to-left">
          {fakeProductCategories.map((category, index) => (
            <CategoryCard
              image={category.image}
              name={category.name}
              key={index}
            />
          ))}
        </div>
        <div className="flex absolute right-3 bottom-0 gap-4 group-hover:mt-20 transform duration-300 animate-scroll-to-right mt-4">
          {fakeProductCategories.map((category, index) => (
            <CategoryCard
              image={category.image}
              name={category.name}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
