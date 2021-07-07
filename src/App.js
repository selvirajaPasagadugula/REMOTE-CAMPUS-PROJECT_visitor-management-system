import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import "./App.css";
import Dashboard from "./containers/Dashboard";
import SearchVisitor from "./containers/SearchVisitor";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/searchVisitor" exact component={SearchVisitor} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
