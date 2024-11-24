import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchInput = () => {
  return (
    <label className="input bg-OffWhite rounded-[36px] border-[#696969]/20 flex items-center gap-2">
      <BiSearch size={20} />
      <input
        type="text"
        className="grow placeholder:text-sm placeholder:font-normal "
        placeholder="Search"
      />
    </label>
  );
};

export default SearchInput;
