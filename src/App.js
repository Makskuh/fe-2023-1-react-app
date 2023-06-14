import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

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
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {(libProps) => <HomePage {...libProps} />}
          </Route>

          <Route path='/about' component={AboutPage} />

          <Route
            path='/contacts'
            render={(libProps) => <Contacts {...libProps} />}
          />

          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const Contacts = (props) => {
  console.log(props);
  return <div>Contacts</div>;
};

const NotFound = () => <div>404 Page not found</div>;

export default App;
