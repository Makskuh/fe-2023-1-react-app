import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
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
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contacts'>Contacts</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/about'>
            <About />
          </Route>

          <Route path='/contacts'>
            <Contacts />
          </Route>
        </Switch>



      </BrowserRouter>
    );
  }
}

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contacts = () => <div>Contacts</div>;

export default App;
