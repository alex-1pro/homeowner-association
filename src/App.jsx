import { HashRouter, Route, Switch } from "react-router-dom";
import NavbarHOA from "./components/NavbarHOA/NavbarHOA";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useState } from "react";
import UserModel from "./model/UserModel";
import ActiveUserContext from "./shared/ActiveUserContext";
import MessagePage from "./pages/MessagePage/MessagePage";
import MessageModel from "./model/MessageModel";

import jsonUsers from "./data/users.json";
import jsonMessages from "./data/messages.json";
import jsonComments from "./data/comments.json";
import jsonVoting from  "./data/voiting.json";

import CommentModel from "./model/CommentModel";


import { nanoid } from "nanoid";
import TenantsPage from "./pages/TenantsPage/TenantsPage";
import VotingModel from "./model/VotingModel";
import VotingPage from "./pages/VotingPage/VotingPage";

function App() {
  const [users, setUsers] = useState(jsonUsers.map(plainUser => new UserModel(plainUser)));
  const [activeUser, setActiveUser] = useState();
  const [messages, setMessages] = useState(jsonMessages.map(msg => new MessageModel(msg)));
  const [allComments, setAllComments] = useState(jsonComments.map(cmt => new CommentModel(cmt)));
  const [allVoting,setAllVoting] = useState(jsonVoting.map(vote=>new VotingModel(vote)));
 
  console.log(allVoting[0].createdBy);


  function login(activeUser) {
    setActiveUser(activeUser);

  }
  function logout() {
    setActiveUser(null);

  }

  function createNewMessage(title, priority, img, details) {
    const newMessage = new MessageModel({
      id: nanoid(6),
      createdBy: activeUser.id,
      createdAt: new Date().toISOString().slice(0, 10),
      title: title,
      details: details,
      priority: priority,
      comments: null,
      communityId: activeUser.communityId,
      img: img
    });
    setMessages(messages.concat(newMessage));

  }
 

  function addNewTenant(fname, lname, email, pwd, isCommittee,apt,img) {
    const newUser = new UserModel({
      id: nanoid(6),
      fname: fname,
      lname: lname,
      email: email,
      pwd: pwd,
      isCommittee: isCommittee,
      apt:apt,
      communityId: activeUser.communityId,
      img:img
    });

    setUsers(users.concat(newUser));
  }
  function removeTenant(tenant){
    const indexTenant=users.indexOf(tenant);
    const tempArr=[...users];
    tempArr.splice(indexTenant, 1);
    setUsers(tempArr);
  }

  function updateTenant(tenant){
    const index = users.findIndex(user=>user.id===tenant.id);
    const tempArr=[...users];
    tempArr[index]=tenant;
    setUsers(tempArr);
  }
  function check(){
    console.log("work");
  }

  const tenatsProps = {
    users: users,
    onAddTenant:addNewTenant,
    onRemoveTenant:removeTenant,
    onUpdateTenant:updateTenant,
    onCheck:check
  }



  function deleteMessage(msg) {
    const index = messages.indexOf(msg);
    const tempArr = [...messages];
    tempArr.splice(index, 1);
    setMessages(tempArr);
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
              <DashboardPage />
            </Route>

            <Route exact path="/message">
              <NavbarHOA onLogout={logout} />
              <MessagePage users={users} messages={messages} allComments={allComments} setAllComments={setAllComments} onNewMessage={createNewMessage} onRemove={deleteMessage} />
            </Route>

            <Route exact path="/tenants">
              <NavbarHOA onLogout={logout} />
              <TenantsPage tenatsProps={tenatsProps}/>
            </Route>

            <Route exact path="/voting">
              <NavbarHOA onLogout={logout} />
              <VotingPage  voting={allVoting}/>
            </Route>


          </Switch>
        </HashRouter>
      </ActiveUserContext.Provider>
    </div>
  );
}

export default App;
