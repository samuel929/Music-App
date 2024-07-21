import SparklesText from "@/components/magicui/sparkles-text";
import { MarqueeDemo } from "./AlbumsEp's/AlbumsEp's";
import About from "./About/About";
import TypingAnimation from "../magicui/typing-animation";
const Discovery = () => {
  return (
    <div>
      <SparklesText
        text='Artist Discovery Page Biography'
        sparklesCount={20}
        className='relative top-12'
        colors={{ first: "#A07CFE", second: "#FE8FB5" }}
      />
      <div className='flex gap-7 flex-wrap mt-8'>
        <About />
        <div className='relative top-8'>
          <p className='text-[3.5rem] font-semibold'>Producer Statement</p>

          <TypingAnimation
            duration={50}
            className='max-w-96 leading text-sm font-bold text-black dark:text-white relative top-3'
            text={`"My goal is to create music that resonates on a deep level, capturing the essence of the streets while pushing the envelope of what's possible in hip hop. Every beat tells a story, and I strive to make each one a unique experience that both artists and listeners can connect with."`}
          />
        </div>
      </div>

      <MarqueeDemo />
    </div>
  );
};

export default Discovery;
