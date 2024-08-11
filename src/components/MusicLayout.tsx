"use client";

import React, { ReactNode, useState } from "react";
import Image from "next/image";
import music from "../../public/music.png";
import TypingAnimation from "./magicui/typing-animation";
import MenuItem from "./MenuItem";
import MusicPlayer from "./MusicPlayer/MusicPlayer";
import { CSSTransition } from "react-transition-group";
const MusicLayout = ({ children }: { children: ReactNode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
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
        <div className='fixed top-4 left-4 z-50 md:hidden'>
          <Image
            src={music}
            height={42}
            width={41}
            alt='music'
            className='cursor-pointer'
            onClick={toggleDrawer}
          />
        </div>

        {/* Sidebar / Drawer */}
        <CSSTransition
          in={isDrawerOpen}
          timeout={300}
          classNames='drawer'
          unmountOnExit
          className='bg-transparent'
        >
          <div
            className={`fixed inset-y-0 left-0 z-40 w-[275px] transform bg-gray-900 shadow-lg transition-transform duration-300 md:static md:w-[275px] md:bg-transparent ${
              isDrawerOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0`}
          >
            <div className='px-4 py-8 md:px-8 md:py-11 shadow-right dark:shadow-right-dark'>
              <div className='flex items-center justify-between md:block'>
                <div className='hidden items-center  sm:flex'>
                  <Image src={music} height={42} width={41} alt='music' />
                  <TypingAnimation
                    className='text-[24px] md:text-[30px] ml-3 font-bold text-white'
                    text='DICES'
                  />
                </div>
                <MenuItem />
              </div>
            </div>
          </div>
        </CSSTransition>

        <div className='flex-1 flex flex-col'>
          <div className='flex-1'>
            <div className='pl-4 md:pl-8 relative'>{children}</div>
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 left-0 right-0 z-50'>
        <MusicPlayer />
      </div>
    </div>
  );
};

export default MusicLayout;
