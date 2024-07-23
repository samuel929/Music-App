import React from "react";
import Search from "../../components/Dashbaord/Search";
import MusicLayout from "@/components/MusicLayout";
import Hero from "@/components/Dashbaord/Hero";

const Dashboard = () => {
  return (
    <MusicLayout>
      <Search placeholder='Search Music, Artist, Genre' />
      <div>
        <Hero />
      </div>
    </MusicLayout>
  );
};

export default Dashboard;
