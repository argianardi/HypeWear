import {
  calculateDiscountedPrice,
  formatToRupiah,
} from "@/utils/helperFunction";
import Image from "next/image";
import React from "react";

interface BasicProductCardPropsInterface {
  image: string;
  name: string;
  price: number;
  discountPercentage: number;
}

const BasicProductCard = ({
  image,
  name,
  price,
  discountPercentage,
}: BasicProductCardPropsInterface) => {
  return (
    <div className="p-3">
      <figure className="mb-4 w-full aspect-[231/215] lg:aspect-[293/276] object-cover rounded-lg  bg-OffWhite">
        <Image
          src={image}
          alt={name}
          width={293}
          height={276}
          className="w-full h-full  object-cover rounded-lg"
        />
      </figure>
      <h4 className="mb-2 text-sm md:text-lg font-medium text-CoolGray">
        {name}
      </h4>
      <p className="text-base md:text-xl text-SlateGray font-bold">
        {formatToRupiah(price)}
      </p>
      <div>
        <span className="line-through text-AshGray text-[10px] md:text-xs font-normal">
          {formatToRupiah(calculateDiscountedPrice(price, discountPercentage))}
        </span>
        &nbsp; &nbsp;&nbsp;
        <span className="text-xs  font-semibold text-Red">
          {discountPercentage}%
        </span>
      </div>
    </div>
  );
};

export default BasicProductCard;
