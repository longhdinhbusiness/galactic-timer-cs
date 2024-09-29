import React from 'react';
import useTimer from './useTimer';

function App() {
  const {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    splitTimer,
    splits,
    splitRef,
    active,
  } = useTimer(0);

  return (
    <div className="App container">
      <h1>Galactic Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{time}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            STOP
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            START
          </button>
          <button className="button" onClick={resetTimer}>
            RESET
          </button>
          <button className="button" ref={splitRef} onClick={splitTimer}>
            SPLIT
          </button>
        </div>
      </div>
      <div className="split_wrapper">
        <h2>Splits:</h2>
        <ul>
          {splits.map((split, index) => (
            <li key={index}>{split}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
