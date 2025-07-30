import React from "react";
import { BsGearWideConnected } from "react-icons/bs";
import { FaBell, FaFileAlt, FaFire, FaRobot } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { VscTriangleDown } from "react-icons/vsc";

const Right = () => {
  function generateRandomIP() {
    return Array(4)
      .fill(0)
      .map(() => Math.floor(Math.random() * 256))
      .join(".");
  }
  function getTimeAgo(index) {
    if (index === 1) return "a minute ago";
    if (index > 1 && index <= 8) return `${index} minutes ago`;
    if (index === 9) return "an hour ago";
    if (index >= 10 && index <= 14) return `${index - 8} hours ago`;
    if (index === 15) return "a day ago";
    return `${Math.abs(index - 14)} days ago`;
  }

  return (
    <div className="flex flex-col items-center justify-between h-full w-full p-2">
      <div className="w-full flex gap-2 bg-[#092E3A] rounded-lg px-4  py-2 text-white">
        <BsGearWideConnected />
        <FaRobot />
        <FaBell />
        <FaFileAlt />

        <div className="w-1/2 flex gap-2 bg-[#051B1F]  rounded-lg px-1">
          <IoSearchOutline />
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center  rounded-lg py-4 ">
        <div className="text-[#01E3FF] self-baseline flex gap-2 text-sm">
          NEW EVENTS
          <VscTriangleDown />
        </div>
        <div className="h-full w-full">
          {Array.from({ length: 15 }).map((_, index) => (
            <div className="flex items-center justify-between border-t border-t-white/20 py-2">
              <div className="">
                <h2 className="text-sm">Target: {generateRandomIP()}</h2>
                <p className="text-xs">
                  {getTimeAgo(index)}
                </p>
              </div>
              <FaFire />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Right;
