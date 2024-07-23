import MusicLayout from "@/components/MusicLayout";
import ProductContainer from "@/components/ProductContainer";
import { Separator } from "@/components/ui/separator";

import React from "react";

const Merch = () => {
  return (
    <MusicLayout>
      <div className='flex  relative top-[180px] left-28'>
        <div className='flex justify-between w-[700px]'>
          <Separator className='my-2 bg-gradient-to-r from-custom-pink to-custom-purple h-[5px] w-[250px]' />
          <p> COLLECTIONS</p>
          <Separator className='my-2 bg-gradient-to-r from-custom-pink to-custom-purple h-[5px] w-[250px]' />
        </div>
      </div>
      <div className='relative  pt-60 pr-60 '>
        <ProductContainer />
      </div>
    </MusicLayout>
  );
};

export default Merch;
