import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      range: '',
      textarea: '',
      select: '',
      a: 'pr'
    }
  }

  myInput = (e) => {
    console.log(this.value); // undefined
    console.log(e.target.value);
    // console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });

  }

  submitForm = (e) => {
    e.preventDefault();
    // console.log(this.state.text);
    let a = 'hi';
    this.setState({ a });
  }

  render() {
    return (
      <div className="App" >
        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Сontact information</legend>
            <input onChange={this.myInput} type='text' name='name' placeholder='Name' />
            <input onChange={this.myInput} type='number' name='age' placeholder='Age' />
            <p>Count<input onChange={this.myInput} type='range' name='range' />{this.state.range}</p>
            <textarea rows="10" cols="45" name="textarea" placeholder='Your text' onChange={this.myInput}></textarea>
            <select onChange={this.myInput} name='select'>
              <option value="select" hidden>Select</option>
              <option value='Mercedes'>Mercedes</option>
              <option value='BMV'>BMV</option>
              <option value='Audi'>Audi</option>
            </select>
            <p><input type='submit' /></p>
          </fieldset>
        </form>
        <h2>{this.state.a}</h2>
        <div className='align'>
          <table>
            <tbody>
              <tr>
                <th>Your name:</th>
                <td>{this.state.name}</td>
              </tr>
              <tr>
                <th>Your age:</th>
                <td>{this.state.age}</td>
              </tr>
              <tr>
                <th>Count:</th>
                <td>{this.state.range}</td>
              </tr>
              <tr>
                <th>Your text:</th>
                <td>{this.state.textarea}<wbr /></td>
              </tr>
              <tr>
                <th>Your selection:</th>
                <td>{this.state.select}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;







// class App extends React.Component{
//   constructor(props){
//   super(props);
//   this.state = {
//   text : '',
//   number : '',
//   range : '',
//   textarea : '',
//   fruct : '',
//   tab : '',
//   }
//   }

//   myInput = (event)=>{
//   this.setState({
//   [event.target.name] : event.target.value,
//   });
//   console.log(this.state)
//   }

//   submitForm = (event)=>{
//   event.preventDefault();
//   let a = <table>
//   <thead>
//   <tr>
//   <th>Имя</th><th>Значение</th>
//   </tr>
//   </thead>
//   <tbody>
//   <tr>
//   <td>text</td><td>{this.state.text}</td>
//   </tr>
//   <tr>
//   <td>number</td><td>{this.state.number}</td>
//   </tr>
//   <tr>
//   <td>range</td><td>{this.state.range}</td>
//   </tr>
//   <tr>
//   <td>textarea</td><td>{this.state.textarea}</td>
//   </tr>
//   <tr>
//   <td>fruct</td><td>{this.state.fruct}</td>
//   </tr>
//   </tbody>
//   </table>
//   this.setState({
//   tab : a,
//   });
//   }

//   render(){
//   return (
//   <div>
//   <form onSubmit = {this.submitForm}>
//   <p>Введите текст
//   <input type = "text" onChange = {this.myInput} name = "text"/>
//   </p>
//   <p>Введите число
//   <input type = "number" onChange = {this.myInput} name = "number"/>
//   </p>
//   <p>Выберите значение
//   <input type = "range" onChange = {this.myInput} name = "range"/>
//   </p>
//   <p>Введите текст
//   <input type = "textarea" onChange = {this.myInput} name = "textarea"/>
//   </p>
//   <label>
//   Выберите ваш любимый вкус:
//   <select name = "fruct" onChange = {this.myInput}>
//   <option value="grapefruit">Грейпфрут</option>
//   <option value="lime">Лайм</option>
//   <option value="coconut">Кокос</option>
//   <option value="mango">Манго</option>
//   </select>
//   </label>
//   <input type = "submit" name = "submit"/>
//   </form>
//   {this.state.tab}
//   </div>
//   );
//   }
//   }

//   export default App;