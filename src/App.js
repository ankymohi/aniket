

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dosage from "./components/Layouts/Dosage";
import List from "./components/List";
import Show from "./components/Show";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <Show />
        </Route>
        <Route path="/List">
          <List />
        </Route>
        <Route path="/">
          <Dosage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
