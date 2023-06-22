import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { UserContext, ThemeContext } from 'contexts';
import CONSTANTS from './constants';
import HomePage from 'pages/HomePage';
import SignUpPage from 'pages/SignUpPage';


function App() {
  const [user, setUser] = useState({
    id: 1,
    firstName: 'User',
    lastName: 'Userenko',
    imageSrc: 'picture.jpeg',
  });
  const [theme, setTheme] = useState(CONSTANTS.THEMES.DARK);

  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/signup" exact component={SignUpPage}/>
        </Switch>

      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
