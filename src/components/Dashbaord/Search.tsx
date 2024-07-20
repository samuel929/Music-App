import React from "react";
import { GoSearch } from "react-icons/go";

const Search = () => {
  return (
    <div className='relative py-11 pl-8 -top-24'>
      <GoSearch color='#B8B8B8' size={32} className='absolute top-14 left-14' />
      <input
        placeholder='Search Music, Artist, Genre'
        className='bg-[#414141] opacity-65 placeholder:text-[#B8B8B8] border-w-2 border-[#414141] focus:outline-none py-[15px] pl-[72px] pr-[492px] rounded-[36px]'
      />
    </div>
  );
};

export default Search;
