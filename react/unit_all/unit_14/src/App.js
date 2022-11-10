import './App.css';
import React, { useState } from 'react';



function App() {
  const [text, setText] = useState('');
  const [st1, setSt1] = useState('');
  const [st2, setSt2] = useState('');
  const [st3, setSt3] = useState();
  const [st4, setSt4] = useState('');
  const [st5, setSt5] = useState([]);

  function task1() {
    fetch("http://test1.ru/api.php", {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ action: 1 })
    })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        setSt1(data);
      })

  }

  function task2(event) {
    event.preventDefault();
    let elem = event.target.elements;

    fetch("http://test1.ru/api.php", {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ action: 2, num1: elem.num1.value, num2: elem.num2.value })
    })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        setSt2(data);
      })

  }

  function task3(event) {
    event.preventDefault();
    let elem = event.target.elements;

    fetch("http://test1.ru/api.php", {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ action: 3, filename: elem.filename.value, filedata: elem.filedata.value })
    })
      .then(response => response.text())
      .then(data => {
        if (data > 0) setSt3(elem.filename.value);
        else setSt3(false);
        console.log(st3);
      })
  }

  function task4(event) {
    event.preventDefault();
    fetch("http://test1.ru/api.php", {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ action: 4 })
    })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        setSt4(data);
      })
  }

  function task5(event) {
    event.preventDefault();
    fetch("http://test1.ru/api.php", {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ action: 5 })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSt5(data);
      })
  }

  return (
    <div>
      <h1>ItGid.info</h1>
      <p>{text}</p>
      <hr />
      <div>
        <h2>Время сервера</h2>
        <button onClick={task1}>GET</button>
        <p>{st1}</p>
      </div>
      <hr />
      <div>
        <h2>Случайное число между</h2>
        <form action="" onSubmit={task2}>
          <div><input type="number" name="num1" defaultValue="30" /></div>
          <div><input type="number" name="num2" defaultValue="44" /></div>
          <button type="sumbit">Push</button>
        </form>
        <p>{st2}</p>
      </div>
      <hr />
      <div>
        <h2>Создание файла</h2>
        <form action="" onSubmit={task3}>
          <div><input type="text" name="filename" /></div>
          <div><input type="text" name="filedata" /></div>
          <button type="sumbit">Push</button>
        </form>
        <p>{st3 !== undefined && st3 !== false ? <a href={'http://test1.ru/files/' + st3} target="blank" download >скачать</a> : ''}</p>
      </div>
      <hr />
      <div>
        <h2>Получение данных компьютера</h2>
        <form action="" onSubmit={task4}>
          <button type="sumbit">Push</button>
        </form>
        <p>{st4}</p>
        <hr />
        <div>
          <h2>Получение курса валют</h2>
          <form action="" onSubmit={task5}>
            <button type="sumbit">Push</button>
          </form>
          <ul>{st5.map((item, index) => <li key={index.toString()}>1{item.ccy} - BUY: {item.buy}{item.base_ccy} SALE: {item.sale}{item.base_ccy}</li>)}</ul>
        </div>

      </div>
    </div>
  );
}

export default App;
