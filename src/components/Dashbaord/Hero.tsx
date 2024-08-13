"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Verified from "../../../public/Verified.png";
import Dices from "../../../public/dicesBg.png";
import NumberTicker from "@/components/magicui/number-ticker";

const Hero = () => {
  return (
    <div className='relative top-36 h-[343px] w-full max-w-[882px] rounded-md bg-black/50 backdrop-blur-md p-10'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex-1'>
          <Image src={Verified} height={30} width={152} alt='verified' />
          <p className='text-[2rem] md:text-[3.5rem] font-semibold'>
            DiCesTheHeater
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-custom-pink to-custom-purple'>
              .
            </span>
          </p>
          <p className='text-[12px] md:text-[14px] font-medium tracking-tighter text-black dark:text-white'>
            <NumberTicker value={1000} /> monthly listeners
          </p>
        </div>
        <div className='flex-1 flex justify-center items-center md:justify-end'>
          <Image
            className='relative bottom-2 md:bottom-36 max-w-[60%] md:max-w-none'
            src={Dices}
            height={452}
            width={535}
            alt='Hero Dices'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
