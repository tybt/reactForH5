import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import NotFound from "../404";
import {Home} from "../pages/Home/Home";
import Test from '../pages/Test'
export default function AppRouters() {
  return (
    <Router>
      <Switch>
        <Route path="/app/test" component={Test}></Route>
        <Route path="/app/home" component={Home}></Route>
        <Route path="/app/" component={NotFound}></Route>
      </Switch>
    </Router>
  );
}
