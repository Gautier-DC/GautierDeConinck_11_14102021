import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
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
        <Footer/>
      </Router>
    );
  }
}

export default App;
