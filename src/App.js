import React from 'react';
import Greeting from './components/Greeting';
import Header from './components/Header';
import Review from './components/Review';

const data = {
  id: 1,
  title: 'Best device ever',
  mark: 9.5,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  authorName: 'User Userenko',
  authorImg:
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress',
  pros: ['cheap', 'efficient', 'feeds my cat'],
  cons: ['bulky, cant place 2 of them in my house'],
};

class App extends React.Component {
  render() {

    return (
      <>
        <Greeting name='User' />
        <Review reviewData={data} />
        <Greeting />
      </>
    );
  }
}

export default App;
