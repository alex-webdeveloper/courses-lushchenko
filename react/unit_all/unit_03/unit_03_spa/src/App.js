
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Category from './Category';
import CategoryDescription from './CategoryDescription';
import Footer from './Footer';
import Error404 from './Error404';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



const navCat = {
  '/category/notebook': 'Ноутбуки', '/category/monitor': 'Мониторы', '/category/cellphone': 'Мобильные телефоны'
}

function App() {
  const nav = {
    '/': 'Главная', '/about': 'О сайте', '/category': 'Категории'
  };
  return (
    <>
      <Router>
        <Header nav={nav} />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route exact path='/category'><Category nav={navCat} /></Route>
            <Route path="/category/:nameCategory" component={CategoryDescription} />
            <Route component={Error404} />
          </Switch>
        </main>
      </Router>

      <Footer />
    </>
  );
}

export default App;




