import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import navbar from "./components/navbar"

function App() {
  return (
    <Router>
      <navbar />
      <Switch>
        <Route path='/' exact component={Dogs} />
        <Route path='/cats' component={Cats} />
        <Route path='/sheeps' component={Sheeps} />
        <Route path='/goats' component={Goats} />
      </Switch>
    </Router>
  );
}

export default App;