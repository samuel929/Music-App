import React, { ReactNode, FC } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TProps {
  children: ReactNode;
}
const ScrollAreaMusicAndBeats = ({ children }: TProps) => {
  return (
    <div className='flex justify-center items-center relative h-screen pr-11 top-24'>
      <ScrollArea className='h-[600px] w-full rounded-md '>
        <div className='p-4'>
          <div>{children}</div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ScrollAreaMusicAndBeats;
