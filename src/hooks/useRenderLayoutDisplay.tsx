// /src/hooks/useRenderLayoutDisplay.js

import Dashboard from "../app/discovery/page";
import Discovery from "@/components/Discovery/Discovery";
import Leaks from "../app/leaks/page";
import { usePathname } from "next/navigation";
import Beats from "@/app/beats/page";
import Music from "@/app/music/page";
import PremiumMusic from "@/app/PremiumMusic/page";
import Merch from "@/app/merch/page";

export const useRenderLayoutDisplay = () => {
  const pathname = usePathname();

  const navigation = () => {
    switch (pathname) {
      case "/":
        return <Discovery />;
      case "/dashboard":
        return <Dashboard />;
      case "/leaks":
        return <Leaks />;
      case "/beats":
        return <Beats />;
      case "/music":
        return <Music />;
      case "/PremiumMusic":
        return <PremiumMusic />;
      case "/merch":
        return <Merch />;
      default:
        return null;
    }
  };

  return navigation();
};
