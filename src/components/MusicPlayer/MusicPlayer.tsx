"use client";

import React, { useEffect, useState, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { IoMdPlay } from "react-icons/io";
import { ImPrevious2 } from "react-icons/im";
import { IoPauseSharp } from "react-icons/io5";
import { ImNext2 } from "react-icons/im";
import { IoVolumeHighOutline } from "react-icons/io5";
import { ShuffleTracks } from "@/app/lib/action";
import { Tracks } from "@/app/lib/types";

const MusicPlayer: React.FC = () => {
  const [playPause, setPlayPause] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);
  const [tracks, setTracks] = useState<Tracks[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    ShuffleTracks().then((data: any) => {
      console.log(data);
      setTracks(data.tracks.sort(() => Math.random() - 0.5));
      setCurrentTrackIndex(0);
    });
  }, []);

  const nextTrack = () => {
    if (tracks.length > 0) {
      setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    }
  };

  const previousTrack = () => {
    if (tracks.length > 0) {
      setCurrentTrackIndex(
        (prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length
      );
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    const handleLoadedMetadata = () => {
      if (audio) {
        setDuration(audio.duration);
      }
    };

    const handleTimeUpdate = () => {
      if (audio) {
        setCurrentTime(audio.currentTime);
      }
    };

    const handleEnded = () => {
      setPlayPause(false);
      setCurrentTime(0);
      nextTrack();

      audio?.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio?.addEventListener("timeupdate", handleTimeUpdate);
      audio?.addEventListener("ended", handleEnded);

      return () => {
        audio?.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio?.removeEventListener("timeupdate", handleTimeUpdate);
        audio?.removeEventListener("ended", handleEnded);
      };
    };
  }, [tracks, currentTrackIndex]);

  useEffect(() => {
    if (audioRef.current && tracks.length > 0) {
      audioRef.current.src = tracks[currentTrackIndex].audioFile.url;
      audioRef.current.load();
      if (playPause) audioRef.current.play();
    }
  }, [currentTrackIndex, tracks, playPause]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (playPause) {
        audio.pause();
      } else {
        audio.play();
      }
      setPlayPause(!playPause);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className='flex w-full h-[80px] bg-[#121212] bottom-0 shadow-md dark:shadow-lg dark:shadow-gray-900 z-10 absolute'>
      <audio ref={audioRef} preload='metadata' />
      <div className='flex w-full px-4 md:px-8 items-center justify-between space-x-4'>
        <div className='flex items-center space-x-4'>
          <Avatar>
            <AvatarImage
              src={tracks[currentTrackIndex]?.albumArt.url || "default.jpg"}
              alt='Music Album Art'
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <AnimatedShinyText className='hidden sm:inline-flex text-xs cursor-pointer items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
            <span>{tracks[currentTrackIndex]?.title || "No Title"}</span>
          </AnimatedShinyText>
        </div>
        <div className='flex items-center space-x-4'>
          <button
            onClick={previousTrack}
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
            onClick={nextTrack}
            title='next'
            className='text-gray-400 hover:text-white transition-colors'
          >
            <ImNext2 size={24} />
          </button>
        </div>
        <div className='flex items-center space-x-4 w-full md:w-auto md:flex-grow'>
          <span className='text-xs block'>{formatTime(currentTime)}</span>
          <input
            title='music range'
            type='range'
            min='0'
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className=' h-1 bg-gradient-to-r from-custom-pink to-custom-purple rounded-lg appearance-none cursor-pointer'
          />
          <span className='text-xs block'>{formatTime(duration)}</span>
        </div>
        <div className='items-center space-x-2 hidden sm:flex'>
          <IoVolumeHighOutline size={20} />
          <input
            title='volume'
            type='range'
            min='0'
            max='1'
            step='0.01'
            value={volume}
            onChange={handleVolumeChange}
            className='w-16 md:w-24 h-1 bg-gradient-to-r from-custom-pink to-custom-purple rounded-lg appearance-none cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
