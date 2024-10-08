"use client";

import React, { ReactNode, useState } from "react";
import Image from "next/image";
import music from "../../public/music.png";
import { motion, AnimatePresence } from "framer-motion";
import TypingAnimation from "./magicui/typing-animation";
import MenuItem from "./MenuItem";

const MusicLayout = ({ children }: { children: ReactNode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <img
          src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDk3ZmlyNGRtbXM3aWVkNzNvM3Fwc2FscGVndDZ4ZmZjMXpkN24xaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0A89U7WSJuuTHpLIBs/giphy.gif'
          alt='Background GIF'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='absolute inset-0 bg-black opacity-50 z-0'></div>
      <div className='relative z-10 flex min-h-screen'>
        <div className='flex flex-1'>
          <button
            type='button'
            title='drawer'
            onClick={() => setIsDrawerOpen(true)}
            className='fixed top-4 left-4 z-30 md:hidden'
          >
            <Image src={music} height={42} width={41} alt='music' />
          </button>

          <AnimatePresence>
            {isDrawerOpen && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className='fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 shadow-lg '
              >
                <div className='px-4 py-8'>
                  <div className='flex items-center'>
                    <Image
                      src={music}
                      height={42}
                      width={41}
                      alt='music'
                      onClick={() => setIsDrawerOpen(false)}
                    />
                    <TypingAnimation
                      className='text-[24px] md:text-[30px] ml-3 font-bold text-white'
                      text='DICES'
                    />
                  </div>
                  <MenuItem />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className='hidden md:block w-[275px] px-8 py-11 shadow-right dark:shadow-right-dark bg-gray-900 md:bg-transparent'>
            <div className='flex items-center'>
              <Image src={music} height={42} width={41} alt='music' />
              <TypingAnimation
                className='text-[30px] ml-3 font-bold text-white'
                text='DICES'
              />
            </div>
            <MenuItem />
          </div>

          <div className='flex-1 flex flex-col'>
            <div className='flex-1'>
              <div className='px-4 md:px-8 relative'>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicLayout;
