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
import About from "./pages/About/About";
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
          <Route path='/about'>
            <About />
          </Route>
          <Route component={Error404}/>
        </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App;
