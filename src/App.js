import React from 'react';
import StopWatch from './components/StopWatch';
import LoginForm from './components/LoginForm';
import MessageDashboard from './components/MessageDashboard';
import ReviewDashboard from './components/ReviewDashboard';
import List from './components/List';
import Image from './components/Image';
import Greeting from './components/Greeting';
import Message from './components/Message';
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

    React.createElement('p', { title: 'Title 2' }, 'text');

    return (
      <>
        {/* <ReviewDashboard />
        <button onClick={this.handleIsVisible}>Toggle Visibility</button>
        {isVisible && <StopWatch />}
        <LoginForm />
         */}
         <MessageDashboard />
        <List title='Мої покупки' products={products}>
          <li>Something</li>
          <li>Something 2</li>
          <li>Something 3</li>
        </List>
        <Image
          width='900px'
          height='500px'
          onClick={this.clickCatHandler}
          title='Black cat'
          style={{ border: '10px solid black' }}
        >
          <img
            src='https://cdn.britannica.com/25/172925-050-DC7E2298/black-cat-back.jpg'
            alt='Cat'
          />
        </Image>
{/* 
        <Message />
        <Message text="some text" /> */}
      </>
    );
  }
}

export default App;
