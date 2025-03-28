import { useEffect, useState } from "react";
import "../styles/timer.css";

function Timer({ time }) {
  const defaultSeconds = time;

  const [seconds, setSeconds] = useState(defaultSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setSeconds(time);
    setIsRunning(false);
  }, [time]);

  useEffect(() => {
    let interval;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const formatMinutes = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);

    return `${minutes.toString().padStart(2, "0")}`;
  };

  const formatSeconds = (totalSeconds) => {
    const remainingSeconds = totalSeconds % 60;

    return `${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const restartTimer = () => {
    setIsRunning(false);
    setSeconds(defaultSeconds);
  };

  return (
    <div className="timer-container">
      <div className="count-container">
        <div className="minutes-container">
          <h1>{formatMinutes(seconds)}</h1>
        </div>
        <h1>:</h1>
        <div className="seconds-container">
          <h1>{formatSeconds(seconds)}</h1>
        </div>
      </div>
      <div className="timer-button-container">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={restartTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
