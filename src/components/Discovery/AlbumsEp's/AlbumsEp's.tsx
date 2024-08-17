import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import MusicCard from "@/components/MusicCard/MusicCard";
import ScrollAreaMusicAndBeats from "@/components/ScrollAreaMusicAndBeats";

const reviews = [
  {
    id: 6,

    trackNumber: "05",
    title: "Maroon 5 - Memories",
    trackDuration: "04:20",
    trackUrl: "/message.mp3",
    albumArt:
      "https://i1.sndcdn.com/artworks-tIAYCsLuKjcgqdnf-tY8DIw-t500x500.jpg",
    locked: true,
  },
  {
    id: 6,

    trackNumber: "05",
    title: "Maroon 5 - Memories",
    trackDuration: "04:20",
    trackUrl: "/message.mp3",
    albumArt:
      "https://i1.sndcdn.com/artworks-tIAYCsLuKjcgqdnf-tY8DIw-t500x500.jpg",
    locked: true,
  },
  {
    id: 6,

    trackNumber: "05",
    title: "Maroon 5 - Memories",
    trackDuration: "04:20",
    trackUrl: "/message.mp3",
    albumArt:
      "https://i1.sndcdn.com/artworks-tIAYCsLuKjcgqdnf-tY8DIw-t500x500.jpg",
    locked: true,
  },
  {
    id: 6,

    trackNumber: "05",
    title: "Maroon 5 - Memories",
    trackDuration: "04:20",
    trackUrl: "/message.mp3",
    albumArt:
      "https://i1.sndcdn.com/artworks-tIAYCsLuKjcgqdnf-tY8DIw-t500x500.jpg",
    locked: true,
  },
  {
    id: 6,

    trackNumber: "05",
    title: "Maroon 5 - Memories",
    trackDuration: "04:20",
    trackUrl: "/message.mp3",
    albumArt:
      "https://i1.sndcdn.com/artworks-tIAYCsLuKjcgqdnf-tY8DIw-t500x500.jpg",
    locked: true,
  },
  {
    id: 6,

    trackNumber: "05",
    title: "Maroon 5 - Memories",
    trackDuration: "04:20",
    trackUrl: "/message.mp3",
    albumArt:
      "https://i1.sndcdn.com/artworks-tIAYCsLuKjcgqdnf-tY8DIw-t500x500.jpg",
    locked: true,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = () => {
  return (
    <>
      {reviews.map((review) => (
        <ScrollAreaMusicAndBeats
          key={review.id}
          albumArt={review.albumArt}
          title={review.title}
          trackDuration={review.trackDuration}
          className='flex-shrink-0 w-60 md:w-72 lg:w-80 p-4'
        />
      ))}
    </>
  );
};

export function MarqueeDemo() {
  return (
    <div className='relative w-80 sm:w-[1000px] overflow-hidden bg-background'>
      <div className='container mx-auto px-4 py-8'>
        <Marquee pauseOnHover className='flex gap-4 [--duration:20s]'>
          <ReviewCard />
        </Marquee>
      </div>
    </div>
  );
}
