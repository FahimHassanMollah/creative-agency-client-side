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
import Login from './components/Home/Login/Login';
import DashboardOrder from './components/Dashboard/DashboardOrder/DashboardOrder';
function App() {
  return (
    <div className="">
         <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/dashboardOrder">
            <DashboardOrder></DashboardOrder>
          </Route>
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
