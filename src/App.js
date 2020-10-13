import React, { createContext, useState } from 'react';
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
import PrivateRoute from './components/Home/PrivateRoute/PrivateRoute';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (

   <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute exact path="/dashboardOrder">
          <DashboardOrder></DashboardOrder>
        </PrivateRoute>

      </Switch>
    </Router>
   </UserContext.Provider>
  );
}

export default App;
