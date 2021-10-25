import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner'
import './App.css';
import { Component } from 'react';

class App extends Component {
  
  render(){
    return (
      <Router>
        <Header/>
        <Route path='/'>
          <Banner />
        </Route>
      </Router>
    );
  }
}

export default App;
