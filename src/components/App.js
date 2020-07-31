import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashBoard from "./DashBoard";
import CreateLog from "./CreateLog";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" exact component={DashBoard} />
              <Route path="/createlog" exact component={CreateLog} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
