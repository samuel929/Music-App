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
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-black py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='bg-black/50 backdrop-blur-md rounded-lg shadow-xl overflow-hidden'>
          <div className='p-6 sm:p-8 md:p-10'>
            <h1 className='text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center'>
              Vapes
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 '>
              {vapeProducts.map((product) => (
                <div key={product.id} className='flex justify-center'>
                  <VapeProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
