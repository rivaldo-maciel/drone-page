import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/products" component={ Products } />
        <Route path="/contact" component={ Contact } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
