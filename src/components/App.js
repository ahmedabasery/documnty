import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import DashBoard from "./DashBoard";

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={DashBoard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
