import React, { useEffect, useState } from "react";
import "./clock.css";

type Props = {};

const Clock = (props: Props) => {
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
