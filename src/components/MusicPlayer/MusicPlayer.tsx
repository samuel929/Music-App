"use client";
import React, { useEffect, useState, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { IoMdPlay } from "react-icons/io";
import { ImPrevious2 } from "react-icons/im";
import { IoPauseSharp } from "react-icons/io5";
import { ImNext2 } from "react-icons/im";
import { IoVolumeHighOutline } from "react-icons/io5";

const MusicPlayer = () => {
  const [playPause, setPlayPause] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);

  const songUrl = "/message.mp3";

  const audioRef = useRef(new Audio(songUrl));

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });
    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime);
    });
    audio.addEventListener("ended", () => {
      setPlayPause(false);
      setCurrentTime(0);
    });
    return () => {
      audio.removeEventListener("loadedmetadata", () => {});
      audio.removeEventListener("timeupdate", () => {});
      audio.removeEventListener("ended", () => {});
    };
  }, [songUrl]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (playPause) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlayPause(!playPause);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className='flex w-full z-10 absolute  h-[80px] bg-[#121212] bottom-0 shadow-md dark:shadow-lg dark:shadow-gray-900'>
      <div className='relative top-4 px-8'>
        <div className='flex'>
          <div>
            <Avatar>
              <AvatarImage
                src='https://i1.sndcdn.com/artworks-tIAYCsLuKjcgqdnf-tY8DIw-t500x500.jpg'
                alt='@shadcn'
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <AnimatedShinyText className='inline-flex cursor-pointer relative top-2 items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
              <span>MESSAGE IN A BOTTLE</span>
            </AnimatedShinyText>
          </div>
          <div className='flex items-center justify-center gap-4 relative top-1 left-8'>
            <button
              title='previous'
              className='text-gray-400 hover:text-white transition-colors'
            >
              <ImPrevious2 size={24} />
            </button>
            <button
              className='bg-white rounded-full p-2 hover:scale-105 transition-transform'
              onClick={togglePlayPause}
            >
              {playPause ? (
                <IoPauseSharp size={20} className='text-black' />
              ) : (
                <IoMdPlay size={20} className='text-black ml-0.5' />
              )}
            </button>
            <button
              title='next'
              className='text-gray-400 hover:text-white transition-colors'
            >
              <ImNext2 size={24} />
            </button>
          </div>
          <div className='flex items-center space-x-2 mb-2 relative top-1 left-20'>
            <span className='text-xs mt-2'>{formatTime(currentTime)}</span>
            <div className='flex-grow'>
              <input
                title='music range'
                type='range'
                min='0'
                max={duration}
                value={currentTime}
                onChange={handleSeek}
                className='w-full h-1  bg-gradient-to-r from-custom-pink to-custom-purple rounded-lg appearance-none cursor-pointer'
              />
            </div>
            <span className='text-xs mt-2'>{formatTime(duration)}</span>
          </div>
          <div className='flex items-center space-x-2 relative top-1 left-40'>
            <IoVolumeHighOutline size={20} />
            <input
              title='volume'
              type='range'
              min='0'
              max='1'
              step='0.01'
              value={volume}
              onChange={handleVolumeChange}
              className='w-24 h-1  bg-gradient-to-r from-custom-pink to-custom-purple rounded-lg appearance-none cursor-pointer'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
