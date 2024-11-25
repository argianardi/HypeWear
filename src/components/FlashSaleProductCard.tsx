import {
  calculateDiscountedPrice,
  formatToRupiah,
} from "@/utils/helperFunction";
import Image from "next/image";

interface FlashSaleProductCardProps {
  image: string;
  name: string;
  price: number;
  discountPercentage: number;
  totalStock: number;
  availableStock: number;
}

const calculateStockProgress = (availableStock: number, totalStock: number) => {
  return (availableStock / totalStock) * 100;
};

const FlashSaleProductCard = ({
  image,
  name,
  price,
  discountPercentage,
  totalStock,
  availableStock,
}: FlashSaleProductCardProps) => {
  const progress = calculateStockProgress(availableStock, totalStock);
  return (
    <div className="py-3 px-4 bg-white rounded-lg shadow-sm flex flex-col">
      <figure className="mb-4 relative w-[218px] h-[219px]">
        <Image
          src={image}
          alt={name}
          layout="fill"
          className="object-cover rounded-lg"
        />
      </figure>
      <h4 className="mb-2 text-lg font-medium text-CoolGray">
        {formatToRupiah(price)}
      </h4>
      <div className="mt-auto">
        <span className="line-through text-AshGray text-xs font-normal">
          {formatToRupiah(calculateDiscountedPrice(price, discountPercentage))}
        </span>
        &nbsp; &nbsp;&nbsp;
        <span className="text-xs font-semibold text-Red">
          {discountPercentage}%
        </span>
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-red-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-1 text-[10px] font-semibold text-AshGray">
          {progress <= 10
            ? "Hampir habis"
            : progress <= 50
            ? "Stok terbatas"
            : "Stok masih banyak"}
        </p>
      </div>
    </div>
  );
};

export default FlashSaleProductCard;
