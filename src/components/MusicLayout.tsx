import React, { ReactNode } from "react";
import Image from "next/image";
import music from "../../public/music.png";
import TypingAnimation from "./magicui/typing-animation";
import MenuItem from "./MenuItem";
import Dashboard from "./Dashbaord/Dashboard";
import MusicPlayer from "./MusicPlayer/MusicPlayer";

const MusicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='relative min-h-screen overflow-hidden'>
      {/* GIF Background */}
      <div className='absolute inset-0 z-0'>
        <img
          src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjZtZndrcGRycXd6MXlnMGdueDExeDRzdHgxOHFpaXptbjFoaTJ5YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/emN0LqTozqRGNwVPAg/giphy.webp'
          alt='Background GIF'
          className='w-full h-full object-cover'
        />
      </div>

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black opacity-50 z-0'></div>

      {/* Content */}
      <div className='relative z-10 flex flex-col min-h-screen'>
        <div className='flex flex-1'>
          <div className='w-[275px] px-8 py-11 shadow-right dark:shadow-right-dark'>
            <div className='flex'>
              <Image src={music} height={42} width={41} alt='music' />
              <TypingAnimation
                className='text-[30px] ml-3 font-bold text-black dark:text-white'
                text='DICES'
              />
            </div>
            <MenuItem />
          </div>

          <div className='flex-1 flex flex-col'>
            <div className='flex-1'>
              {children}
              <div className='pl-8'>
                <Dashboard />
              </div>
            </div>
          </div>
        </div>
        <MusicPlayer />
      </div>
    </div>
  );
};

export default MusicLayout;
