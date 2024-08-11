// /components/VapeProductCard.tsx
import { FC } from "react";

interface VapeProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const VapeProductCard = ({
  name,
  description,
  price,
  imageUrl,
}: VapeProduct) => {
  return (
    <div className='relative w-full sm:w-80 h-[450px] sm:h-[450px] bg-gray-900 rounded-lg overflow-hidden m-4'>
      <div
        className='absolute inset-0 bg-cyan-500 transition-all duration-500 ease-in-out'
        style={{ clipPath: "circle(150px at 80% 20%)" }}
      />
      <div className='absolute top-1/3 left-[-20%] text-[12em] sm:text-[12em] font-extrabold italic text-white opacity-5'>
        Vape
      </div>
      <div className='relative w-full h-full flex justify-center items-center transition-all duration-500 ease-in-out'>
        <img
          src={imageUrl}
          alt={name}
          className='absolute w-2/3 sm:w-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12'
        />
      </div>
      <div className='absolute bottom-0 w-full h-24 sm:h-24 text-center bg-white/50 backdrop-blur-md transition-all duration-1000 z-20 hover:h-52 sm:hover:h-52'>
        <h2 className='relative font-semibold text-lg sm:text-lg text-white tracking-wider mt-4 sm:mt-4'>
          {name}
        </h2>
        <div className='flex justify-center items-center transition-opacity duration-600 mt-2 sm:mt-2'>
          <h3 className='text-sm sm:text-sm text-white font-light uppercase tracking-wide mr-2 sm:mr-2'>
            Color:
          </h3>
          <span className='w-5 h-5 bg-yellow-500 rounded-full mx-1 cursor-pointer'></span>
          <span className='w-5 h-5 bg-cyan-500 rounded-full mx-1 cursor-pointer'></span>
          <span className='w-5 h-5 bg-blue-500 rounded-full mx-1 cursor-pointer'></span>
        </div>
        <a
          href='#'
          className='inline-block mt-2 sm:mt-2 px-4 py-2 bg-white text-black font-semibold rounded-md opacity-0 transform translate-y-12 transition-all duration-700 hover:opacity-100 hover:translate-y-0'
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default VapeProductCard;
