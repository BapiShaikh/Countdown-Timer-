import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer;

    // Start the timer if time is a valid integer
    if (!isNaN(time) && Number.isInteger(time) && time >= 0) {
      setTime(Math.floor(time));

      timer = setInterval(() => {
        setTime(prevTime => {
          const newTime = prevTime - 1;
          return newTime >= 0 ? newTime : 0;
        });
      }, 1000);
    } else {
      // If the time is invalid, reset it to 0
      setTime(0);
    }

    // Clear the timer when the component unmounts or when time changes
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const inputTime = parseInt(event.target.value);
      setTime(inputTime);
      event.target.value = '';
    }
  };

  return (
    <div >
      <h1>CountDown Timer</h1>
      <input type="text" placeholder="Enter time in seconds" onKeyDown={handleKeyPress} />
      <div className='timer'>{time}</div>
    </div>
  );
}


export default App;
