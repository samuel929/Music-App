"use client";

import React, { useState } from "react";

import MusicLayout from "@/components/MusicLayout";
import { CheckoutModal } from "@/components/CheckoutModal";
import { Separator } from "@/components/ui/separator";

export default function ProductDetailsPage() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCheckoutOpen = () => setIsCheckoutOpen(true);
  const handleCheckoutClose = () => setIsCheckoutOpen(false);

  return (
    <MusicLayout>
      <div className='flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32'>
        <div className='flex flex-col sm:flex-row items-center justify-between w-full max-w-3xl mb-12'>
          <Separator className='my-2 bg-gradient-to-r from-custom-pink to-custom-purple h-1 w-24 sm:w-40 lg:w-60' />
          <p className='text-center my-4 sm:my-0 text-lg font-medium'>
            PRODUCT DETAILS
          </p>
          <Separator className='my-2 bg-gradient-to-r from-custom-pink to-custom-purple h-1 w-24 sm:w-40 lg:w-60' />
        </div>

        <div className='w-full'>{/* <ProductContainer /> */}</div>

        <button
          onClick={handleCheckoutOpen}
          className='mt-8 bg-gradient-to-r from-custom-pink to-custom-purple text-white py-2 px-6 rounded-md'
        >
          Buy Now
        </button>
      </div>

      {/* Checkout Modal */}
      {isCheckoutOpen && <CheckoutModal onClose={handleCheckoutClose} />}
    </MusicLayout>
  );
}
