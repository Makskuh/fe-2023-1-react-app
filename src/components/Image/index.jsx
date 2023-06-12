import React from 'react';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';

function Image(props) {
  const { width, height, style, ...restProps } = props;

  const divStyles = {
    ...style,
    width: width,
    height: height,
  };

  // const img = React.createElement('img', { ...restProps });

  return <div style={divStyles} className={styles.wrapper} {...restProps} />;
}

Image.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.exact({
    border: PropTypes.string,
    display: PropTypes.string,
  }),
  children: PropTypes.element.isRequired,
};

export default Image;
