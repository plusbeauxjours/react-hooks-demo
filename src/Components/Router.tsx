import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home";
import Screen from "../Routes/Screen";
import Reducer from "../Routes/Reducer";

interface IProps {
  isLoggedIn: boolean;
  history: any;
  onUpdate: () => void;
}

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/context" component={Screen} />
      <Route path="/reducer" component={Reducer} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default AppRouter;
