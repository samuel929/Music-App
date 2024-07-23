import MusicLayout from "@/components/MusicLayout";
import MusicPlayer from "@/components/MusicPlayerCardLayout";
import React from "react";
import art from "../../../public/dices.jpg";
import ScrollAreaMusicAndBeats from "@/components/ScrollAreaMusicAndBeats";
import Search from "@/components/Dashbaord/Search";
const Music = () => {
  const tracks = [
    {
      trackNumber: "01",
      trackName: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: false,
    },
    {
      trackNumber: "02",
      trackName: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: false,
    },
    {
      trackNumber: "03",
      trackName: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: true,
    },
    {
      trackNumber: "04",
      trackName: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: false,
    },
    {
      trackNumber: "05",
      trackName: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: true,
    },
    {
      trackNumber: "06",
      trackName: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: true,
    },
    {
      trackNumber: "01",
      trackName: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: false,
    },
    {
      trackNumber: "02",
      trackName: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: true,
    },
    {
      trackNumber: "03",
      trackName: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: false,
    },
    {
      trackNumber: "04",
      trackName: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: true,
    },
    {
      trackNumber: "05",
      trackName: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: false,
    },
    {
      trackNumber: "06",
      trackName: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
      locked: true,
    },
  ];
  return (
    <MusicLayout>
      <div className='flex justify-center'>
        <Search placeholder='Search Music...' />
      </div>
      <ScrollAreaMusicAndBeats>
        <div>
          {tracks.map((track, index) => (
            <div key={index} className='py-2'>
              <MusicPlayer key={index} {...track} />
            </div>
          ))}
        </div>
      </ScrollAreaMusicAndBeats>
    </MusicLayout>
  );
};

export default Music;
