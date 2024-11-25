const CategoryCard = ({ image, name }: { image: string; name: string }) => {
  return (
    <div
      className="rounded-lg hero h-40 hover:z-[9999] 2xl:h-60 w-[320px] xl:w-[480px] flex-none  transition-transform duration-300 ease-in-out cursor-pointer relative flex justify-center items-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="rounded-lg bg-black/40 bg-opacity-60 absolute inset-0" />
      <h2 className="text-2xl leading-[36px] text-white absolute font-bold">
        {name}
      </h2>
    </div>
  );
};

export default CategoryCard;
