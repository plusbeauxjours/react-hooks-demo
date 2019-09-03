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
import Counter from "../Routes/Counter";
import ToDos from "../Routes/ToDos";

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
      <Route path="/counter" component={Counter} />
      <Route path="/todos" component={ToDos} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default AppRouter;
