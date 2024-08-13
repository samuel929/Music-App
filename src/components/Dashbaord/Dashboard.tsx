import React from "react";
import Search from "../../components/Dashbaord/Search";
import MusicLayout from "@/components/MusicLayout";
import Hero from "@/components/Dashbaord/Hero";
const Dashboard = () => {
  return (
    <MusicLayout>
      <div className='flex justify-center'>
        <Search placeholder='Search Music, Artist, Genre' />
      </div>
      <div className='pr-14'>
        <Hero />
      </div>
    </MusicLayout>
  );
};

export default Dashboard;
