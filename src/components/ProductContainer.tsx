// /app/page.tsx
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
    <div className='flex justify-center items-center mb-40 '>
      <div className='bg-black/50 backdrop-blur-md p-10 rounded-md  '>
        <h1 className='text-white text-2xl mb-6'> Vapes</h1>
        <div className='flex'>
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
