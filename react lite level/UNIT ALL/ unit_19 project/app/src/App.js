import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import About from './About/About';
import Contacts from './Contacts/Contacts';
import Address from './Address/Address';
import Error404 from './404/404';
import Guarantees from './Guarantees/Guarantees';
import Reimbursement from './Reimbursement/Reimbursement';
import Deal from './Deal/Deal';
import Sitemap from './Sitemap/Sitemap';


class App extends React.Component {


  render() {

    return (

      <div className="site" >

        <Header />

        <div className="container">
          <main>
            <Router>
              <Switch>
                <Route exact path='/' component={Rate} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contacts' component={Contacts} />
                <Route exact path='/address' component={Address} />
                <Route exact path='/guarantees' component={Guarantees} />
                <Route exact path='/reimbursement' component={Reimbursement} />
                <Route exact path='/deal' component={Deal} />
                <Route exact path='/sitemap' component={Sitemap} />
                <Route component={Error404}></Route>
              </Switch>
            </Router>
          </main>
        </div>

        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.<br />В
              частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
            местоположения.&nbsp;<button className="btn btn-primary btn-sm">OK</button></div>
          </div>
        </div>

        <Footer />

      </div>

    );
  }
}

export default App;


