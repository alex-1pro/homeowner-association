import { HashRouter, Route, Switch } from "react-router-dom";
import NavbarHOA from "./components/NavbarHOA/NavbarHOA";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import jsonUsers from "./data/users.json"
import { useState } from "react";
import UserModel from "./model/UserModel";
import ActiveUserContext from "./shared/ActiveUserContext";

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

      <ActiveUserContext.Provider value={activeUser}>
        <HashRouter>
          <Switch>
            <Route exact path="/">
                     <NavbarHOA onLogout={logout} />
                     <HomePage />
            </Route>
            <Route exact path="/login">
                      <NavbarHOA onLogout={logout} />
                      <LoginPage users={users} onLogin={login} />
            </Route>
            
            <Route exact path="/dashboard">
                      <NavbarHOA onLogout={logout} />
                      {activeUser? <DashboardPage />:<HomePage />}
           </Route>
          </Switch>
        </HashRouter>
      </ActiveUserContext.Provider>
    </div>
  );
}

export default App;
