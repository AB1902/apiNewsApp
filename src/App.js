import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Sports from "./components/Sports";
import Business from "./components/Business";
import Home from "./components/Home";
import Politics from "./components/Politics";
import Entertainment from "./components/Entertainment";
import Tech from "./components/Tech";
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        
        <Nav />
        <Route exact path="/" component={Home}  />
        <Route path="/politics" component={Politics}  />
        <Route path="/business" component={Business}  />
        <Route path="/sports" component={Sports}  />
        <Route path="/entertainment" component={Entertainment}  />
        <Route path="/tech" component={Tech}  />
      </div>
    </Router>
  );
}

export default App;
