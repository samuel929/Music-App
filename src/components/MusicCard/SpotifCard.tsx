const SpotifyCard = () => {
  return (
    <div className='relative w-64 h-64 bg-blue-900 rounded-lg overflow-hidden'>
      <img
        src='https://i1.sndcdn.com/artworks-tIAYCsLuKjcgqdnf-tY8DIw-t500x500.jpg'
        alt='Daily Mix 2'
        className='w-full h-full object-cover'
      />
      <div className='absolute inset-0 bg-pink-500 opacity-50 transform -skew-y-6'></div>
      <div className='absolute inset-0 flex items-end p-4'>
        <h2 className='text-white text-2xl font-bold'>Daily Mix 2</h2>
      </div>
      <div className='absolute top-2 left-2'>
        <svg
          className='h-6 w-6 text-white'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm3.53-11.06c-.68-.59-1.71-.59-2.39 0-1.61 1.36-4.09 1.36-5.7 0a1.503 1.503 0 10-2.08 2.16 9.95 9.95 0 008.86 0c.68-.59.68-1.54 0-2.13zm1.07 3.67c-.91-.78-2.29-.78-3.19 0-1.81 1.52-4.62 1.52-6.42 0a1.503 1.503 0 10-2.08 2.16 12.94 12.94 0 0010.58 0c.91-.78.91-2.05 0-2.73zm.99 3.49c-.81-.68-2.03-.68-2.84 0-2.03 1.71-5.18 1.71-7.21 0a1.503 1.503 0 00-2.08 2.16 15.96 15.96 0 0011.37 0c.81-.68.81-1.78 0-2.16z' />
        </svg>
      </div>
    </div>
  );
};

export default SpotifyCard;
