import { useState, useEffect } from 'react';
import styles from './style.module.css';

function StopWatch(props) {
  const [currentTime, setCurrentTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    start();
    console.log('DidMount');

    return () => {
      stop();
      console.log('WillUnmount');
    };
  }, []);

  function start() {
    console.log('start func');
    console.log(intervalId);
    if (intervalId) {
      return;
    }

    const newIntervalId = setInterval(() => {
      setCurrentTime((oldTime) => oldTime + 1);
    }, 1000);

    setIntervalId(newIntervalId);
  }

  function stop() {
    console.log('stop func');

    setIntervalId((intervalId) => {
      clearInterval(intervalId);
      return null;
    });
  }

  // componentDidMount() {
  //   console.log('componentDidMount');
  //   this.start();
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  //   this.stop();
  // }

  return (
    <section className={styles.container}>
      <p className={styles.display}>{currentTime}</p>
      <button className={`${styles.btn} ${styles.startBtn}`} onClick={start}>
        Start
      </button>
      <button className={`${styles.btn} ${styles.stopBtn}`} onClick={stop}>
        Stop
      </button>
    </section>
  );
}

export default StopWatch;
