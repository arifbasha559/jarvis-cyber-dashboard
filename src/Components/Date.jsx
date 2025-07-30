import { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const formatTime = (date) => {
    // Time (HH:MM:SS)
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Day (3-letter uppercase)
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const dayName = days[date.getDay()];

    // Date (11)
    const dateNum = date.getDate();

    // Month (full uppercase)
    const months = [
      'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
      'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
    ];
    const monthName = months[date.getMonth()];

    return `${hours}:${minutes}:${seconds} ${dayName} | ${dateNum} ${monthName}`;
  };

  return (
    <div className="">
      {formatTime(currentTime)}
    </div>
  );
};

export default DateTimeDisplay;