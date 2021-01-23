import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import NotFound from "../404";
import {Home} from "../pages/Home/Home";

export default function AppRouters() {
  return (
    <Router>
      <Switch>
        <Route path="/app/home" component={Home}></Route>
      </Switch>
    </Router>
  );
}
