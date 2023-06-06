import { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: 0,
    };
  }

  start = () => {
    // const { currentTime } = this.state;

    this.intervalId = setInterval(() => {
      console.log('interval')
      this.setState({
        currentTime: this.state.currentTime + 1,
      });
    }, 1000);
  };

  componentDidMount() {
    console.log('componentDidMount');
    this.start();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.intervalId);
  }

  render() {
    const { currentTime } = this.state;

    // this.setState({ currentTime: this.state.currentTime + 1 });
    // this.start();

    return (
      <section>
        <p>{currentTime}</p>
        <button onClick={this.start}>Start</button>
        <button>Stop</button>
      </section>
    );
  }
}

export default StopWatch;
