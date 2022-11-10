import React from 'react';
import './App.css';
import App2 from './App2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s1: '',
      s2: '',
      s3: '',
    }
  }

  static getDerivedStateFromProps(props, state) {
    return { s1: props.a1, s2: props.a2, s3: props.a3 };
  }

  render() {

    return (
      <div className="App">
        <p>{this.props.a1}</p>
        <p>{this.props.a2}</p>
        <p>{this.state.s1}</p>
        <p>{this.state.s2}</p>
        <p>{this.state.s3}</p>

        <App2 z1={this.state.s3} />
      </div>
    );
  }
}

export default App;
