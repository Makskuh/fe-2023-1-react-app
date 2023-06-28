import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { UserContext, ThemeContext } from 'contexts';
import CONSTANTS from './constants';
import HomePage from 'pages/HomePage';
import SignUpPage from 'pages/SignUpPage';
import Counter from 'components/Counter';

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
          <Route path='/' exact component={HomePage} />
          <Route path='/signup' exact component={SignUpPage} />
        </Switch>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

/*
  за допомогою fetch вивести в консоль інформацію, отриману у результаті 
  запиту на адресу https://jsonplaceholder.typicode.com/posts
*/

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((posts) => console.log(posts));

async function test() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

console.log(test());

function test2() {
  // const promise = fetch('https://jsonplaceholder.typicode.com/posts');

  // const promise2 = promise.then((response) => response.json());

  // const result = promise2.then((data) => {
  //   console.log(data);
  //   return data;
  // });

  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => console.log(posts));
}

// test().then((data) => console.log(data));
// test2();

// console.log(test());
// console.log(test2());

// const data = await test();

// console.log(data);

export default App;
