import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import MusicCard from "@/components/MusicCard/MusicCard";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const ReviewCard = () => {
  const itemsArray = Array.from(
    { length: 6 },
    (_, index) => `Item ${index + 1}`
  );

  return (
    <>
      {itemsArray.map((item, index) => (
        <MusicCard
          key={index}
          imageSrc='https://i1.sndcdn.com/artworks-tIAYCsLuKjcgqdnf-tY8DIw-t500x500.jpg'
          title='Acoustic'
          trackCount={120}
        />
      ))}
    </>
  );
};

export function MarqueeDemo() {
  return (
    <div className='relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden   bg-background '>
      <Marquee pauseOnHover className='[--duration:20s]'>
        <ReviewCard />
      </Marquee>
      <div className='bg-black/50 backdrop-blur-md p-10  max-w-[300px] mx-auto mt-20 shadow-lg'></div>
    </div>
  );
}
