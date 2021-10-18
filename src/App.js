import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Header from './components/Header/Header';
import './App.css';
import { Component } from 'react';

class App extends Component {
  
  render(){
    return (
      <Router>
        <Header/>
      </Router>
    );
  }
}

export default App;
