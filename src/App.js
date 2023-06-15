import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PostsPage from './pages/PostsPage';
import Tree from './components/Tree';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: 1,
        firstName: 'User',
        lastName: 'Userenko',
        imageSrc: 'picture.jpeg',
      },
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
    const { user } = this.state;

    // return (
    //   <BrowserRouter>
    //     <Switch>
    //       <Route exact path='/'>
    //         {(libProps) => <HomePage {...libProps} />}
    //       </Route>

    //       <Route path='/about' component={AboutPage} />
    //       <Route path='/posts' component={PostsPage} />

    //       <Route
    //         path='/contacts'
    //         render={(libProps) => <Contacts {...libProps} />}
    //       />

    //       <Route path='*' component={NotFound} />
    //     </Switch>
    //   </BrowserRouter>
    // );

    return <Tree user={user} />
  }
}

const Contacts = (props) => {
  console.log(props);
  return <div>Contacts</div>;
};

const NotFound = () => <div>404 Page not found</div>;

export default App;
