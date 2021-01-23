import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import NotFound from "../404";
import {App} from '../pages/app/App'
export default function Routers() {
  return (  
    <Router>
      <Switch>
        <Route path="/app" component={App}></Route>
        <Route path="/" component={NotFound}></Route>
      </Switch>
    </Router>
  );
}
