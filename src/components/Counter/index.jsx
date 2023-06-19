import React, { useState } from 'react';

function Counter(props) {
  const [state, setState] = useState({
    clicks: 0,
    x: 0,
    y: 0,
  });

  const add = (e) => {
    setState({
      ...state,
      clicks: state.clicks + 1,
    });
  };

  const subtract = () => {
    setState({
      ...state,
      clicks: state.clicks - 1,
    });
  };

  const mouseMoveHandler = (e) => {
    const { clientX, clientY } = e;

    setState({
      ...state,
      x: clientX,
      y: clientY
    });
  };

  return (
    <div
      style={{
        padding: '40px',
        border: '5px solid black',
      }}
      onMouseMove={mouseMoveHandler}
    >
      <p>Counter is {state.clicks}</p>
      <p>X coordinate is {state.x}</p>
      <p>Y coordinate is {state.y}</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  );
}

export default Counter;
