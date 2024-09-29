import { useState, useRef } from 'react';
import { formatTime } from './formatTime';

const useTimer = (initialState = 0) => {
  const [seconds, setSeconds] = useState(initialState);
  const [time, setTime] = useState(formatTime(seconds));
  const [splits, setSplits] = useState([]);

  const isStart = useRef(false);
  const active = useRef(null);
  const refInterval = useRef();
  const splitRef = useRef(null);

  const startTimer = () => {
    if (!isStart.current) {
      isStart.current = true;
      refInterval.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = prevSeconds + 1;
          setTime(formatTime(newSeconds));
          return newSeconds;
        });
      }, 1000);

      if (active.current) {
        active.current.disabled = true;
      }
    }
  };

  const stopTimer = () => {
    if (isStart.current) {
      clearInterval(refInterval.current);
      isStart.current = false;
      if (active.current) {
        active.current.disabled = false;
      }
    }
  };
  const resetTimer = () => {
    clearInterval(refInterval.current);
    setSeconds(initialState);
    setTime(formatTime(initialState));
    setSplits([]);
    isStart.current = false;
    if (active.current) {
      active.current.disabled = false;
    }
  };

  const splitTimer = () => {
    if (isStart.current) {
      if (splitRef.current) {
        splitRef.current.disabled = true;
      }

      setTimeout(() => {
        setSplits((prevSplits) => [...prevSplits, formatTime(seconds)]);

        if (splitRef.current) {
          splitRef.current.disabled = false;
        }
      }, 1000);
    }
  };

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    splitTimer,
    splits,
    splitRef,
    active,
  };
};
export default useTimer;
