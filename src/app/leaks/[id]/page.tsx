"use client";
import Image from "next/image";
import { PlayIcon, ClockIcon } from "@heroicons/react/24/solid";
import MusicLayout from "@/components/MusicLayout";
const Leaks = () => {
  //   const router = useRouter();
  //   const { id } = router.query;

  // Fetch album data based on id
  // For now, we'll use dummy data
  const album = {
    title: "Daily Mix 2",
    tracks: [
      {
        number: 1,
        title: "Broken Marriages",
        artist: "Nasty C",
        album: "I Love It Here",
        duration: "3:01",
        isExplicit: true,
      },
      {
        number: 2,
        title: "On God",
        artist: "MashBeatz",
        album: "Thanks for Nothing",
        duration: "1:12",
        isExplicit: true,
      },
      {
        number: 3,
        title: "Better Luck Next Time",
        artist: "A-Reece, Ecco, Wordz",
        album: "Better Luck Next Time",
        duration: "2:51",
        isExplicit: true,
      },
      {
        number: 4,
        title: "Popolile",
        artist: "Loodaleo, Blxckie, MSI",
        album: "Popolile",
        duration: "3:18",
        isExplicit: true,
      },
      {
        number: 5,
        title: "BIGGER THAN US",
        artist: "The Big Hash, Lucasraps",
        album: "BETTER LATE THAN NEVER",
        duration: "3:35",
        isExplicit: true,
      },
      {
        number: 6,
        title: "AIN",
        artist: "Zoocci Coke Dope, 25K",
        album: "Anxiety",
        duration: "4:03",
        isExplicit: true,
      },
      {
        number: 7,
        title: "Coffee Shop In Rosebank",
        artist: "G-TECH 2bit, Loatinover Pounds",
        album: "Coffee Shop In Rosebank",
        duration: "3:34",
        isExplicit: false,
      },
      {
        number: 8,
        title: "Prosper In Peace (with Benny The Butcher)",
        artist: "Nasty C, Benny The Butcher",
        album: "I Love It Here",
        duration: "3:32",
        isExplicit: true,
      },
    ],
  };

  return (
    <MusicLayout>
      <div className='text-white'>
        <header className='flex items-center mb-8'>
          <Image
            src='/dices.jpg'
            alt={album.title}
            width={200}
            height={200}
            className='mr-6 mt-4'
          />
          <div>
            <h1 className='text-4xl font-bold mb-2'>{album.title}</h1>
            <p className='text-gray-400'>DICES</p>
          </div>
        </header>

        <button className='bg-gradient-to-r from-custom-pink to-custom-purple text-black font-bold py-3 px-8 rounded-full mb-8 hover:bg-green-400 transition-colors'>
          <PlayIcon className='w-8 h-8 inline-block mr-2' />
          Play
        </button>

        <table className='w-full'>
          <thead>
            <tr className='border-b border-gray-700 text-gray-400'>
              <th className='text-left py-2'>#</th>
              <th className='text-left py-2'>Title</th>
              <th className='text-left py-2'>Album</th>
              <th className='text-right py-2'>
                <ClockIcon className='w-5 h-5 inline-block' />
              </th>
            </tr>
          </thead>
          <tbody>
            {album.tracks.map((track) => (
              <tr
                key={track.number}
                className='hover:bg-gray-800/30 transition-colors'
              >
                <td className='py-3'>{track.number}</td>
                <td className='py-3'>
                  <div className='font-medium'>{track.title}</div>
                  <div className='text-sm text-gray-400'>{track.artist}</div>
                </td>
                <td className='py-3 text-gray-400'>{track.album}</td>
                <td className='py-3 text-right text-gray-400'>
                  {track.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MusicLayout>
  );
};

export default Leaks;
