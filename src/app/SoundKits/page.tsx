import Globe from "@/components/magicui/globe";
import MusicLayout from "@/components/MusicLayout";

export default function GlobeDemo() {
  return (
    <MusicLayout>
      <div className='relative  flex h-[630px] w-full  items-center justify-center overflow-hidden  px-40 pb-40 pt-8 md:pb-60 '>
        <p className='pointer-events-none mb-32 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'>
          COOMING SOON
        </p>
        <Globe className='top-28' />
      </div>
    </MusicLayout>
  );
}
