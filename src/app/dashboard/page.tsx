import React from "react";

import dynamic from "next/dynamic";

const DashBoardComponent = dynamic(
  () => import("../../components/Dashbaord/Dashboard"),
  {
    loading: () => (
      <div className='relative top-36 h-[343px] w-full max-w-[882px] rounded-md bg-black/50 backdrop-blur-md p-10 animate-pulse'>
        <div className='flex flex-col md:flex-row'>
          <div className='flex-1'>
            <div className='h-8 w-32 bg-gray-700 mb-4'></div>
            <div className='h-16 w-full md:w-[60%] bg-gray-700 mb-4'></div>
            <div className='h-6 w-[50%] bg-gray-700'></div>
          </div>
          <div className='flex-1 mt-8 md:mt-0'>
            <div className='h-[343px] bg-gray-700'></div>
          </div>
        </div>
      </div>
    ),
  }
);
const Dashboard = () => {
  return <DashBoardComponent />;
};

export default Dashboard;
