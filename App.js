import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";
import Login from "./src/routing/login";
import Register from "./src/routing/register";
import Home from "./src/routing/home";
import Profile from "./src/routing/profile";
import Opting from "./src/routing/opting";
import Teams from "./src/routing/teams";

class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} hideNavBar={true} />
          <Scene key="register" component={Register} hideNavBar={true} />
          <Scene key="home" component={Home} hideNavBar={true} />
          <Scene key="profile" component={Profile} hideNavBar={true} />
          <Scene key="opting" component={Opting} hideNavBar={true} />
          <Scene key="teams" component={Teams} hideNavBar={true} />
        </Scene>
      </Router>
    );
  }
}

export default App;
