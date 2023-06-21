import React, { useContext, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { ThemeContext } from 'contexts';
import styles from './MemoExample.module.scss';
import CONSTANTS from 'constants.js';

const { THEMES } = CONSTANTS;

function computeValue(number) {
  let i = 0;

  for (let j = 0; j < 2_000_000_000; j++) {
    i++;
  }

  return number ** 2;
}

function MemoExample(props) {
  const [number, setNumber] = useState(1);
  const [theme] = useContext(ThemeContext);

  const result = useMemo(function memoCallback() {
    return computeValue(number);
  }, [number]);
  
  // const result = computeValue(number);
  const handleChange = (e) => {
    const {
      target: { value },
    } = e;

    // console.log(typeof value);

    setNumber(+value);
  };

  const classes = classNames({
    [styles.darkTheme]: theme === THEMES.DARK,
    [styles.lightTheme]: theme === THEMES.LIGHT,
  });

  return (
    <div className={classes}>
      <p>Result is {result}</p>
      <input type='number' value={number} onChange={handleChange} />
    </div>
  );
}

export default MemoExample;
