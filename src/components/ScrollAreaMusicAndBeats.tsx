import Image from "next/image";
import {
  PlayIcon,
  PlusIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
const SpotifyCard = ({
  title,
  artist,
  albumArt,
  type,
  trackDuration,
  songCount,
  id,
}: any) => {
  return (
    <Link
      href={`/music/${id}`}
      className='bg-[#121212] text-white p-4 rounded-lg hover:bg-[#282828] transition-colors'
    >
      <div className='relative group'>
        <Image
          src={albumArt}
          alt={title}
          width={200}
          height={200}
          className='w-full aspect-square object-cover rounded-md shadow-lg mb-4'
        />
        <button
          title='play'
          className='absolute bottom-2 right-2 bg-gradient-to-r from-custom-pink to-custom-purple p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg'
        >
          <PlayIcon className='w-6 h-6 text-black' />
        </button>
      </div>
      <h2 className='font-bold text-sm mb-1 truncate'>{title}</h2>
      <p className='text-sm text-gray-400 mb-2'>{artist}</p>
      <div className='flex justify-between items-center text-xs text-gray-400'>
        <span>{type}</span>
        <span>{trackDuration || `${songCount} songs`}</span>
      </div>
      <div className='mt-4 flex justify-between items-center'>
        <button title='plus' className='text-gray-400 hover:text-white'>
          <PlusIcon className='w-5 h-5' />
        </button>
        <button title='elips' className='text-gray-400 hover:text-white'>
          <EllipsisHorizontalIcon className='w-5 h-5' />
        </button>
      </div>
    </Link>
  );
};

export default SpotifyCard;
