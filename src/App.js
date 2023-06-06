import React from 'react';
import StopWatch from './components/StopWatch';

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
      </>
    );
  }
}

export default App;
