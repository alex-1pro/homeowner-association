import { HashRouter, Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage /> </Route>
          <Route exact path="/login"> <LoginPage /></Route>
          <Route exact path="/dashboard">  <DashboardPage /></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
