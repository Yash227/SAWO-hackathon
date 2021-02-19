import Home from "./components/Home/Home";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
//import Login from "./components/Login/Login";
import Error from "./components/Error/Error";
import SAWO from "./components/Login/Sawo_login";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={SAWO} />
        <Route path="/patient_dashboard" render={(props) => <Dashboard payload={props.location.state} />} />
        <Route path="/404_not_found" component={Error} />
        <Redirect exact to="/404_not_found" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
