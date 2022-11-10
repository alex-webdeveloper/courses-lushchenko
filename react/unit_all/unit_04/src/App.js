import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  let count4 = 0;
  const [out5, setOut5] = useState('');
  let val6 = React.createRef();
  const [out6, setOut6] = useState('');
  let color7 = React.createRef();
  let out8 = React.createRef();
  let val9 = React.createRef();
  const [out9, setOut9] = useState('');
  let val10 = React.createRef();

  function task1() {
    console.log('task1');
  }
  function task2(e) {
    e.target.classList.add('active');
  }
  function task3(e) {
    console.clear();
    console.log(e.target.value)
  }
  function task4() {
    console.clear();
    count4++;
    console.log(count4);
  }
  function task5(e) {
    if (e.target.checked) setOut5(e.target.value);
    else if (!e.target.checked) setOut5(0);
  }
  function task6() {
    setOut6(val6.current.value);
  }
  function task7(a, b) {
    color7.current.style.background = `rgb(${Math.floor(a + Math.random() * (b + 1 - a))},${Math.floor(a + Math.random() * (b + 1 - a))},${Math.floor(a + Math.random() * (b + 1 - a))})`;

  }
  function task8(e) {
    if (isNaN(e.key)) out8.current.innerHTML += 0;
    else out8.current.innerHTML += 1;
  }
  function task9() {
    setOut9(val9.current.value);
  }
  let ar10 = [5, 6, 7];
  function task10() {
    console.clear();
    ar10.push(val10.current.value);
    console.log(ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5} />
        <div className="out-5">{out5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={val6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6">{out6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={color7}></div>
        <button className="task-7" onClick={() => task7(0, 255)}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div className="out-8" ref={out8}></div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9} ref={val9}></input>
        <div className="out-9">{out9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={val10}></input>
        <button className="task-10" onClick={task10}>Push</button>
      </section>
    </>
  );
}

export default App;