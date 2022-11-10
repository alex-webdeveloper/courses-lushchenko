import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let nav = { main: '#index', abount: '#abount', price: '#buy/price', hello: '#hello' };
let contact = [['Андрей', 'тел: +7 (341)-77-23'], ['Олег', 'тел: +7 (908)-74-97']];
let address = { Андрей: 'Казань, ул. Ленина, дом 10', Олег: 'Белгород, ул. Новая дом 44' };

ReactDOM.render(
  <React.StrictMode>
    <App title='My site 1' hero='Go-go-go 2' nav={nav} contact={contact} address={address} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
