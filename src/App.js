import "./styles.css";

import { Login } from "./Pages/login";
import { Signup } from "./Pages/signup";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Link to={"/login"}>Log In</Link>
          <br />
          <Link to={"/signup"}>Sign Up</Link>
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
