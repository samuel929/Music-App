import { Separator } from "@radix-ui/react-separator";
import React from "react";
import { FileTreeDemo } from "./Profile";

const MenuItem = () => {
  return (
    <div className='mt-16'>
      <h1 className='text-[20px]'>Menu</h1>
      <Separator className='my-2 bg-gradient-to-r from-custom-pink to-custom-purple h-[1px]' />
      <div>
        <FileTreeDemo />
      </div>
    </div>
  );
};

export default MenuItem;
