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
import UserServiceList from './components/Dashboard/UserServiceList/UserServiceList';
import UserReview from './components/Dashboard/UserReview/UserReview';
import AdminServiceList from './components/Dashboard/AdminServiceList/AdminServiceList';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import AddService from './components/Dashboard/AddService/AddService';
import ComingSoon from './components/Home/ComingSoon/ComingSoon';
import NoMatch from './components/Home/Home/NoMatch/NoMatch';
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
          <Route exact path="/ourPortfolio">
            <ComingSoon></ComingSoon>
          </Route>
          <Route exact path="/ourTeam">
            <ComingSoon></ComingSoon>
          </Route>
          <Route exact path="/contactUs">
            <ComingSoon></ComingSoon>
          </Route>
          <PrivateRoute exact path="/dashboardOrder/:serviceName/:serviceDescription">
            <DashboardOrder></DashboardOrder>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboardUserServiceList">
            <UserServiceList></UserServiceList>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboardUserReview">
            <UserReview></UserReview>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboardAdminServiceList">
            <AdminServiceList></AdminServiceList>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboardMakeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboardAddService">
            <AddService></AddService>
          </PrivateRoute>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>


        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
