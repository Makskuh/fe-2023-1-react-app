import React, { useState, useEffect } from 'react';

function Counter(props) {
  const [clicks, setClicks] = useState(0);
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });

  useEffect(function effectHandler() {
    // ComponentDidMount + DidUpdate
    console.log('use effect callback');
    window.addEventListener('mousemove', mouseMoveHandler);

    // ComponentWillUnmount
    return function clearEffects() {
      console.log('effects cleared');
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  });

  const add = (e) => {
    setClicks(clicks + 1);
  };

  const subtract = () => {
    setClicks(clicks - 1);
  };

  const mouseMoveHandler = (e) => {
    const { clientX, clientY } = e;

    setCoords({
      x: clientX,
      y: clientY,
    });
  };

  // window.addEventListener('mousemove', mouseMoveHandler);
  document.title = `Clicked ${clicks} times`;
  return (
    <div
      style={{
        padding: '40px',
        border: '5px solid black',
      }}
    >
      <p>Counter is {clicks}</p>
      <p>X coordinate is {coords.x}</p>
      <p>Y coordinate is {coords.y}</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  );
}

export default Counter;
