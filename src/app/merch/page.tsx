import MusicLayout from "@/components/MusicLayout";
import ProductContainer from "@/components/ProductContainer";
import { Separator } from "@/components/ui/separator";

import React from "react";

const Merch = () => {
  return (
    <MusicLayout>
      <div className='flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32'>
        <div className='flex flex-col sm:flex-row items-center justify-between w-full max-w-3xl mb-12'>
          <Separator className='my-2 bg-gradient-to-r from-custom-pink to-custom-purple h-1 w-24 sm:w-40 lg:w-60' />
          <p className='text-center my-4 sm:my-0 text-lg font-medium'>
            COLLECTIONS
          </p>
          <Separator className='my-2 bg-gradient-to-r from-custom-pink to-custom-purple h-1 w-24 sm:w-40 lg:w-60' />
        </div>

        <div className='w-full'>
          <ProductContainer />
        </div>
      </div>
    </MusicLayout>
  );
};

export default Merch;
