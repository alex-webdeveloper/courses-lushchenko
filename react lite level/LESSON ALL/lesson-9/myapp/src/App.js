import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello',
      text2: 555,
    }
    this.showText = this.showText.bind(this);
    this.showText2 = this.showText2.bind(this);
  }

  showText() {
    console.log('button work');
    console.log(this);
    this.setState({ text: 'button work' });
  }

  showText2(e) {
    console.log('work2');
    this.setState({ text2: e.target.value });
    console.log(this.state.text2);
    console.log(e.target.value);
  }

  move(e) {
    console.log(e.target.textContent);
  }

  render() {
    return (
      <div className="App" >
        <button onClick={this.showText}>Push1</button>
        <input defaultValue={this.state.text} onInput={this.showText2} />
        <div onMouseMove={this.move}>Lorem</div>
        <p>{this.state.text}</p>
        <p>{this.state.text2}</p>
      </div>
    );
  }
}
export default App;
