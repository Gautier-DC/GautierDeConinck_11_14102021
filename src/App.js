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
import Home from './pages/Home/Home.js'
import Housing from "./pages/Housing/Housing";
import './App.css';
import { Component } from 'react';

class App extends Component {
  
  render(){
    return (
      <Router>
        <Header/>
        <Switch>
          <Route path='/housing/:housingId'>
            <Housing />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App;
