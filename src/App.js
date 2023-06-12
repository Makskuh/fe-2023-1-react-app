import React from 'react';
import StopWatch from './components/StopWatch';
import LoginForm from './components/LoginForm';
import MessageDashboard from './components/MessageDashboard';
import ReviewDashboard from './components/ReviewDashboard';
import List from './components/List';

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

  render() {
    const { isVisible, products, friends } = this.state;

    React.createElement('p', {title: 'Title 2'}, 'text' );

    return (
      <>
        {/* <ReviewDashboard />
        <button onClick={this.handleIsVisible}>Toggle Visibility</button>
        {isVisible && <StopWatch />}
        <LoginForm />
        <MessageDashboard /> */}
        <List title='Мої покупки' products={products}>
          <li>Something</li>
          <li>Something 2</li>
          <li>Something 3</li>
        </List>
        <List title='Мої друзі' >
          test
        </List>
      </>
    );
  }
}

export default App;
