import React from 'react';
import UsersLoader from './components/UsersLoader';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
      products: [
        { name: 'Product 1', quantity: 5 },
        { name: 'Product 2', quantity: 3 },
        { name: 'Product 3', quantity: 1 },
      ],
      friends: [
        { id: 1, name: 'Friend 1', profilePic: 'pic1.png' },
        { id: 2, name: 'Friend 2', profilePic: 'pic2.png' },
        { id: 3, name: 'Friend 3', profilePic: 'pic3.png' },
      ],
    };
  }

  handleIsVisible = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  clickCatHandler = () => {
    alert('You clicked on cat!');
  };

  render() {
    const { isVisible, products, friends } = this.state;

    return (
      <>
        <UsersLoader />
        <button
          onClick={() => window.location.assign('https://randomuser.me/')}
        >
          Assign
        </button>
        <button
          onClick={() => window.location.replace('https://randomuser.me/')}
        >
          Replace
        </button>
        <button onClick={() => window.location.reload()}>Reload</button>
      </>
    );
  }
}

export default App;
