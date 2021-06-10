import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "./components/sidebar/sidebar";
import TopBar from "./components/topbar/topbar";
import "./App.scss";
import HomePage from "./pages/home";
import UsersList from "./pages/users/users-list";

const App = () => {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users" component={UsersList} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
