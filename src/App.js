import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home/Home';
function App() {
  return (
    <div className="">
         <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
