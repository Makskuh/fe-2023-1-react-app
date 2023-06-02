import React from 'react';

class Header extends React.Component {
  render() {
    console.log(this.props);
    const { titleText } = this.props;

    return (
      <header id='header' className='class' title={titleText}>
        <h1>My Site</h1>
        <nav>This is nav</nav>
      </header>
    );
  }
}

export default Header;
