import React, { Component } from "react";
import {
  Route, NavLink, HashRouter
} from "react-router-dom";
import {
  HomeIcon, CollectionIcon,
  ViewBoardsIcon, CalendarIcon
} from '@heroicons/react/solid'
import Home from "./Home/Home";
import ListTasks from "./Tasks/ListTasks";
import Dashboard from "./DashBoard/DashBoard";
import Calendar from "./Calendar/Calendar";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li>
              <NavLink exact to="/" style={{ userSelect: "none" }}>
                <HomeIcon className="navbar-icon noselect" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/tasks" style={{ userSelect: "none" }}>
                <CollectionIcon className="navbar-icon noselect" />
                Tasks
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" style={{ userSelect: "none" }}>
                <ViewBoardsIcon className="navbar-icon noselect" />
                DashBoard
              </NavLink>
            </li>
            <li>
              <NavLink to="/calendar" style={{ userSelect: "none" }}>
                <CalendarIcon className="navbar-icon noselect" />
                Calendar
              </NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/tasks" component={ListTasks} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/calendar" component={Calendar} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;