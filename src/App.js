import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PostsPage from './pages/PostsPage';
import Tree from './components/Tree';
import { UserContext } from './contexts';
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

    console.log(UserContext);

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

    return (
      <>
        <UserContext.Provider value={user}>
          <Tree />
          <Sidebar />
        </UserContext.Provider>
      </>
    );
  }
}

const Sidebar = (props) => {
  return (
    <UserContext.Consumer>
      {(user) => <div>{JSON.stringify(user)}</div>}
    </UserContext.Consumer>
  );
};

const NotFound = () => <div>404 Page not found</div>;

export default App;
