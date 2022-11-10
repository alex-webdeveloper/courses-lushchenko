import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';

class App extends React.Component {
  render() {
    let nav = this.props.nav;
    let b = 7;
    let contact = this.props.contact;
    let address = this.props.address;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.props.title}</h1>
          <p>{b * 3}</p>
          <p>{this.props.hero}</p>
        </header>

        <Nav nav={nav} />

        <Footer contact={contact} address={address} title={this.props.title} />
      </div>
    );
  }
}
export default App;
