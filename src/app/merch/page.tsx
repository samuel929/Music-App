import MusicLayout from "@/components/MusicLayout";
import ProductContainer from "@/components/ProductContainer";
import { Separator } from "@/components/ui/separator";

import React from "react";

const Merch = () => {
  return (
    <MusicLayout>
      <div className='flex flex-col items-center justify-center relative top-40 sm:top-[180px] sm:left-28'>
        <div className='flex flex-col sm:flex-row items-center justify-between w-full max-w-[700px]'>
          <Separator className='my-2 bg-gradient-to-r from-custom-pink to-custom-purple h-[5px] w-[150px] sm:w-[250px]' />
          <p className='text-center my-4 sm:my-0'>COLLECTIONS</p>
          <Separator className='my-2 bg-gradient-to-r from-custom-pink to-custom-purple h-[5px] w-[150px] sm:w-[250px]' />
        </div>
      </div>

      <div className='relative pt-16 sm:pt-60 pr-4 sm:pr-60'>
        <ProductContainer />
      </div>
    </MusicLayout>
  );
};

export default Merch;
