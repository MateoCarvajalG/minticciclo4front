import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import Login from "./components/login";
import Register from "./components/register";
import Landing from "./components/landing"
function App() {
  return (
    <div className="App">
      hola, soy un proyecto de react
      <Router>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/landing" exact>
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
