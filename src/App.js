import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Component } from 'react';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Home from './pages/Home/Home.js'
import Housing from "./pages/Housing/Housing";
import Error404 from "./pages/Error404/Error404";
import './App.css';

class App extends Component {
  
  render(){
    return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/housing/:housingId'>
            <Housing />
          </Route>
          <Route component={Error404}/>
        </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App;
