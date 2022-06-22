import React from "react";
import { Outlet } from "react-router-dom";
import BottomTab from "../components/BottomTab";

const Home = () => {
  return (
    <div className="flex flex-col items-center lg:px-80 px-4">
      <Outlet />
      <BottomTab />
    </div>
  );
};

export default Home;
