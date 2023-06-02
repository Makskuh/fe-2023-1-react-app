import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  add = () => {
    console.log('+');

    this.setState({
      count: this.state.count + 1,
    });
  };

  subtract() {
    console.log('-');
  }

  render() {
    const { count } = this.state;

    const p = React.createElement('p', {}, `Count is: ${count}`);
    const add = React.createElement(
      'button',
      {
        onClick: this.add,
      },
      'Add'
    );

    const subtract = React.createElement(
      'button',
      {
        onClick: this.subtract,
      },
      'Subtract'
    );

    const fragment = React.createElement(
      React.Fragment,
      null,
      p,
      add,
      subtract
    );
    return fragment;
  }
}

export default Counter;
