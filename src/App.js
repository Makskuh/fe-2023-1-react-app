import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PostsPage from './pages/PostsPage';
import Tree from './components/Tree';
import { UserContext, ThemeContext } from './contexts';
import CONSTANTS from './constants';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

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
      theme: CONSTANTS.THEMES.DARK,
    };
  }

  changeTheme = (newTheme) => {
    this.setState({
      theme: newTheme,
    });
  };

  render() {
    const { user, theme } = this.state;

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

    // const props = {
    //   // value: {
    //   //   theme,
    //   //   changeTheme: this.changeTheme
    //   // }
    //   // value: [theme, this.changeTheme]
    // }

    return (
      <ThemeContext.Provider value={[theme, this.changeTheme]}>
        <UserContext.Provider value={user}>
          <Tree />
          <Sidebar />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}



const NotFound = () => <div>404 Page not found</div>;

export default App;
