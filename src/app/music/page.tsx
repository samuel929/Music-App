import MusicLayout from "@/components/MusicLayout";
import MusicPlayer from "@/components/MusicPlayerCardLayout";
import React from "react";
import art from "../../../public/dices.jpg";
const Music = () => {
  const tracks = [
    {
      trackNumber: "01",
      trackName: "Maroon 5 - Memories",
      trackDuration: "04:20",
      trackUrl: "/message.mp3",
      albumArt: "/dices.jpg",
    },
    // Add more tracks as needed
  ];
  return (
    <MusicLayout>
      {tracks.map((track, index) => (
        <MusicPlayer key={index} {...track} />
      ))}
    </MusicLayout>
  );
};

export default Music;
