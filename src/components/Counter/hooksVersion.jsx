import React, { useState, useEffect, useRef } from 'react';
import { useCoords } from 'hooks';

// Створити користувацький хук useCoords
// який буде слідкувати за рухами миши користувача

function Counter(props) {
  const [clicks, setClicks] = useState(0);
  const prevClicks = useRef(null);
  const renders = useRef(1);
  const divRef = useRef(null);
  // const testRef = useRef('test');
  // const coords = useCoords(divRef);

  useEffect(() => {
    document.title = `Current count is ${clicks}`;
  }, [clicks]);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const add = (e) => {
    function handleNewClick(oldClicks) {
      prevClicks.current = oldClicks;
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

  // console.log(testRef.current);

  // testRef.current = 'what is this magic';

  return (
    <div
      style={{
        padding: '40px',
        border: '5px solid black',
      }}
      ref={divRef}
    >
      <p>Counter is {clicks}</p>
      <p>Previously there was {prevClicks.current} clicks</p>
      <p>There was {renders.current} renders</p>
      {/* <p>X coordinate is {coords.x}</p>
      <p>Y coordinate is {coords.y}</p> */}
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  );
}

export default Counter;
