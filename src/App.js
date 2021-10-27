import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './pages/Home'
import './App.css';
import { Component } from 'react';

class App extends Component {
  
  render(){
    return (
      <Router>
        <Header/>
        <Route exact path='/'>
          <Home />
        </Route>
      </Router>
    );
  }
}

export default App;
