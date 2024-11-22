export const formatToRupiah = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export function calculateDiscountedPrice(
  price: number,
  discountPercentage: number
): number {
  const discount = (price * discountPercentage) / 100;
  return price - discount;
}
