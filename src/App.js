import React from 'react';
import './App.css';
import  Home  from "./components/Home";
import MenuAppBar from './components/MenuAppBar'
import About from './components/About'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

const NotFound = (props) => {
  return(
    <h1>404</h1>
  );
}
function App() {
  return (
    <div>
      <MenuAppBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;

