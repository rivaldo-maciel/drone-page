import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ () => {}} />
        <Route path="/products" component={ () => {}} />
        <Route path="/contact" component={ () => {}} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
