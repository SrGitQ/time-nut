import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const App = () => {
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(60);

  if (seconds === 0) {
    setSeconds(59);
    setMinutes(minutes - 1);
  }
  if (minutes === 0) {
    setMinutes(59);
    setHours(hours - 1);
  }

  useEffect(() => {
    seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
  }, [seconds]);
  
  return (
    <div className="bg-black flex h-screen">
      <div className="m-auto">
        <h1 className="text-8xl font-bold text-red-800 text-center align-middle">
          {hours < 10 ? "0" + hours : hours}:
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </h1>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
