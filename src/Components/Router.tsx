import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home";
import Context from "../Routes/Context";
import Reducer from "../Routes/Reducer";
import ToDos from "../Routes/ToDos";
import Effec from "../Routes/Effect";

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
      <Route path="/context" component={Context} />
      <Route path="/reducer" component={Reducer} />
      <Route path="/todos" component={ToDos} />
      <Route path="/effect" component={Effec} />

      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default AppRouter;
