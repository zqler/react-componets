import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../app/home/home.jsx"; //主页
import asyncComponent from "./asyncComponent.jsx"; //按需加载
class Routers extends React.Component {
  render() {
    return (
      <Router>
       
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
       
      </Router>
    );
  }
}

export default Routers;