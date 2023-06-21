import { useCoords } from 'hooks';
import React, { useState, useEffect, useRef } from 'react';

// Створити користувацький хук useCoords
// який буде слідкувати за рухами миши користувача

function Counter(props) {
  const [clicks, setClicks] = useState(0);
  const divRef = useRef(null);
  const coords = useCoords(divRef);

  useEffect(() => {
    document.title = `Current count is ${clicks}`;
  }, [clicks]);

  const add = (e) => {
    console.log(clicks);
    function handleNewClick(oldClicks) {
      console.log(oldClicks);
      return oldClicks + 1;
    }

    setClicks(handleNewClick);
  };

  // useEffect(() => {
  //   window.addEventListener('click', add);
  //   return () => {
  //     window.removeEventListener('click', add);
  //   };
  // }, [add]);

  const subtract = () => {
    setClicks(clicks - 1);
  };

  // console.log(divRef.current);
  return (
    <div
      style={{
        padding: '40px',
        border: '5px solid black',
      }}
      ref={divRef}
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
