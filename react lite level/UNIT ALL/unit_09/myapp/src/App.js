import React from 'react';
import './App.css';
import logo from './logo.svg';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello',
      text2: '',
      count: 0,
      width: 800,
      range: 50,
      view: 'block',
    }

    this.showText = this.showText.bind(this);
    this.showCount = this.showCount.bind(this);
    this.resetCoun = this.resetCoun.bind(this);
    this.showText2 = this.showText2.bind(this);
    this.rise = this.rise.bind(this);
    this.riseReset = this.riseReset.bind(this);
    this.showRange = this.showRange.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  showText() {
    console.log('button work');
    console.log(this);
    this.setState({ text: 'button work' });
  }

  showCount() {
    this.setState({ count: this.state.count + 1 });
  }

  resetCoun() {
    this.setState({ count: 0 });
  }

  move() {
    console.log('move');
  }

  showAttribute(e) {
    console.log(e.target.getAttribute('data'));
  }

  showText2(e) {
    let value = e.target.value;
    this.setState({ text2: value });
    if (value.length < 6) this.setState({ text2: 'длина меньше 6' });

  }

  showChecked(e) {
    if (e.target.checked) console.log('checkbox checked ');
    else console.log('checkbox unchecked');
  }

  showValue(e) {
    if (e.target.checked) console.log(e.target.value);
  }

  showSelect(e) {
    console.log(e.target.value);
  }

  rise() {
    this.setState({ width: this.state.width + 3 });
  }

  riseReset() {
    this.setState({ width: 800 });
  }

  showRange(e) {
    this.setState({ range: e.target.value });
  }

  toggleHidden() {
    this.setState({ view: 'none' });
    if (this.state.view === 'none') this.setState({ view: 'block' });
  }

  render() {
    return (
      <div className="App" >
        <button onClick={this.showText}>Push1</button>
        <p>{this.state.text}</p>
        <button onClick={this.showCount}>Count</button>
        <button onClick={this.resetCoun}>ResetCount</button>
        <p>{this.state.count}</p>
        <div onMouseMove={this.move} style={{ background: 'green' }}>Div</div>
        <button data='art-1' onClick={this.showAttribute}>atr1</button>
        <button data='art-2' onClick={this.showAttribute}>atr2</button>
        <input onInput={this.showText2} />
        <p>{this.state.text2}</p>
        <input type="checkbox" onChange={this.showChecked} />
        <input type="radio" name="radioButton" value='n1' onChange={this.showValue} />
        <input type="radio" name="radioButton" value='n2' onChange={this.showValue} />
        <input type="radio" name="radioButton" value='n3' onChange={this.showValue} />
        <select onChange={this.showSelect}>
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="three">3</option>
        </select>
        <div style={{ width: this.state.width + 'px' }}>
          <button onClick={this.rise}>Rise</button>
          <button onClick={this.riseReset}>Reset</button>
        </div>
        <label><input type="range" onChange={this.showRange} />{this.state.range}</label>
        <div>
          <button onClick={this.toggleHidden}>Hide - Show</button>
          <img src={logo} alt='logo' style={{ display: this.state.view }} className='App-logo' />
        </div>
      </div>
    );
  }
}

export default App;