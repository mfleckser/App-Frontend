import "./styles.css";

import { Login } from "./Pages/login";
import { Signup } from "./Pages/signup";
import { Home } from "/Pages/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <div className="App">
            <Login />
          </div>
        </Route>
        <Route path="/signup">
          <div className="App">
            <Signup />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
