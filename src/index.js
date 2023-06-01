import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Header extends React.Component {
  render() {
    console.log(this.props);
    const { titleText } = this.props;

    const h1 = React.createElement('h1', {}, 'My Site');

    const nav = React.createElement('nav', {}, 'This is nav');

    return React.createElement(
      'header',
      { id: 'header', className: 'class', title: titleText },
      h1,
      nav
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    // this.add = this.add.bind(this);
  }

  add = () => {
    console.log('+');
    // ++this.state.count;
    // console.log(this.state.count);

    this.setState({
      count: this.state.count + 1,
    });
  };

  subtract() {
    console.log('-');
  }

  render() {
    /*
      <p>Count is: 1<p>
      <button>Add</button>
      <button>Subtract</button>
    */
    const { count } = this.state;

    // this.props.count = 3; BAD

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

const root = ReactDOM.createRoot(document.getElementById('root'));

const elem = React.createElement(Header, {
  titleText: 'this is how props can work',
});

const elem2 = React.createElement(Header, {
  titleText: 'other title text',
});

const counter1 = React.createElement(Counter);

// const container = React.createElement('div', {}, elem, elem2);
const container = React.createElement(
  React.Fragment,
  {},
  elem,
  elem2,
  counter1
);

// const elem = React.createElement(
//   'header', // рядок з назвою html елементу
//   { id: 'header', className: 'class' }, // об'єкт з "атрибутами" до цього елементу
//   'null' // 3+ параметрии - дочірні елементи, які будуть знаходитися всередині створюємого єлементу (не відображає null, undefined, false; кидає помилку якщо дають об'ект)
// );

root.render(counter1);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
