import React, { useState } from "react";
import Home from "./Components/Home";
import "./App.css";
const App = () => {
  const [btn, setBtn] = useState(false)
  return (
    <div className="bg-[#0B1E28] relatve h-[937.27px] min-w-[1745px] max-w-[1750px] m-auto overflow-auto text-white">
      {/* <div className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-r z-30 from-[#0f0c29] via-[#302b63] to-[#24243e]">asd</div> */}
      <div className={` xl:hidden fixed top-0 left-0 w-full h-full bg-black text-white ${btn ? 'hidden' : 'flex'} flex-col gap-5 items-center justify-center text-center p-4 z-50`}>
        <p className="text-lg">Please use a desktop or larger screen for the best experience.</p>

        <div class="relative group">
          <button
          onClick={() => setBtn(!btn)}
            className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          >
            <span
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            ></span>

            <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
              <div className="relative z-10 flex items-center space-x-2">
                <span className="transition-all duration-500 group-hover:translate-x-1"
                >View Anyway</span>
                <svg
                  className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                  data-slot="icon"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </span>
          </button>
        </div>

      </div>
      <Home />
    </div>
  );
};

export default App;
