import React from 'react';
import Greeting from './components/Greeting';
import Header from './components/Header';
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting name='User' />
        <Greeting name='Anton' />
      </div>
    );
  }
}

export default App;
