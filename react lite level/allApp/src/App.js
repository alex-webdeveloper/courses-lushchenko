import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';

class App extends React.Component {
  render() {
    let nav = this.props.nav;
    let b = 7;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <h1>{this.props.title}</h1>
          <p>{b * 3}</p>
          <p>{this.props.hero}</p>
        </header>

        <Nav nav={nav} hero={this.props.hero} nn={800} na='500' />
      </div>
    );
  }
}

export default App;

// props не меняются, а state меняются !!!
// getDerivedStateFromProps применяется для изминения state, позволяет props запехнуть в state
// static getDerivedStateFromProps(props, state) {
//   return { text: props.text55 }
// }

// let nav = this.props.nav;
//  <Nav nav={nav} hero={this.props.hero} />

// let nav = { main: '#index', abount: '#abount', price: '#buy/price', hello: '#hello' };
{/* <App title='My site 1' hero='Go-go-go 2' nav={nav} /> */ }

// componentDidMount() { // метод который меняет state на ходу
//   setTimeout(() => {
//     this.setState({ text: 'Component Did Mount' });
//   }, 3000)
// }

// this.state = {
  // text: '',}
  // myInput = (e) => {
  //   console.log(e.target.value);
  //   console.log(e.target.name);
  //   this.setState({ [e.target.name]: e.target.value });

  // }
//   let a = '';
// if (this.state.text) a = <p>Your text: {this.state.text}</p>;
// else a = '';
//
//  {a}

// let address = { Андрей: 'Казань, ул. Ленина, дом 10', Олег: 'Белгород, ул. Новая дом 44' };
//  <ul>{Object.keys(address).map(item => <li>{item}: {address[item]}</li>)}</ul>