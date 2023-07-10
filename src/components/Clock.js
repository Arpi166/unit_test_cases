import React, { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Running side effect");
    setInterval(() => {
      console.log("Setting state");
      setTime(new Date());
    }, 1000);

    return function cleanup() {
      console.log("Running cleanup");
    };
  }, []);

  console.log("Component rendered");

  return <div data-testid='clock-time'>{time.toString()}</div>;
}