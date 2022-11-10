
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="container">
        <div className="row">
          <div className="col col-lg-12">
            <h1>First React APP</h1>
            <img src="https://cdn0.iconfinder.com/data/icons/flat-round-system/512/reactos-256.png" alt="" />
            <p>my first react app</p>
            <button className="button-primary">Default</button>
          </div>
        </div>
      </div>

      <table>
        <caption>
          Developer
        </caption>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Aleksey</td>
            <td>Kazeka</td>
            <td>43</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default App;
