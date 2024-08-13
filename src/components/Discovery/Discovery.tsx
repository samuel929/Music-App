import SparklesText from "@/components/magicui/sparkles-text";
import { MarqueeDemo } from "./AlbumsEp's/AlbumsEp's";
import About from "./About/About";
import TypingAnimation from "../magicui/typing-animation";
const Discovery = () => {
  return (
    <div>
      <div className='w-[7%] sm:w-full '>
        <SparklesText
          text='Artist Discovery Page Biography'
          sparklesCount={20}
          className='relative top-12 text-lg sm:text-5xl py-4'
          colors={{ first: "#A07CFE", second: "#FE8FB5" }}
        />
        <div className='flex gap-7 flex-col sm:flex-row mt-8 w-full'>
          <About />
          <div className='relative top-8 pb-11'>
            <p className='text-[3.5rem] font-semibold text-lg sm:text-5xl'>
              Producer Statement
            </p>

            <TypingAnimation
              duration={50}
              className='max-w-96 leading text-sm font-bold text-black dark:text-white relative top-3'
              text={`"My goal is to create music that resonates on a deep level, capturing the essence of the streets while pushing the envelope of what's possible in hip hop. Every beat tells a story, and I strive to make each one a unique experience that both artists and listeners can connect with."`}
            />
          </div>
        </div>
      </div>

      <MarqueeDemo />
    </div>
  );
};

export default Discovery;
