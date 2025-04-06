import { useEffect, useState } from "react";
import "../styles/timer.css";

function Timer({ time }) {
  const defaultSeconds = time;

  const [seconds, setSeconds] = useState(defaultSeconds);
  const [startTime, setStartTime] = useState(null);
  const [currentStartTime, setCurrentStartTime] = useState(defaultSeconds);
  const [isRunning, setIsRunning] = useState(false);

  //   useEffect(() => {
  //     if (!startTime) {
  //       setStartTime(Date.now());
  //     }
  //   }, [startTime]);

  useEffect(() => {
    setSeconds(time);
    setIsRunning(false);
  }, [time]);

  useEffect(() => {
    let interval;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        const now = Date.now();
        const elapsed = Math.floor((now - startTime) / 1000);
        setSeconds(Math.max(currentStartTime - elapsed, 0));
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
    setStartTime(Date.now());
  };

  const stopTimer = () => {
    setIsRunning(false);
    setCurrentStartTime(seconds);
  };

  const restartTimer = () => {
    setIsRunning(false);
    setSeconds(defaultSeconds);
    setCurrentStartTime(defaultSeconds);
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
