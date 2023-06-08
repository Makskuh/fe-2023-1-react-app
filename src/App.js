import React from 'react';
import StopWatch from './components/StopWatch';
import LoginForm from './components/LoginForm';
import MessageDashboard from './components/MessageDashboard';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
    };
  }

  handleIsVisible = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  render() {
    const { isVisible } = this.state;
    return (
      <>
        <button onClick={this.handleIsVisible}>Toggle Visibility</button>
        {isVisible && <StopWatch />}
        <LoginForm />
        <MessageDashboard />
      </>
    );
  }
}

export default App;
