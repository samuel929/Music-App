import React from "react";
import { GoSearch } from "react-icons/go";

interface ISEARCHINPUT {
  placeholder: string;
}

const Search = ({ placeholder }: ISEARCHINPUT) => {
  return (
    <div className='relative pl-4 md:pl-8 mt-4 md:mt-10'>
      <GoSearch
        color='#B8B8B8'
        size={24}
        className='absolute top-1/2 transform -translate-y-1/2 left-6 md:left-14'
      />
      <input
        placeholder={placeholder}
        className='bg-[#414141] opacity-65 placeholder:text-[#B8B8B8] border-2 border-[#414141] focus:outline-none py-3 pl-14 md:pl-20 pr-4 md:pr-12 w-full md:w-[700px] rounded-full'
      />
    </div>
  );
};

export default Search;
