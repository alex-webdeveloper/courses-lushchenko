import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let nav = { main: '#index', abount: '#abount', price: '#buy/price', hello: '#hello' };
ReactDOM.render(
  <React.StrictMode>
    <App title='My site 1' hero='Go-go-go 2' nav={nav} text55='Hi mahai' />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
