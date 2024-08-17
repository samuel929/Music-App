import React from "react";

import dynamic from "next/dynamic";

const DashBoardComponent = dynamic(
  () => import("../../components/Dashbaord/Dashboard")
);
const Dashboard = () => {
  return <DashBoardComponent />;
};

export default Dashboard;
