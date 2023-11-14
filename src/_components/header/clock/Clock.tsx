import React, { useEffect, useState } from "react";
import "./clock.css";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const currentTime = setInterval((): void => {
      setCurrentTime(new Date().toLocaleTimeString()), 1000;
    });
  });

  return (
    <div className="clock-container">
      <h1>{currentTime}</h1>
    </div>
  );
};

export default Clock;
