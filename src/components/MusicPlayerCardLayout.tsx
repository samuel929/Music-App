"use client";

import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Equalizer from "./Equalizer";
import { FaPlay, FaPause } from "react-icons/fa";
import LockedIcon from "@/components/PremuimMusicIcon";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";

interface Props {
  trackNumber: string;
  trackName: string;
  trackDuration: string;
  trackUrl: string;
  albumArt: string;
  locked?: boolean;
}

const MusicPlayer = ({
  trackNumber,
  trackName,
  trackDuration,
  trackUrl,
  albumArt,
  locked,
}: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className='flex flex-col sm:flex-row items-center w-full bg-black/50 backdrop-blur-md p-4 rounded-md text-white'>
      <audio ref={audioRef} src={trackUrl} preload='metadata' />
      <div className='text-xl sm:text-2xl mr-0 sm:mr-4 mb-2 sm:mb-0'>
        {trackNumber}
      </div>
      <div className='w-16 h-16 sm:w-20 sm:h-20 sm:mr-4 mb-2 sm:mb-0'>
        <img
          src={albumArt}
          alt={trackName}
          className='rounded-full object-cover w-full h-full'
        />
      </div>
      <div className='flex-grow text-center sm:text-left mb-2 sm:mb-0'>
        <div className='text-lg sm:text-xl'>{trackName}</div>
        <div className='text-sm sm:text-base text-gray-400'>
          {trackDuration}
        </div>
      </div>
      <div className='flex items-center justify-center sm:justify-end w-full sm:w-auto'>
        <div className='w-20 h-12 sm:w-24 sm:h-14 mb-2 sm:mb-0'>
          <Canvas>
            <Equalizer isPlaying={isPlaying} />
          </Canvas>
        </div>
        {locked ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className='p-2 flex flex-col justify-center items-center'>
                  <LockedIcon />
                </div>
              </TooltipTrigger>
              <TooltipContent className='relative right-0 sm:right-11'>
                <p className='bg-gradient-to-r from-custom-pink to-custom-purple rounded-md text-white p-2'>
                  Song locked and can only be bought
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <button
            onClick={togglePlay}
            className='ml-0 sm:ml-4 p-2 flex flex-col justify-center items-center bg-gradient-to-r from-custom-pink to-custom-purple w-8 h-8 sm:w-10 sm:h-10 rounded-full'
          >
            {isPlaying ? (
              <FaPause className='relative' />
            ) : (
              <FaPlay className='relative' />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;
