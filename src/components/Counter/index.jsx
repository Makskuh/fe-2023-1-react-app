import React, { useState } from 'react';

function Counter(props) {
  const [state, setState] = useState(0);

  const add = () => {
    setState(state + 1);
  };
  const subtract = () => {
    setState(state - 1);
  };

  return (
    <>
      <p>Counter is {state}</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </>
  );
}

export default Counter;
