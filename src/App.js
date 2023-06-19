import React, { useState } from 'react';
import Counter from 'components/Counter';
import CONSTANTS from './constants';

function App() {
  const [user, setUser] = useState({
    id: 1,
    firstName: 'User',
    lastName: 'Userenko',
    imageSrc: 'picture.jpeg',
  });
  const [theme, setTheme] = useState(CONSTANTS.THEMES.DARK);
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div>
        <button onClick={toggleVisibility}>Toggle visibility</button>
      </div>
      {isVisible && <Counter />}
    </>
  );
}

export default App;
