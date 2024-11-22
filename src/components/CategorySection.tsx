import React from "react";
import CategoryCard from "./CategoryCard";
import { fakeProductCategories } from "@/constans/fakeData";

const CategorySection = () => {
  return (
    <div className="py-10 bg-white overflow-x-hidden">
      <h3 className="text-2xl font-bold text-CoolGray pl-6 mb-6">Kategori</h3>
      <div className="flex gap-4">
        {fakeProductCategories.map((category) => (
          <CategoryCard
            image={category.image}
            name={category.name}
            key={category.name}
          />
        ))}
      </div>
      <div className="flex gap-4 mt-4">
        {fakeProductCategories.map((category) => (
          <CategoryCard
            image={category.image}
            name={category.name}
            key={category.name}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
