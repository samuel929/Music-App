import { DockDemo } from "@/components/MenuSocialIcons";
import MusicLayout from "@/components/MusicLayout";

export default function Home() {
  return (
    <MusicLayout>
      <div className='flex justify-end'>
        <DockDemo />
      </div>
    </MusicLayout>
  );
}
