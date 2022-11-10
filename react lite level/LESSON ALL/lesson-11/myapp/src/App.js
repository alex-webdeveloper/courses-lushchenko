import React from 'react';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello',

    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   return { text: props.text55 }
  // }

  // after render
  componentDidMount() {
    setTimeout(() => this.setState({ text: 'Component did mount' }), 3000);
  }

  render() {

    return (
      <div className="App">
        <p>{this.state.text}</p>
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