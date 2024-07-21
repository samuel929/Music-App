// /src/hooks/useRenderLayoutDisplay.js

import Dashboard from "../app/dashboard/page";
import Discovery from "@/components/Discovery/Discovery";
import Leaks from "../app/leaks/page";
import { usePathname } from "next/navigation";
import Beats from "@/app/beats/page";
import Music from "@/app/music/page";
import PremiumMusic from "@/app/PremiumMusic/page";

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
      default:
        return null;
    }
  };

  return navigation();
};
