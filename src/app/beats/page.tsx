import MusicLayout from "@/components/MusicLayout";
import React from "react";
import ScrollAreaMusicAndBeats from "@/components/ScrollAreaMusicAndBeats";
import Search from "@/components/Dashbaord/Search";
const Beats = () => {
  const tracks = [
    {
      id: 1,
      trackNumber: "01",
      title: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: false,
    },
    {
      id: 2,

      trackNumber: "02",
      title: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: false,
    },
    {
      id: 3,

      trackNumber: "03",
      title: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: true,
    },
    {
      id: 5,

      trackNumber: "04",
      title: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: false,
    },
    {
      id: 6,

      trackNumber: "05",
      title: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: true,
    },
    {
      id: 7,

      trackNumber: "06",
      title: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: true,
    },
    {
      id: 8,

      trackNumber: "01",
      title: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: false,
    },
    {
      id: 9,

      trackNumber: "02",
      title: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: true,
    },
    {
      id: 10,
      trackNumber: "03",
      title: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: false,
    },
    {
      id: 11,
      trackNumber: "04",
      title: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: true,
    },
    {
      id: 12,
      trackNumber: "05",
      title: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: false,
    },
    {
      id: 13,
      trackNumber: "06",
      title: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: true,
    },
  ];
  return (
    <MusicLayout>
      <div className='flex justify-center mb-6'>
        <Search placeholder='Search Beats...' />
      </div>
      <>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
          {tracks.map((item, index) => (
            <ScrollAreaMusicAndBeats key={index} {...item} />
          ))}
        </div>
      </>
    </MusicLayout>
  );
};

export default Beats;
