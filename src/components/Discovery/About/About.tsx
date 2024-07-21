import React from "react";
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";
const About = () => {
  return (
    <div className='h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8'>
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className='text-[3.5rem] font-semibold'>
          DiCesTheHeater
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-custom-pink to-custom-purple'>
            .
          </span>
        </p>
      </BoxReveal>
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className='mt-[.5rem] text-[1rem]'>
          Born Lungelo Earl Hlabangane, is a trailblazing hip hop artist and
          music producer from{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-custom-pink to-custom-purple'>
            Nelspruit, Mpumalanga.
          </span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className='mt-[1.5rem]'>
          <p>
            Known for his innovative beats and production techniques,
            <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-custom-pink to-custom-purple'>
              {" "}
              DiCes has been shaping the sound of contemporary hip hop since his
              early teens.
            </span>
            He began his career by producing tracks for local artists and is
            quickly gaining recognition for his distinctive sound, which blends
            classic hip hop elements with modern influences. Today, DiCes
            continues to push the boundaries of the genre . <br />
            <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-custom-pink to-custom-purple'>
              -&gt; 100% Dope,Producer and MC .
            </span>{" "}
            <br />
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Button className='mt-[1.6rem]  bg-gradient-to-r from-custom-pink to-custom-purple'>
          Discography Albums and EPs
        </Button>
      </BoxReveal>
    </div>
  );
};

export default About;
