import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const elem = React.createElement(
  'header', // рядок з назвою html елементу
  { id: 'header' }, // об'єкт з атрибутами до цього елементу
  'null' // 3+ параметрии - дочірні елементи, які будуть знаходитися всередині створюємого єлементу (не відображає null, undefined, false; кидає помилку якщо дають об'ект)
);

root.render(elem);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
