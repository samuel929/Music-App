"use client";
import { File, Folder, Tree } from "@/components/magicui/file-tree";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { CiLock } from "react-icons/ci";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function FileTreeDemo() {
  const pathname = usePathname();
  return (
    <div className='relative flex h-[400px]   flex-col items-center justify-center '>
      <Tree
        className='p-2 overflow-hidden max-w-[275px] '
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
          "12",
          "13",
        ]}
        elements={ELEMENTS}
      >
        <Folder element='src' value='1'>
          <Folder value='2' element='Profile'>
            <Link
              className={` ${
                pathname === "/"
                  ? "bg-gradient-to-r from-custom-pink to-custom-purple rounded"
                  : ""
              }`}
              href='/'
            >
              <File value='3'>Discovery.docx</File>
            </Link>
            <Link
              className={` ${
                pathname === "/dashboard"
                  ? "bg-gradient-to-r from-custom-pink to-custom-purple rounded"
                  : ""
              }`}
              href='/dashboard'
            >
              <File value='4'>Dashboard.docx</File>
            </Link>
          </Folder>
          <Folder value='5' element='Music'>
            <Folder value='6' element='Leaks'>
              <Link
                className={` ${
                  pathname === "/leaks"
                    ? "bg-gradient-to-r from-custom-pink to-custom-purple rounded"
                    : ""
                }`}
                href='/leaks'
              >
                <File value='7'>Leaks.mp4</File>
              </Link>
            </Folder>
            <Folder value='8' element='SoundKits'>
              <Link
                className={` ${
                  pathname === "/SoundKits"
                    ? "bg-gradient-to-r from-custom-pink to-custom-purple rounded"
                    : ""
                }`}
                href='/SoundKits'
              >
                <File value='9'>SoundKits.mp4</File>
              </Link>
            </Folder>
            <Link
              className={` ${
                pathname === "/beats"
                  ? "bg-gradient-to-r from-custom-pink to-custom-purple rounded"
                  : ""
              }`}
              href='/beats'
            >
              <File value='10'>
                <p>Beats.mp4</p>
              </File>
            </Link>
            <Link
              className={` ${
                pathname === "/music"
                  ? "bg-gradient-to-r from-custom-pink to-custom-purple rounded"
                  : ""
              }`}
              href='/music'
            >
              <File value='11'>
                <p>Music.mp4</p>
              </File>
            </Link>
          </Folder>
          <Folder value='12' element='Hidden'>
            <Link
              className={` ${
                pathname === "/PremiumMusic"
                  ? "bg-gradient-to-r from-custom-pink to-custom-purple rounded"
                  : ""
              }`}
              href='/PremiumMusic'
            >
              <File value='13'>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className='flex'>
                        Locked music <CiLock className='relative top-1' />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Exclusive Music and Beats can only be bought here 🤑
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </File>
            </Link>
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
