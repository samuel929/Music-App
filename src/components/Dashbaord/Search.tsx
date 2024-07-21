import React from "react";
import { GoSearch } from "react-icons/go";

const Search = () => {
  return (
    <div className='relative  pl-8 '>
      <GoSearch color='#B8B8B8' size={32} className='absolute top-3 left-14' />
      <input
        placeholder='Search Music, Artist, Genre'
        className='bg-[#414141] opacity-65 placeholder:text-[#B8B8B8] border-w-2 border-[#414141] focus:outline-none py-[15px] pl-[72px] pr-[492px] rounded-[36px]'
      />
    </div>
  );
};

export default Search;
