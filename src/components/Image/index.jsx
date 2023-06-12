import React from 'react';
import styles from './Image.module.scss';

function Image(props) {
  const { width, height, ...restProps } = props;

  const divStyles = {
    width: width,
    height: height,
  };

  // const img = React.createElement('img', { ...restProps });

  return (
    <div style={divStyles} className={styles.wrapper}>
      <img {...restProps} />
      {/* {img} */}
    </div>
  );
}

export default Image;
