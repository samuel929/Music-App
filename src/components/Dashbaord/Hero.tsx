"use client";

import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

import NumberTicker from "@/components/magicui/number-ticker";
import { MarqueeDemo } from "../Discovery/AlbumsEp's/AlbumsEp's";
import MusicLayout from "../MusicLayout";

const ArtistPage = () => {
  const popularTracks = [
    {
      number: 1,
      title: "MESSAGE IN A BOTTLE",
      plays: "106,146,923",
      duration: "3:24",
      albumArt:
        "https://i1.sndcdn.com/artworks-V1p3ryU8mMDvK8C9-QZ4Fcg-t500x500.jpg",
    },
    {
      number: 2,
      title: "MESSAGE IN A BOTTLE",
      plays: "12,519,248",
      duration: "3:38",
      albumArt:
        "https://i1.sndcdn.com/artworks-V1p3ryU8mMDvK8C9-QZ4Fcg-t500x500.jpg",
    },
    {
      number: 3,
      title: "MESSAGE IN A BOTTLE",
      plays: "9,502,551",
      duration: "5:14",
      albumArt:
        "https://i1.sndcdn.com/artworks-V1p3ryU8mMDvK8C9-QZ4Fcg-t500x500.jpg",
    },
    {
      number: 4,
      title: "MESSAGE IN A BOTTLE",
      plays: "8,234,567",
      duration: "4:02",
      albumArt:
        "https://i1.sndcdn.com/artworks-V1p3ryU8mMDvK8C9-QZ4Fcg-t500x500.jpg",
    },
    {
      number: 5,
      title: "MESSAGE IN A BOTTLE",
      plays: "7,890,123",
      duration: "3:15",
      albumArt:
        "https://i1.sndcdn.com/artworks-V1p3ryU8mMDvK8C9-QZ4Fcg-t500x500.jpg",
    },
  ];

  return (
    <MusicLayout>
      <main className='px-4 py-4 md:px-8'>
        <section className='flex flex-col md:flex-row items-center md:items-end gap-6 mb-6'>
          <Image
            src='/dicesBg.png'
            alt='Nasty C'
            width={232}
            height={232}
            className='rounded-full shadow-2xl'
          />
          <div className='text-center md:text-left'>
            <div className='flex justify-center md:justify-start items-center gap-2 mb-2'>
              <Image
                src='/verified.png'
                alt='Verified'
                height={30}
                width={152}
              />
            </div>
            <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold mb-4'>
              DiCesTheHeater
            </h1>
            <p className='text-sm md:text-base mb-4'>
              <NumberTicker value={1000} /> monthly listeners
            </p>
          </div>
        </section>

        <section className='flex justify-center md:justify-start gap-4 mb-8'>
          <button
            title='play'
            className='bg-gradient-to-r from-custom-pink to-custom-purple text-black rounded-full p-3'
          >
            <FaPlay className='text-2xl' />
          </button>
          <button className='border border-gray-400 text-white rounded-full px-4 py-2 font-bold'>
            Follow
          </button>
          <button className='text-2xl'>...</button>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>Popular</h2>
          <ul>
            {popularTracks.map((track) => (
              <li
                key={track.number}
                className='flex items-center gap-4 hover:bg-white/10 p-2 rounded'
              >
                <span className='w-6 text-center'>{track.number}</span>
                <div></div>
                <Image
                  alt='dice'
                  src={track.albumArt}
                  width={48}
                  height={48}
                  className='w-12 h-12 bg-gray-600'
                />
                <div className='flex-grow'>
                  <p className='font-bold'>{track.title}</p>
                  <p className='text-sm text-gray-400'>{track.plays}</p>
                </div>
                <span className='text-sm text-gray-400'>{track.duration}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>Discography</h2>
          <div className='flex flex-wrap gap-2 md:gap-4 mb-4'>
            <button className='bg-white text-black rounded-full px-4 py-2 font-bold'>
              Popular releases
            </button>
            <button className='bg-white text-black rounded-full px-4 py-2 font-bold'>
              Albums
            </button>
            <button className='bg-white text-black rounded-full px-4 py-2 font-bold'>
              Singles and EPs
            </button>
          </div>
          <MarqueeDemo />
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>On Tour</h2>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>About</h2>
          <div className='relative rounded-lg overflow-hidden shadow-lg w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px]'>
            <Image
              src='/dices.jpg'
              alt='Nasty C'
              layout='fill'
              objectFit='cover'
              className='object-cover'
            />

            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>

            <div className='absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white'>
              <h3 className='text-lg md:text-xl lg:text-2xl font-bold'>
                1,363,752 monthly listeners
              </h3>
              <p className='text-sm sm:text-base md:text-lg lg:text-xl'>
                Known for his innovative beats and production techniques,
                <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-custom-pink to-custom-purple'>
                  {" "}
                  DiCes has been shaping the sound of contemporary hip hop since
                  his early teens.
                </span>{" "}
                He began his career by producing tracks for local artists and is
                quickly gaining recognition for his distinctive sound, which
                blends classic hip hop elements with modern influences. Today,
                DiCes continues to push the boundaries of the genre. <br />
                <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-custom-pink to-custom-purple'>
                  {" "}
                  -&gt; 100% Dope, Producer and MC.
                </span>{" "}
                <br />
              </p>
            </div>
          </div>
        </section>
      </main>
    </MusicLayout>
  );
};

export default ArtistPage;
