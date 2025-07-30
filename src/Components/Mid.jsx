import React from "react";
import { AiFillDatabase } from "react-icons/ai";
import { FaBug } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa6";
import { GiEntryDoor } from "react-icons/gi";
import { GoDot } from "react-icons/go";
import { HiComputerDesktop } from "react-icons/hi2";
import { IoMdWifi } from "react-icons/io";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import BarChart from "./Bars";

const data = [
  { value: 0 },
  { value: 0 },
  { value: 0 },
  { value: 0 },
  { value: 0 },
  { value: 0 },
  { value: 0 },
  { value: 0 },
  { value: 0 },
  { value: 1 },
];
const Mid = () => {
  return (
    <div>
      <div className="flex justify-around items-center border-b border-b-white/20 h-12 px-2">
        <input
          type="radio"
          name="tab"
          id="hud"
          defaultChecked
          className="hidden peer/hud"
        />
        <label
          htmlFor="hud"
          className="text-base group relative h-full px-2 cursor-pointer flex items-center border-b-2 border-transparent peer-checked/hud:border-[#01E3FF]"
        >
          HUD
        </label>

        <input
          type="radio"
          name="tab"
          id="killbox"
          className="hidden peer/killbox"
        />
        <label
          htmlFor="killbox"
          className="text-base group relative h-full px-2 cursor-pointer flex items-center border-b-2 border-transparent peer-checked/killbox:border-[#01E3FF]"
        >
          KILLBOX
        </label>

        <input
          type="radio"
          name="tab"
          id="explore"
          className="hidden peer/explore"
        />
        <label
          htmlFor="explore"
          className="text-base group relative h-full px-2 cursor-pointer flex items-center border-b-2 border-transparent peer-checked/explore:border-[#01E3FF]"
        >
          EXPLORE
        </label>

        <input
          type="radio"
          name="tab"
          id="intel"
          className="hidden peer/intel"
        />
        <label
          htmlFor="intel"
          className="text-base group relative h-full px-2 cursor-pointer flex items-center border-b-2 border-transparent peer-checked/intel:border-[#01E3FF]"
        >
          INTEL
        </label>

        <input
          type="radio"
          name="tab"
          id="incidents"
          className="hidden peer/incidents"
        />
        <label
          htmlFor="incidents"
          className="text-base group relative h-full px-2 cursor-pointer flex items-center border-b-2 border-transparent peer-checked/incidents:border-[#01E3FF]"
        >
          INCIDENTS
        </label>

        <input
          type="radio"
          name="tab"
          id="reports"
          className="hidden peer/reports"
        />
        <label
          htmlFor="reports"
          className="text-base group relative h-full px-2 cursor-pointer flex items-center border-b-2 border-transparent peer-checked/reports:border-[#01E3FF]"
        >
          REPORTS
        </label>

        <input
          type="radio"
          name="tab"
          id="config"
          className="hidden peer/config"
        />
        <label
          htmlFor="config"
          className="text-base group relative h-full px-2 cursor-pointer flex items-center border-b-2 border-transparent peer-checked/config:border-[#01E3FF]"
        >
          CONFIG
        </label>
      </div>
      <div className="grid grid-cols-10 py-2 pb-5  border-b-2 border-b-white/20">
        <div className="col-span-3 grid grid-cols-3 gap-2">
          <div className="card col-span-1 grid grid-cols-2 items-center ">
            <div className="col-span-1">
              <h4 className="font-bold text-xs">MALWARE</h4>
              <span className="text-[10px] opacity-60">190</span>
            </div>
            <div className="icon col-span-1 right-0 flex justify-end px-2">
              <FaBug className="text-xl text-[#01e3ff] " />
            </div>
            <div
              className="h-1 col-span-2 rounded-full bg-[#01E3FF]"
              style={{ width: `${Math.random() * 100}%` }}
            ></div>
          </div>
          <div className="card col-span-1 grid grid-cols-2 items-center ">
            <div className="col-span-1">
              <h4 className="font-bold text-xs">INTRUSION</h4>
              <span className="text-[10px] opacity-60">19</span>
            </div>
            <div className="icon col-span-1 right-0 flex justify-end px-2">
              <GiEntryDoor className="text-xl text-[#01e3ff] " />
            </div>
            <div
              className="h-1 col-span-2 rounded-full bg-[#01E3FF]"
              style={{ width: `${Math.random() * 100}%` }}
            ></div>
          </div>
          <div className="card col-span-1 grid grid-cols-2 items-center ">
            <div className="col-span-1">
              <h4 className="font-bold text-xs">C&C</h4>
              <span className="text-[10px] opacity-60">34</span>
            </div>
            <div className="icon col-span-1 right-0 flex justify-end px-2">
              <IoMdWifi className="text-xl text-[#01e3ff] " />
            </div>
            <div
              className="h-1 col-span-2 rounded-full bg-[#01E3FF]"
              style={{ width: `${Math.random() * 100}%` }}
            ></div>
          </div>
          <div className="card col-span-1 grid grid-cols-2 items-center ">
            <div className="col-span-1">
              <h4 className="font-bold text-xs">APT</h4>
              <span className="text-[10px] opacity-60">97</span>
            </div>
            <div className="icon col-span-1 right-0 flex justify-end px-2">
              <FaLayerGroup className="text-xl text-[#01e3ff] " />
            </div>
            <div
              className="h-1 col-span-2 rounded-full bg-[#01E3FF]"
              style={{ width: `${Math.random() * 100}%` }}
            ></div>
          </div>
          <div className="card col-span-1 grid grid-cols-2 items-center ">
            <div className="col-span-1">
              <h4 className="font-bold text-xs text-nowrap">DATA LEAK</h4>
              <span className="text-[10px] opacity-60">190</span>
            </div>
            <div className="icon col-span-1 right-0 flex justify-end px-2">
              <AiFillDatabase className="text-xl text-[#01e3ff] " />
            </div>
            <div
              className="h-1 col-span-2 rounded-full bg-[#01E3FF]"
              style={{ width: `${Math.random() * 100}%` }}
            ></div>
          </div>
          <div className="card col-span-1 grid grid-cols-2 items-center ">
            <div className="col-span-1">
              <h4 className="font-bold text-xs">WEB</h4>
              <span className="text-[10px] opacity-60">190</span>
            </div>
            <div className="icon col-span-1 right-0 flex justify-end px-2">
              <HiComputerDesktop className="text-xl text-[#01e3ff] " />
            </div>
            <div
              className="h-1 col-span-2 rounded-full bg-[#01E3FF]"
              style={{ width: `${Math.random() * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="col-span-7 grid grid-cols-3">
          <div className="col-span-1 grid grid-cols-3 gap-5 justify-around items-center">
            <div className="flex items-center justify-between h-fit col-span-2 border-1 border-white/50 outline-0 w-full rounded-lg py-0.5 px-1.5">
              <select
                name="user"
                className="w-full outline-none text-white/50 text-xs"
                id=""
              >
                <option className="bg-[#13404F] ">Security Service</option>
                <option className="bg-[#13404F]">Iron Man</option>
                <option className="bg-[#13404F]">Tony Stark</option>
                <option className="bg-[#13404F]">Thor</option>
                <option className="bg-[#13404F]">Hulk</option>
              </select>
            </div>
            <div className="bg-[#13404F] col-span-1 w-fit h-fit rounded-lg px-1 text-xs py-1 ">
              731 kb/s
            </div>
            <div className="col-span-3 px-5">
              <div className="h-0.5 bg-gradient-to-r from-gray-900 via-gray-300 to-blue-700 flex relative items-center">
                <div className="absolute -right-1.5">
                  <GoDot />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-3 gap-5 justify-around items-center">
            <div className="flex items-center justify-between h-fit col-span-2 border-1 border-white/50 outline-0 w-full rounded-lg py-0.5 px-1.5">
              <select
                name="user"
                className="w-full outline-none text-white/50 text-xs"
                id=""
              >
                <option className="bg-[#13404F] ">Information</option>
                <option className="bg-[#13404F]">Iron Man</option>
                <option className="bg-[#13404F]">Tony Stark</option>
                <option className="bg-[#13404F]">Thor</option>
                <option className="bg-[#13404F]">Hulk</option>
              </select>
            </div>
            <div className="bg-[#13404F] col-span-1 w-fit h-fit rounded-lg px-1 text-xs py-1 ">
              980 kb/s
            </div>
            <div className="col-span-3 px-5">
              <div className="w-full h-6 relative rounded-lg ">
                <ResponsiveContainer>
                  <LineChart
                    data={[
                      { value: 1 },
                      { value: 0 },
                      { value: 2 },
                      { value: 1 },
                      { value: 4 },
                      { value: 1 },
                      { value: 3 },
                      { value: 0 },
                      { value: 2 },
                      { value: 4 },
                    ]}
                  >
                    <defs>
                      <linearGradient id="wave" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#083137" />
                        <stop offset="50%" stopColor="#ea900a" />
                        <stop offset="100%" stopColor="#083137" />
                      </linearGradient>
                    </defs>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="url(#wave)"
                      strokeWidth={3}
                      dot={false}
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="absolute -right-1.5 -top-0.5 ">
                  <GoDot />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-3 gap-5 justify-around items-center">
            <div className="flex items-center justify-between h-fit col-span-2 border-1 border-white/50 outline-0 w-full rounded-lg py-0.5 px-1.5">
              <select
                name="user"
                className="w-full outline-none text-white/50 text-xs"
                id=""
              >
                <option className="bg-[#13404F] ">Peer to Peer</option>
                <option className="bg-[#13404F]">Iron Man</option>
                <option className="bg-[#13404F]">Tony Stark</option>
                <option className="bg-[#13404F]">Thor</option>
                <option className="bg-[#13404F]">Hulk</option>
              </select>
            </div>
            <div className="bg-[#13404F] col-span-1 w-fit h-fit rounded-lg px-1 text-xs py-1 ">
              588 kb/s
            </div>
            <div className="col-span-3 px-5">
              <div className="w-full h-6 relative rounded-lg ">
                <ResponsiveContainer>
                  <LineChart
                    data={[
                      { value: 1 },
                      { value: 0 },
                      { value: 2 },
                      { value: 1 },
                      { value: 4 },
                      { value: 1 },
                      { value: 3 },
                      { value: 0 },
                      { value: 2 },
                      { value: 4 },
                      { value: 1 },
                      { value: 3 },
                      { value: 0 },
                      { value: 2 },
                      { value: 4 },
                    ]}
                  >
                    <defs>
                      <linearGradient id="wave" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#083137" />
                        <stop offset="50%" stopColor="#ea900a" />
                        <stop offset="100%" stopColor="#083137" />
                      </linearGradient>
                    </defs>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="url(#wave)"
                      strokeWidth={3}
                      dot={false}
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="absolute -right-1.5 -top-0.5 ">
                  <GoDot />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-3 gap-5 justify-around items-center">
            <div className="flex items-center justify-between h-fit col-span-2 border-1 border-white/50 outline-0 w-full rounded-lg py-0.5 px-1.5">
              <select
                name="user"
                className="w-full outline-none text-xs text-white/50"
                id=""
              >
                <option className="bg-[#13404F] ">Internal</option>
                <option className="bg-[#13404F]">Iron Man</option>
                <option className="bg-[#13404F]">Tony Stark</option>
                <option className="bg-[#13404F]">Thor</option>
                <option className="bg-[#13404F]">Hulk</option>
              </select>
            </div>
            <div className="bg-[#13404F] col-span-1 ml-auto mr-5 w-fit h-fit rounded-lg px-1 text-xs py-1 ">
              699 kb/s
            </div>
            <div className="col-span-3 px-5">
              <div className="w-full h-6 relative rounded-lg ">
                <ResponsiveContainer>
                  <LineChart
                    data={[
                      { value: 1 },
                      { value: 0 },
                      { value: 2 },
                      { value: 1 },
                      { value: 4 },
                      { value: 1 },
                      { value: 3 },
                      { value: 0 },
                      { value: 2 },
                      { value: 4 },
                      { value: 1 },
                      { value: 3 },
                      { value: 0 },
                      { value: 2 },
                      { value: 4 },
                      { value: 4 },
                    ]}
                  >
                    <defs>
                      <linearGradient
                        id="stepGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#3f5f75" />
                        <stop offset="100%" stopColor="#1e90ff65" />
                      </linearGradient>
                    </defs>
                    <Line
                      type="stepAfter"
                      dataKey="value"
                      stroke="url(#stepGradient)"
                      strokeWidth={3}
                      dot={false}
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="absolute -right-1 -top-0.5 ">
                  <GoDot />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-3 gap-5 justify-around items-center">
            <div className="flex items-center justify-between h-fit col-span-2 border-1 border-white/50  outline-0 w-full rounded-lg py-0.5 px-1.5">
              <select
                name="user"
                className="w-full text-xs outline-none text-white/50"
                id=""
              >
                <option className="bg-[#13404F] ">Encrypted</option>
                <option className="bg-[#13404F]">Iron Man</option>
                <option className="bg-[#13404F]">Tony Stark</option>
                <option className="bg-[#13404F]">Thor</option>
                <option className="bg-[#13404F]">Hulk</option>
              </select>
            </div>
            <div className="bg-[#13404F] col-span-1 ml-auto mr-5 w-fit h-fit text-nowrap  rounded-lg px-1 text-xs py-1 ">
              498 kb/s
            </div>
            <div className="col-span-3 px-5">
              <div className="w-full h-6 relative rounded-lg ">
                <ResponsiveContainer>
                  <LineChart
                    data={[
                      { value: 1 },
                      { value: 0 },
                      { value: 2 },
                      { value: 1 },
                      { value: 4 },
                      { value: 1 },
                      { value: 3 },
                      { value: 0 },
                      { value: 2 },
                      { value: 2 },
                    ]}
                  >
                    <defs>
                      <linearGradient
                        id="stepGradient1"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#342431" />
                        <stop offset="100%" stopColor="#143253" />
                      </linearGradient>
                    </defs>
                    <Line
                      type="stepAfter"
                      dataKey="value"
                      stroke="url(#stepGradient1)"
                      strokeWidth={3}
                      dot={false}
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="absolute -right-1 top-1 ">
                  <GoDot />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-10 items-center border-b border-white/20 py-2">
        <div className="col-span-5 w-full flex  relative mx-auto border-r border-white/20">
          <div className="left-text pl-2 flex flex-col justify-between items-start">
            <div className="">
              <p className="border-b border-white/20 bg-gradient-to-r from-[#01e3ff50] to-[#01e3ff00]">
                Intial Access <br /> 234{" "}
              </p>
              <p className="border-b border-white/20">
                Execution
                <br /> 743
              </p>
              <p className="border-b border-white/20">
                Persistance
                <br /> 987
              </p>
            </div>
            <div className="">
              <p className="border-b border-white/20">
                Discovery <br /> 532
              </p>
              <p className="border-b border-white/20">
                Defense <br /> 727
              </p>
              <p className="border-b border-white/20">
                Credential
                <br /> 234
              </p>
            </div>
          </div>
          <svg
            viewBox="0 0 400 400"
            className="absolute pl-3 top-1/2 left-1/2 -translate-1/2 w-[400px] h-[400px] col-span-5   mx-auto rounded-full"
          >
            <circle
              cx="200"
              cy="200"
              r="150"
              stroke="#01e3ff"
              fill="none"
              strokeWidth="1"
            />
            <circle
              cx="200"
              cy="200"
              r="100"
              stroke="#01e3ff"
              fill="none"
              strokeWidth="1"
            />
            <g className="animate-spin-slow origin-center">
              {[...Array(30)].map((_, i) => {
                const angle = (i * 12 * Math.PI) / 180;
                const x1 = 200 + Math.cos(angle) * 110;
                const y1 = 200 + Math.sin(angle) * 110;
                const x2 = 200 + Math.cos(angle) * 100;
                const y2 = 200 + Math.sin(angle) * 100;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#01e3ff"
                    strokeWidth="5"
                  />
                );
              })}
            </g>
            <circle
              cx="200"
              cy="200"
              r="50"
              stroke="#01e3ff"
              fill="none"
              strokeWidth="1"
            />
            <g className="animate-spin-slow-reverse origin-center">
              {[...Array(30)].map((_, i) => {
                const angle = (i * 12 * Math.PI) / 180;
                const x1 = 200 + Math.cos(angle) * 100;
                const y1 = 200 + Math.sin(angle) * 100;
                const x2 = 200 + Math.cos(angle) * 90;
                const y2 = 200 + Math.sin(angle) * 90;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#01e3ff"
                    strokeWidth="2"
                  />
                );
              })}
            </g>
            <circle
              cx="200"
              cy="200"
              r="25"
              stroke="#01e3ff"
              fill="none"
              strokeWidth="1"
            />
            <g className="animate-spin-slow origin-center">
              {[...Array(30)].map((_, i) => {
                const angle = (i * 12 * Math.PI) / 180;
                const x1 = 200 + Math.cos(angle) * 35;
                const y1 = 200 + Math.sin(angle) * 35;
                const x2 = 200 + Math.cos(angle) * 25;
                const y2 = 200 + Math.sin(angle) * 25;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#01e3ff"
                    strokeWidth="2"
                  />
                );
              })}
            </g>
            <g className="animate-spin-slow-reverse origin-center">
              {[...Array(30)].map((_, i) => {
                const angle = (i * 12 * Math.PI) / 180;
                const x1 = 200 + Math.cos(angle) * 50;
                const y1 = 200 + Math.sin(angle) * 50;
                const x2 = 200 + Math.cos(angle) * 40;
                const y2 = 200 + Math.sin(angle) * 40;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#01e3ff"
                    strokeWidth="2"
                  />
                );
              })}
            </g>
            <g className="animate-spin-slow origin-center ">
              {[...Array(25)].map((_, i) => {
                const angle = (i * 15 * Math.PI) / 180;
                const x1 = 200 + Math.cos(angle) * 55;
                const y1 = 200 + Math.sin(angle) * 55;
                const x2 = 200 + Math.cos(angle) * 50;
                const y2 = 200 + Math.sin(angle) * 50;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#01e3ff"
                    strokeWidth="5"
                  />
                );
              })}
            </g>
            <g className="animate-spin-slow duration-1000 brightness-200 ease-linear origin-center">
              <g className="animate-pulse  origin-center  ">
                {[...Array(300)].map((_, i) => {
                  const angle = (i * 0.5 * Math.PI) / 180;
                  const x1 = 200 + Math.cos(angle) * 200;
                  const y1 = 200 + Math.sin(angle) * 200;
                  const x2 = 200 + Math.cos(angle) * 25;
                  const y2 = 200 + Math.sin(angle) * 25;
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#01e3ff11"
                      strokeWidth="2"
                    />
                  );
                })}
              </g>
            </g>
            {/* Tick marks */}
            <g className="animate-spin-slow-reverse origin-center">
              {[...Array(60)].map((_, i) => {
                const angle = (i * 6 * Math.PI) / 180;
                const x1 = 200 + Math.cos(angle) * 150;
                const y1 = 200 + Math.sin(angle) * 150;
                const x2 = 200 + Math.cos(angle) * 140;
                const y2 = 200 + Math.sin(angle) * 140;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#01e3ff"
                    strokeWidth="1"
                  />
                );
              })}
            </g>
            {/* Center Text */}
            <text
              x="200"
              y="195"
              textAnchor="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="bold"
              dy=".3em"
            >
              47
            </text>
            <text x="200" y="205" textAnchor="middle" fill="#aaa" fontSize="8">
              INCIDENTS
            </text>
          </svg>
          <svg
            viewBox="0 0 400 400"
            className=" w-[400px] h-[400px] col-span-5   mx-auto rounded-full"
          ></svg>
        </div>
        <div className="col-span-5 h-full flex justify-end w-full relative mx-auto">
          <svg
            viewBox="0 0 400 400"
            className="absolute top-1/2 left-1/2 -translate-1/2 w-[400px] h-[400px] col-span-5 mx-auto rounded-full"
          >
            <defs>
              <linearGradient
                id="fadeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#01e3ff" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#01e3ff" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient
                id="fadeGradientLeft"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#01e3ff" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#01e3ff" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            <g className="animate-spin-slow origin-center">
              {[...Array(4)].map((_, i) => {
                const cx = 200;
                const cy = 200;
                const r = 90;
                const thickness = 8;
                const angleGap = Math.PI / 2; // 90 deg spacing
                const startAngle = i * angleGap;
                const endAngle = startAngle + Math.PI / 2.2; // 15 deg arc

                // Outer arc start & end
                const x1 = cx + Math.cos(startAngle) * r;
                const y1 = cy + Math.sin(startAngle) * r;
                const x2 = cx + Math.cos(endAngle) * r;
                const y2 = cy + Math.sin(endAngle) * r;

                // Inner arc start & end
                const x3 = cx + Math.cos(endAngle) * (r - thickness);
                const y3 = cy + Math.sin(endAngle) * (r - thickness);
                const x4 = cx + Math.cos(startAngle) * (r - thickness);
                const y4 = cy + Math.sin(startAngle) * (r - thickness);

                const d = `
        M ${x1} ${y1}
        A ${r} ${r} 0 0 1 ${x2} ${y2}
        L ${x3} ${y3}
        A ${r - thickness} ${r - thickness} 0 0 0 ${x4} ${y4}
        Z
      `;

                return (
                  <path
                    key={i}
                    d={d}
                    fill={
                      !(i % 2) == 0
                        ? "#01e3ff"
                        : `${
                            i == 2
                              ? "url(#fadeGradientLeft)"
                              : "url(#fadeGradient)"
                          }`
                    }
                    // fillOpacity={!(i %2)== 0 ? 0.4 : 1}
                  />
                );
              })}
            </g>
            <g className="animate-spin-slow origin-center">
              {[...Array(10)].map((_, i) => {
                const cx = 200;
                const cy = 200;
                const r = 125;
                const thickness = 5;
                const angleGap = Math.PI / 5; // 90 deg spacing
                const startAngle = i * angleGap;
                const endAngle = startAngle + Math.PI / 6; // 15 deg arc

                // Outer arc start & end
                const x1 = cx + Math.cos(startAngle) * r;
                const y1 = cy + Math.sin(startAngle) * r;
                const x2 = cx + Math.cos(endAngle) * r;
                const y2 = cy + Math.sin(endAngle) * r;

                // Inner arc start & end
                const x3 = cx + Math.cos(endAngle) * (r - thickness);
                const y3 = cy + Math.sin(endAngle) * (r - thickness);
                const x4 = cx + Math.cos(startAngle) * (r - thickness);
                const y4 = cy + Math.sin(startAngle) * (r - thickness);

                const d = `
        M ${x1} ${y1}
        A ${r} ${r} 0 0 1 ${x2} ${y2}
        L ${x3} ${y3}
        A ${r - thickness} ${r - thickness} 0 0 0 ${x4} ${y4}
        Z
      `;

                return (
                  <path
                    key={i}
                    d={d}
                    fill="#6a7282"

                    // fillOpacity={!(i %2)== 0 ? 0.4 : 1}
                  />
                );
              })}
            </g>
            <g className="animate-spin-slow-reverse origin-center textgra">
              {[...Array(2)].map((_, i) => {
                const cx = 200;
                const cy = 200;
                const r = 135;
                const thickness = 5;
                const angleGap = Math.PI; // 90 deg spacing
                const startAngle = i * angleGap;
                const endAngle = startAngle + Math.PI / 2; // 15 deg arc

                // Outer arc start & end
                const x1 = cx + Math.cos(startAngle) * r;
                const y1 = cy + Math.sin(startAngle) * r;
                const x2 = cx + Math.cos(endAngle) * r;
                const y2 = cy + Math.sin(endAngle) * r;

                // Inner arc start & end
                const x3 = cx + Math.cos(endAngle) * (r - thickness);
                const y3 = cy + Math.sin(endAngle) * (r - thickness);
                const x4 = cx + Math.cos(startAngle) * (r - thickness);
                const y4 = cy + Math.sin(startAngle) * (r - thickness);

                const d = `
        M ${x1} ${y1}
        A ${r} ${r} 0 0 1 ${x2} ${y2}
        L ${x3} ${y3}
        A ${r - thickness} ${r - thickness} 0 0 0 ${x4} ${y4}
        Z
      `;

                return (
                  <path
                    key={i}
                    d={d}
                    fill="#6a7282"
                    // fillOpacity={!(i %2)== 0 ? 0.4 : 1}
                  />
                );
              })}
            </g>
            <g className="animate-spin-slow-reverse origin-center textgra">
              {[...Array(2)].map((_, i) => {
                const cx = 200;
                const cy = 200;
                const r = 160;
                const thickness = 10;
                const angleGap = Math.PI; // 90 deg spacing
                const startAngle = i * angleGap;
                const endAngle = startAngle + Math.PI / 2; // 15 deg arc

                // Outer arc start & end
                const x1 = cx + Math.cos(startAngle) * r;
                const y1 = cy + Math.sin(startAngle) * r;
                const x2 = cx + Math.cos(endAngle) * r;
                const y2 = cy + Math.sin(endAngle) * r;

                // Inner arc start & end
                const x3 = cx + Math.cos(endAngle) * (r - thickness);
                const y3 = cy + Math.sin(endAngle) * (r - thickness);
                const x4 = cx + Math.cos(startAngle) * (r - thickness);
                const y4 = cy + Math.sin(startAngle) * (r - thickness);

                const d = `
        M ${x1} ${y1}
        A ${r} ${r} 0 0 1 ${x2} ${y2}
        L ${x3} ${y3}
        A ${r - thickness} ${r - thickness} 0 0 0 ${x4} ${y4}
        Z
      `;

                return (
                  <path
                    key={i}
                    d={d}
                    fill="#6a7282"
                    // fillOpacity={!(i %2)== 0 ? 0.4 : 1}
                  />
                );
              })}
            </g>
            <g className="animate-spin-slow origin-center textgra">
              {[...Array(2)].map((_, i) => {
                const cx = 200;
                const cy = 200;
                const r = 150;
                const thickness = 2;
                const angleGap = Math.PI; // 90 deg spacing
                const startAngle = i * angleGap;
                const endAngle = startAngle + Math.PI / 2; // 15 deg arc

                // Outer arc start & end
                const x1 = cx + Math.cos(startAngle) * r;
                const y1 = cy + Math.sin(startAngle) * r;
                const x2 = cx + Math.cos(endAngle) * r;
                const y2 = cy + Math.sin(endAngle) * r;

                // Inner arc start & end
                const x3 = cx + Math.cos(endAngle) * (r - thickness);
                const y3 = cy + Math.sin(endAngle) * (r - thickness);
                const x4 = cx + Math.cos(startAngle) * (r - thickness);
                const y4 = cy + Math.sin(startAngle) * (r - thickness);

                const d = `
        M ${x1} ${y1}
        A ${r} ${r} 0 0 1 ${x2} ${y2}
        L ${x3} ${y3}
        A ${r - thickness} ${r - thickness} 0 0 0 ${x4} ${y4}
        Z
      `;

                return (
                  <path
                    key={i}
                    d={d}
                    fill="#6a7282"
                    // fillOpacity={!(i %2)== 0 ? 0.4 : 1}
                  />
                );
              })}
            </g>
            <g className="animate-spin-slow-reverse origin-center">
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x1 = 200 + Math.cos(angle) * 75;
                const y1 = 200 + Math.sin(angle) * 75;
                const x2 = 200 + Math.cos(angle) * 40;
                const y2 = 200 + Math.sin(angle) * 40;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#01e3ff"
                    strokeWidth="2"
                  />
                );
              })}
            </g>
            <g className=" origin-center">
              {[...Array(15)].map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x1 = 200 + Math.cos(angle) * 134;
                const y1 = 200 + Math.sin(angle) * 134;
                const x2 = 200 + Math.cos(angle) * 133;
                const y2 = 200 + Math.sin(angle) * 133;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#01e3ff"
                    strokeWidth="2"
                  />
                );
              })}
            </g>
            <g className="animate-spin-slow-reverse origin-center">
              {[...Array(60)].map((_, i) => {
                const angle = (i * 6 * Math.PI) / 180;
                const x1 = 200 + Math.cos(angle) * 110;
                const y1 = 200 + Math.sin(angle) * 110;
                const x2 = 200 + Math.cos(angle) * 100;
                const y2 = 200 + Math.sin(angle) * 100;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#01e3ff"
                    strokeWidth="2"
                    strokeOpacity={0.3}
                  />
                );
              })}
            </g>
            <circle
              cx="200"
              cy="200"
              r="110"
              stroke="#01e3ff"
              fill="none"
              strokeWidth="1"
            />
            <circle
              cx="200"
              cy="200"
              r="100"
              stroke="#01e3ff"
              fill="none"
              strokeWidth="1"
            />
            <circle
              cx="200"
              cy="200"
              r="75"
              stroke="#01e3ff"
              fill="none"
              strokeWidth="1"
            />
            <circle
              cx="200"
              cy="200"
              r="40"
              stroke="#01e3ff"
              fill="none"
              strokeWidth="1"
            />
            <circle
              cx="200"
              cy="200"
              r="30"
              stroke="#01e3ff"
              fill="none"
              strokeWidth="1"
            />
            {/* Center Text */}
            <text
              x="200"
              y="195"
              textAnchor="middle"
              fill="#fff"
              fontSize="14"
              fontWeight="bold"
              dy=".3em"
            >
              47
            </text>
            <text x="200" y="205" textAnchor="middle" fill="#aaa" fontSize="8">
              INCIDENTS
            </text>
          </svg>
          <div className="left-text text-right  flex flex-col justify-between items-start">
            <div className="">
              <p className="border-b border-white/20">
                Intial Access <br /> 234{" "}
              </p>
              <p className="border-b border-white/20">
                Execution
                <br /> 743
              </p>
              <p className="border-b border-white/20">
                Persistance
                <br /> 987
              </p>
            </div>
            <div className="w-full">
              <p className="border-b border-white/20">
                Discovery <br /> 532
              </p>
              <p className="border-b border-white/20">
                Defense <br /> 727
              </p>
              <p className="border-b border-white/20">
                Credential
                <br /> 234
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-10 items-center justify-between py-2">
        <div className="rounded-full col-span-3">
          <div className="w-full h-full flex items-center justify-between">
            <div className="w-2/5 p-4">
              <div className="w-full aspect-square bg-gray-800 bg-opacity-30 backdrop-blur-lg rounded-full border-[15px] border-[#26d7ff] border-opacity-20 shadow-xl text-center flex items-center justify-center">
                450 <br />
                TOTOAL
              </div>
            </div>
            <div className="w-1/2 text-sm flex px-2 gap-2 flex-col items-center justify-center">
              <div className="w-full flex">
                <div className="w-1/2">
                  <p>23</p>Deceive
                </div>
                <div className="w-1/2">
                  <p>23</p>Deceive
                </div>
              </div>
              <div className="w-full flex">
                <div className="w-1/2">
                  <p>23</p>Deceive
                </div>
                <div className="w-1/2">
                  <p>23</p>Deceive
                </div>
              </div>
              <div className="w-full flex">
                <div className="w-1/2">
                  <p>23</p>Deceive
                </div>
                <div className="w-1/2">
                  <p>23</p>Deceive
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 ">
            <div className="w-full flex flex-col gap-2">
              <div className="w-full h-fit flex justify-between ">
                <div className="bg-[#0E3040] h-3 my-auto w-4/7">
                  <div className="w-2/3 bg-[#01E3FF] h-full"></div>
                </div>
                <div className=" w-2/6 text-right flex justify-between">
                  89 <span className="">Active</span>
                </div>
              </div>
              <div className="w-full h-fit flex justify-between ">
                <div className="bg-[#0E3040] h-3 my-auto w-4/7">
                  <div className="w-2/3 bg-[#01E3FF] h-full"></div>
                </div>
                <div className=" w-2/6 text-right flex justify-between">
                  290 <span className="">InActive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-7 self-baseline pl-2 h-full">

          <div className="flex items-center text-sm justify-between w-2/3 py-2">
            <div className="flex items-center justify-between border-1 border-white/50 outline-0 w-full rounded-lg py-1 px-2">
              <select name="user" className="w-full outline-none" id="">
            <option className="bg-[#13404F] ">From: 01.01.2019</option>
                <option className="bg-[#13404F]">Iron Man</option>
                <option className="bg-[#13404F]">Tony Stark</option>
                <option className="bg-[#13404F]">Thor</option>
                <option className="bg-[#13404F]">Hulk</option>
              </select>
            </div>
            <div className="flex items-center justify-between border-1 border-white/50 outline-0 w-full rounded-lg py-1 px-2">
          <select name="user" className="w-full outline-none" id="">
            <option className="bg-[#13404F] ">To: 31.12.2022</option>
            <option className="bg-[#13404F]">Iron Man</option>
            <option className="bg-[#13404F]">Tony Stark</option>
            <option className="bg-[#13404F]">Thor</option>
            <option className="bg-[#13404F]">Hulk</option>
          </select>
        </div>
        <div className="flex items-center justify-between border-1 border-white/50 outline-0 w-full rounded-lg py-1 px-2">
          <select name="user" className="w-full outline-none" id="">
                <option className="bg-[#13404F] ">Show by: Week</option>
            <option className="bg-[#13404F]">Iron Man</option>
            <option className="bg-[#13404F]">Tony Stark</option>
            <option className="bg-[#13404F]">Thor</option>
            <option className="bg-[#13404F]">Hulk</option>
          </select>
        </div>
          </div>
          <div className="w-full h-full flex items-end pl-4 py-5 relative">
           <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mid;
