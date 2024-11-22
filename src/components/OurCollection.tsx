import { productsCollection } from "@/constans/fakeData";
import React from "react";
import BasicProductCard from "./BasicProductCard";

const OurCollection = () => {
  return (
    <div className="px-6 py-10 bg-OffWhite">
      <h3 className="text-2xl font-bold text-CoolGray">Koleksi Kami</h3>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productsCollection?.map((product, index) => (
          <BasicProductCard
            image={product.image}
            name={product.name}
            price={product.price}
            discountPercentage={product.discountPercentage}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default OurCollection;
