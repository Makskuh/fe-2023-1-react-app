import React, { useState } from 'react';
import Counter from 'components/Counter';
import CONSTANTS from './constants';
import StopWatch from 'components/StopWatch';
import { UserContext, ThemeContext } from 'contexts';
import Sidebar from 'components/Sidebar';

function App() {
  const [user, setUser] = useState({
    id: 1,
    firstName: 'User',
    lastName: 'Userenko',
    imageSrc: 'picture.jpeg',
  });
  const [theme, setTheme] = useState(CONSTANTS.THEMES.DARK);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <div>
          <button onClick={toggleVisibility}>Toggle visibility</button>
        </div>
        {isVisible && <Counter />}
        <StopWatch />
        <Sidebar />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
