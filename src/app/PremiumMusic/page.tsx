import MusicLayout from "@/components/MusicLayout";
import React from "react";
import dynamic from "next/dynamic";

const RegisterLoading = dynamic(
  () => import("@/components/Authentication/Authentication")
);
const PremiumMusic = () => {
  return (
    <MusicLayout>
      <RegisterLoading />
    </MusicLayout>
  );
};

export default PremiumMusic;
