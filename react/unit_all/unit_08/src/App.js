
import './App.css';
import React from 'react';

function App(props) {

  const h1 = React.createElement('h1', {}, 'unit_08');
  const h2 = React.createElement('h2', { className: 'text-orange' }, "header 2");
  const p = React.createElement('p', { style: props.color }, "this is p");
  const input = React.createElement('input', { defaultValue: 55 });
  const p1 = React.createElement('p', {}, 'hi');
  const p2 = React.createElement('p', {}, 'world');
  const div = React.createElement('div', { className: 'text-grey ' }, p1, p2);
  const val = React.createRef();
  const input2 = React.createElement('input', { type: 'text', ref: val });
  const button = React.createElement('button', { onClick: draw }, 'Push');
  const ul = React.createRef();


  function draw() {
    if (val.current.value !== '') {
      ul.current.innerHTML += `<li>${val.current.value}</li>`;
      val.current.value = '';

    }
  }

  return (
    <>
      {h1}
      {h2}
      {p}
      {div}
      {input}
      <div>
        {input2}
        {button}
        <ul ref={ul}></ul>
      </div>
    </>
  );
}

export default App;