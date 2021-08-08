import { HashRouter, Route, Switch } from "react-router-dom";
import NavbarHOA from "./components/NavbarHOA/NavbarHOA";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import jsonUsers from "./data/users.json"
import { useState } from "react";
import UserModel from "./model/UserModel";
function App() {
  const [users, setUsers] = useState(jsonUsers.map(plainUser => new UserModel(plainUser)));
  const [activeUser, setActiveUser] = useState();

  function login(activeUser) {
    setActiveUser(activeUser);

  }
  function logout() {
    setActiveUser(null);

  }


  return (
    <div>


      <HashRouter>
        <Switch>
          <Route exact path="/">
            <NavbarHOA  activeUser={activeUser} onLogout={logout}/>
            <HomePage />
          </Route>
          <Route exact path="/login">
          <NavbarHOA  activeUser={activeUser} onLogout={logout}/>

             <LoginPage activeUser={activeUser} users={users} onLogin={login} />
             </Route>
          <Route exact path="/dashboard">  <DashboardPage /></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
