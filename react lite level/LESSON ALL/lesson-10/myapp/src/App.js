import React from 'react';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      text2: 555,
      first_name: '',
      age: 0,
    }
  }

  myInput = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });

  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state.text);
  }

  render() {
    let a = '';
    if (this.state.text) a = <p>Your text: {this.state.text}</p>;
    else a = '';
    return (
      <div className="App" >
        <form onSubmit={this.submitForm}>
          <input onChange={this.myInput} name='text' />
          <input onChange={this.myInput} type='number' name='age' />
          {a}
          <input type='submit' />
          <p>Age: {this.state.age}</p>
        </form>
      </div>
    );
  }
}

export default App;