import React from "react";

const getRandomHeight = () => {
  const min = 40;
  const max = 100;
  return `${Math.floor(Math.random() * (max - min + 1)) + min}%`;
};

const gradientColors = [
    "from-[#01293f] to-[#00baff]",  // Blue gradient
  "from-[#360000] to-[#ff0000]",  // Red gradient
  "from-[#3b1600] to-[#ff9900]",  // Orange gradient
];

const BarChart = () => {
  const bars = Array.from({ length: 26 }, () => ({
    height: getRandomHeight(),
    gradient: gradientColors[Math.floor(Math.random() * gradientColors.length)],
  }));

  return (
    <div className="w-full h-full gap-4 flex items-end justify-between px-6 ">
      {bars.map((bar, i) => (
        <div
          key={i}
          className={`min-w-1.5 w-[15px] bg-gradient-to-t ${bar.gradient}`}
          style={{ height: bar.height }}
        ></div>
      ))}
    </div>
  );
};

export default BarChart;
