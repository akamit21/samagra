import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    setInterval(() => {
      setTime(Date.now());
    }, 1000);
    return () => {
      clearInterval(time);
    };
  });
  return <h1>{time}</h1>;
};

export default Clock;
