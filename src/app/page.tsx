"use client";

import MusicLayout from "@/components/MusicLayout";
import { useRenderLayoutDisplay } from "../hooks/useRenderLayoutDisplay";
export default function Home() {
  const layout = useRenderLayoutDisplay();
  return <MusicLayout>{layout}</MusicLayout>;
}
