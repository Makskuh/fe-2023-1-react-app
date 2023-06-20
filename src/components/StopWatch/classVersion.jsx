import { Component } from 'react';
import styles from './style.module.css';
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
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      console.log('interval');
      this.setState({
        currentTime: this.state.currentTime + 1,
      });
    }, 1000);
  };

  stop = () => {
    clearInterval(this.intervalId);
    // setIntervalId(null);
    // this.intervalId = null;
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
    this.stop();
  }

  render() {
    const { currentTime } = this.state;

    // this.setState({ currentTime: this.state.currentTime + 1 });
    // this.start();

    return (
      <section className={styles.container}>
        <p className={styles.display}>{currentTime}</p>
        <button className={`${styles.btn} ${styles.startBtn}`} onClick={this.start}>
          Start
        </button>
        <button className={`${styles.btn} ${styles.stopBtn}`} onClick={this.stop}>
          Stop
        </button>
      </section>
    );
  }
}

export default StopWatch;
