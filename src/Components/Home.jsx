import React from "react";
import Left from "./left";
import Mid from "./Mid";
import Right from "./Right";

const Home = () => {
  return (
    <div className="grid grid-cols-6 py-5">
      <div className="col-span-1 px-4">
        <Left />
      </div>
      <div className="col-span-4 px-4 border-x border-x-white/20"> 
        <Mid />
      </div>
      <div className="col-span-1 px-4">
        <Right />
      </div>
    </div>
  );
};

export default Home;
