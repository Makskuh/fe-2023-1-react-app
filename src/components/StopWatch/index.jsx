import { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: 0,
    };
    this.intervalId = null;
  }

  start = () => {
    // const { currentTime } = this.state;
    if(this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      console.log('interval')
      this.setState({
        currentTime: this.state.currentTime + 1,
      });
    }, 1000);
  };

  stop = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.start();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    this.stop();
  }

  render() {
    const { currentTime } = this.state;

    // this.setState({ currentTime: this.state.currentTime + 1 });
    // this.start();

    return (
      <section>
        <p>{currentTime}</p>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
      </section>
    );
  }
}

export default StopWatch;
