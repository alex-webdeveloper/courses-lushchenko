import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Main from './Main';
import About from './About';
import Contacts from './Contacts';
import Error404 from './404';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'tt',
      arr: { 'main': 'Main', 'about': 'About', 'contacts': 'Contacts', '404': 404 }
    }

  }

  isValid = () => {
    for (let key in this.state.arr) {
      if (typeof this.state.arr[key] === 'string') {
        // this.state.arr[key] = this.state.arr[key];
        this.setState({ arr: this.state.arr });
        // console.log(this.state.arr[key]);
        // return this.setState.arr;
        console.log(this.state.arr);
      }

    }
    // return this.state.arr;
    // this.setState({ arr: this.state.arr });
    // this.state.arr = 'HII';


  }

  render() {
    // console.log(this.isValid());
    // console.log(this.state.arr);
    // let arr = this.props.arr;
    let arr = { 'main': 'Main', 'about': 'About', 'contacts': 'Contacts', '404': 404 };
    let out = () => {
      let outVal = [];
      for (let key in arr) {
        if (isNaN(arr[key])) {
          (key === 'main') ? outVal.push(<li key={key}><a href='/'>{arr[key]}</a></li>) : outVal.push(<li key={key}><a href={key}>{arr[key]}</a></li>)
        }
      }
      return outVal;
    }
    // console.log(out);
    return (
      <Router>
        <div className="App" >
          <Header />
          {/* <ul>
            <li><a href='/main'>Main page</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contacts'>Contacts</a></li>
            <li><a href='/error404'>Error-404</a></li>
          </ul> */}
          <ul>
            {out()}
          </ul>
          <button onClick={this.isValid}>Show</button>
          <p>{Object.keys(this.state.arr).map(item => <span>{item} </span>)}</p>
          {/* <ul>
            {Object.keys(this.isValid()).map(item => <li key={item}><a href={item}>{this.isValid()[item]}</a></li>)}
          </ul> */}
          <Switch>
            <Route exact path='/' component={Main}></Route>
            {/* <Route exact path='/' component={Home} /> */}
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/contacts' component={Contacts}></Route>
            <Route component={Error404}></Route>
          </Switch>
          <Footer />
        </div>
      </Router >
    );
  }
}

export default App;



// let out = () => {
//   for (let key in arr) {
//     if (isNaN(arr[key])) {
//       (key === 'main') ? <li key={key}><a href='/'>{arr[key]}</a></li> : <li key={key}><a href={key}>{arr[key]}</a></li>
//     }
//   }
// }


//   {Object.keys(arr).map(item => (item === 'main') ? <li key={item}><a href='/'>{arr[item]}</a></li> : <li key={item}><a href={item}>{arr[item]}</a></li>)}