import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  const val1 = React.createRef();
  const [st1, setSt1] = useState('');
  const [st2, setSt2] = useState(0);
  const [st3, setSt3] = useState('');
  const [st4, setSt4] = useState(0);
  const [st5, setSt5] = useState('');
  const [st6, setSt6] = useState('');
  const [st7, setSt7] = useState();
  const [st8, setSt8] = useState('');
  const [st9, setSt9] = useState('');
  const [st10, setSt10] = useState([]);
  const val10 = React.createRef();

  function task1() {
    let val = val1.current.value;
    setSt1(val);
    val1.current.value = '';
  }
  function task2() {
    let count = st2;
    count++;
    setSt2(count);
  }
  function task3(e) {
    let val = e.target.value;
    setSt3(val);
  }
  function task4() {
    let count = st4;
    count++;
    setSt4(count);
  }
  function task5(e) {
    let val = e.target.value;
    if (e.target.checked) setSt5(val);
    else setSt5(0);
  }
  function task6(e) {
    let val = e.target.value;
    setSt6(val);
  }
  function randomInt(a, b) {
    let rand = Math.floor(a + Math.random() * (b + 1 - a));
    return rand;
  }
  function task7() {
    setSt7(`rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`);
  }
  function task8(e) {
    if (e.charCode > 47 && e.charCode < 58) setSt8(st8 + '1');
    else setSt8(st8 + '0');
  }
  function task9(e) {
    let val = e.target.value;
    setSt9(val);

  }
  function task10() {
    let val = val10.current.value;
    let out = [...st10, val];
    setSt10(out);
    val10.current.value = '';
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <input type="text" ref={val1} />
        <button className="task-1" onClick={task1}>Push</button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5} />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" style={{ background: st7 }}></div>
        <button className="task-7" onClick={task7}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div>{st9}</div>
      </section>

      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={val10}></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div>
          <ul>
            {st10.map((item, index) => <li key={index.toString()}>{item}</li>)}
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
