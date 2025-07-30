import React from "react";
import DateTimeDisplay from "./Date";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Left = () => {
  return (
    <div className="">
      <div className="">
        <h2 className="jarvis font-bold text-3xl scale-x-[190%] origin-left w-1/2 tracking-wide ">
          JARVIS
        </h2>
        <p className="jarvis text-[9.5px] tracking-[1.27px]  block ">
          Hunt Problems. Dominate. Never Submit.
        </p>
      </div>
      <div className="flex items-center justify-between py-2 pr-3 mt-4  ">
        <span className="">Jarvis_IronMan</span>
        <label className="relative inline-block w-10 h-5 cursor-pointer">
          <input type="checkbox" defaultChecked className="sr-only peer" />
          <div className="absolute inset-0 rounded-full bg-[#13404F]  bg-left transition-all duration-400 peer-checked:bg-right"></div>
          <div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-[#01E3FF] bg-[length:205%_100%] bg-right transition-all duration-400 peer-checked:left-[calc(100%-0.75rem-0.375rem)] peer-checked:bg-left"></div>
        </label>
      </div>
      <div className=" text-xs py-2 flex flex-col gap-2 border-y border-y-white/20">
        <div className="opacity-50 font-semibold">
          <DateTimeDisplay />
        </div>
        <h3 className=" text-sm ">SELECT USER</h3>
        <div className="flex items-center justify-between border-1 border-white/50 outline-0 w-full rounded-lg py-1 px-2">
          <select name="user" className="w-full outline-none" id="">
            <option className="bg-[#13404F] ">_Index</option>
            <option className="bg-[#13404F]">Iron Man</option>
            <option className="bg-[#13404F]">Tony Stark</option>
            <option className="bg-[#13404F]">Thor</option>
            <option className="bg-[#13404F]">Hulk</option>
          </select>
        </div>
        <h3 className=" text-sm font-semibold text-[#01E3FF]">SENSOR 4</h3>
      </div>
      <div className="text-xs py-2">
        <div className="flex items-center text-sm justify-between  mb-4  ">
          <h3 className="">DETECT SENSORS 3 </h3>
          <div className="bg-[#13404F] px-3 rounded-sm flex items-center gap-1">
            <FaChevronUp className=" " />
          </div>
        </div>
        <div className="flex  justify-between flex-col gap-2">
          <h4 className="text-[#01E3FF] mb-1">27J9V92</h4>
          <h4 className="text-[#01E3FF] flex justify-between">
            <span className="text-white/50">STATUS</span>ACTIVE
          </h4>
          <h4 className="text-[#01E3FF] flex justify-between">
            <span className="text-white/50">LOCATION</span>INDIA
          </h4>
          <h4 className="text-[#01E3FF] flex justify-between">
            <span className="text-white/50">IP ADDRESS</span>237.84.2.178
          </h4>
          <h4 className="text-[#01E3FF] flex justify-between">
            <span className="text-white/50">THROUGHTPUT</span>N/A
          </h4>
          <h4 className="text-[#01E3FF] my-1">27J9V62</h4>
          <h4 className="text-[#01E3FF] flex justify-between">
            <span className="text-white/50">STATUS</span>ACTIVE
          </h4>
          <h4 className="text-[#01E3FF] flex justify-between">
            <span className="text-white/50">LOCATION</span>USA
          </h4>
          <h4 className="text-[#01E3FF] flex justify-between">
            <span className="text-white/50">IP ADDRESS</span>196.168.244.90
          </h4>
          <h4 className="text-[#01E3FF] flex justify-between">
            <span className="text-white/50">THROUGHTPUT</span>N/A
          </h4>
        </div>
      </div>
      <div className="text-xs border-y border-y-white/20 py-2">
        <div className="flex items-center text-sm justify-between   ">
          <h3 className="">HUNT SENSORS 2 </h3>
          <div className="bg-[#13404F] px-3 rounded-sm flex items-center gap-1">
            <FaChevronDown className="" />
          </div>
        </div>
      </div>
      <div className="text-xs py-2 border-b border-b-white/20">
        <div className="flex items-center text-sm justify-between  mb-4  ">
          <h3 className="">DETECT SENSORS 3 </h3>
          <div className="bg-[#13404F] px-3 rounded-sm flex items-center gap-1">
            <FaChevronUp className=" " />
          </div>
        </div>
        <div className="flex  justify-between flex-col gap-2">
          <h4 className="text-[#01E3FF] mb-1">27J9V92</h4>
          <h4 className="text-[#01E3FF] flex justify-between">
            <span className="text-white/50">STATUS</span>ACTIVE
          </h4>
          <h4 className="text-[#01E3FF] flex justify-between">
            <span className="text-white/50">LOCATION</span>INDIA
          </h4>
          <h4 className="text-[#01E3FF] flex justify-between">
            <span className="text-white/50">IP ADDRESS</span>237.84.2.178
          </h4>
          <h4 className="text-[#01E3FF] flex justify-between">
            <span className="text-white/50">OS</span>WINDOWS 10
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Left;
