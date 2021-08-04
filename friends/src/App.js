import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>This is my app know - I am the captain</h1>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
