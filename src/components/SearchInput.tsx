import { BiSearch } from "react-icons/bi";

const SearchInput = () => {
  return (
    <label className="input border border-AshGray/20 px-3 lg:px-4 py-2  text-xs lg:text-sm lg:py-3 w-full   bg-OffWhite rounded-full flex items-center gap-2">
      <BiSearch size={20} className="text-gray-500" />
      <input
        type="text"
        className="w-full placeholder:text-xs font-semibold lg:placeholder:text-sm bg-OffWhite placeholder:text-AshGray placeholder:font-normal focus:outline-none"
        placeholder="Search"
      />
    </label>
  );
};

export default SearchInput;
