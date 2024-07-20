import { File, Folder, Tree } from "@/components/magicui/file-tree";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { CiLock } from "react-icons/ci";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function FileTreeDemo() {
  return (
    <div className='relative flex h-[300px]  flex-col items-center justify-center '>
      <Tree
        className='p-2 overflow-hidden '
        initialSelectedId='7'
        initialExpandedItems={[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
        ]}
        elements={ELEMENTS}
      >
        <Folder element='src' value='1'>
          <Folder value='2' element='Profile'>
            <File value='3'>
              <p>Discovery.docx</p>
            </File>
            <File value='4'>
              <p>Dashboard.docx</p>
            </File>
          </Folder>
          <Folder value='5' element='Music Folder'>
            <Folder value='6' element='Leaks'>
              <File value='7'>
                <p>Leaks.mp4</p>
              </File>
            </Folder>
            <File value='8'>
              <p>Beats.mp4</p>
            </File>
            <File value='9'>
              <p>Music.mp4</p>
            </File>
          </Folder>
          <Folder value='10' element='hidden'>
            <File value='11'>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className='flex'>
                      Locked music <CiLock className='relative top-1' />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Exclusive Music and Beats can only be bought here 🤑</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </File>
          </Folder>
        </Folder>
      </Tree>
    </div>
  );
}

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "app",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "layout.tsx",
          },
          {
            id: "4",
            isSelectable: true,
            name: "page.tsx",
          },
        ],
      },
      {
        id: "5",
        isSelectable: true,
        name: "Music",
        children: [
          {
            id: "6",
            isSelectable: true,
            name: "Beats.mp4",
          },
          {
            id: "7",
            isSelectable: true,
            name: "Music.mp4",
          },
        ],
      },
      {
        id: "8",
        isSelectable: true,
        name: "lib",
        children: [
          {
            id: "9",
            isSelectable: true,
            name: "utils.ts",
          },
        ],
      },
    ],
  },
];
