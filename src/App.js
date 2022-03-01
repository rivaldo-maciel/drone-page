import './App.css';
import React, {useContext} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import MobileMenu from './components/MobileMenu';
import mobileContext from './context/mobileContext.js';

function App() {
  const { showMenu } = useContext(mobileContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/products" component={ Products } />
        <Route path="/contact" component={ Contact } />
        </Switch>
    {
      showMenu && <MobileMenu />
    }
    </BrowserRouter>
  );
}

export default App;
