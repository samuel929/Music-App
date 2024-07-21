"use client";

import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Equalizer from "./Equalizer";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
interface Props {
  trackNumber: string;
  trackName: string;
  trackDuration: string;
  trackUrl: string;
  albumArt: string;
}

const MusicPlayer = ({
  trackNumber,
  trackName,
  trackDuration,
  trackUrl,
  albumArt,
}: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(trackUrl));

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='flex items-center max-w-[700px] cursor-pointer bg-black/50 backdrop-blur-md p-4 rounded-md text-white'>
      <div className='text-2xl mr-4'>{trackNumber}</div>
      <div className='w-12 h-12 mr-4'>
        <img src={albumArt} alt={trackName} className='rounded-full' />
      </div>
      <div className='flex-grow ml-4'>
        <div className='text-lg'>{trackName}</div>
        <div className='text-sm text-gray-400'>{trackDuration}</div>
      </div>
      <div className='flex items-center'>
        <div className='w-20 h-12'>
          <Canvas>
            <Equalizer isPlaying={isPlaying} />
          </Canvas>
        </div>
        <button
          onClick={togglePlay}
          className='ml-4 p-2 flex flex-col justify-center items-center bg-gradient-to-r from-custom-pink to-custom-purple w-9 h-9  rounded-full'
        >
          {isPlaying ? (
            <FaPause className='relative' />
          ) : (
            <FaPlay className='relative' />
          )}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
