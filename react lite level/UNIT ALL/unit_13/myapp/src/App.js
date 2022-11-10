import React from 'react';
import './App.css';


class App extends React.Component {

  render() {
    let random = Math.floor(50 + Math.random() * (60 + 1 - 50));
    let color = `rgb(${Math.floor(0 + Math.random() * (255 + 1 - 0))},${Math.floor(0 + Math.random() * (255 + 1 - 0))},${Math.floor(0 + Math.random() * (255 + 1 - 0))})`;
    let arrP = [1, 2, 3, 4, 5];
    let arrDiv = [1, 0, 1, 0];

    let outNum = () => {
      let out = [];
      for (let i = 1; i < 101; i++) {
        out.push(<span key={i}>{i} </span>);
      }
      return out;
    }

    return (
      <div className="App" >
        <p>{random}</p>
        <div style={{ background: color }}>Random color</div>
        <div>
          {arrP.map(item => <p key={item}>{item}</p>)}
        </div>
        {arrDiv.map((item, index) => (item === 1) ? <div className='white' key={index}>{item}</div> : <div className='black' key={index}>{item}</div>)}
        <div>{outNum()}</div>
      </div >
    );
  }
}

export default App;