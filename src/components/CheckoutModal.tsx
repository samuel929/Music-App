import React from "react";

export const CheckoutModal = ({ onClose }: any) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white rounded-lg p-8 max-w-lg w-full'>
        <h2 className='text-2xl font-bold mb-4'>Checkout</h2>
        <p>Complete your purchase details...</p>
        <button
          onClick={onClose}
          className='mt-4 bg-red-500 text-white py-2 px-4 rounded-md'
        >
          Close
        </button>
      </div>
    </div>
  );
};
