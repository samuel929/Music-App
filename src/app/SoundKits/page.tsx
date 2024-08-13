import Globe from "@/components/magicui/globe";
import MusicLayout from "@/components/MusicLayout";

export default function GlobeDemo() {
  return (
    <MusicLayout>
      <p className='relative top-28  whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl sm:text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'>
        COOMING SOON
      </p>
      <div className='relative  flex h-[630px] w-full  items-center justify-center overflow-hidden  sm:px-40 sm:pb-40 pt-8 md:pb-60 '>
        <Globe className='top-28' />
      </div>
    </MusicLayout>
  );
}
