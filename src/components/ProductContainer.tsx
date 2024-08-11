import { FC } from "react";
import VapeProductCard from "@/components/VapeCard";

const vapeProducts = [
  {
    id: 1,
    name: "Vape 1",
    description: "High-quality vape with a smooth taste.",
    price: 300,
    imageUrl:
      "https://content-eu-live-global.prod.marketing.bat.net/media/nextgenimages//vuse-go-cloudberry_burst-0_-793e5637.webp",
  },
  {
    id: 2,
    name: "Vape 2",
    description: "Affordable vape with great performance.",
    price: 250,
    imageUrl:
      "https://content-eu-live-global.prod.marketing.bat.net/media/nextgenimages//vuse-go-lemon_juniper_zest-0_-469dcb7c.webp",
  },
];

const Page: FC = () => {
  return (
    <div className='flex justify-center items-center mb-16 sm:mb-40'>
      <div className='bg-black/50 backdrop-blur-md p-6 sm:p-10 rounded-md w-full max-w-[1200px]'>
        <h1 className='text-white text-xl sm:text-2xl mb-4 sm:mb-6 text-center sm:text-left'>
          Vapes
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {vapeProducts.map((product) => (
            <div className='p-4' key={product.id}>
              <VapeProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
