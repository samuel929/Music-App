interface TProps {
  imageSrc: string;
  title: string;
  trackCount: number;
}

const MusicCard = ({ imageSrc, title, trackCount }: TProps) => {
  return (
    <div className='relative w-48 h-48 rounded-lg overflow-hidden shadow-lg group'>
      <img
        src={imageSrc}
        alt={title}
        layout='fill'
        objectFit='cover'
        className='transition-transform duration-300 group-hover:scale-110'
      />
      <div className='relative'>
        <div className=' inset-0 rounded-lg border bg-black/50 backdrop-blur-md shadow-lg'>
          <div className='absolute bottom-0 left-0 p-4 text-white'>
            <h3 className='text-lg font-bold'>{title}</h3>
            <p className='text-sm'>{trackCount} Tracks</p>
          </div>
          <button className='absolute bottom-4 right-4 text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
