import React from "react";
import Signup from "./Authentication/Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Authentication/Dashboard";
import Login from "./Authentication/Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./Authentication/ForgotPassword";
import UpdateProfile from "./Authentication/UpdateProfile";
import Drive from "./Drive/Drive";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
         <PrivateRoute exact path="/" component={Drive} />
          <PrivateRoute exact path="/folder/:folderId" component={Drive} />
          <PrivateRoute exact path="/user" component={Dashboard} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
