import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/products" component={ () => {}} />
        <Route path="/contact" component={ () => {}} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
