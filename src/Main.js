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
        <ul className="header" style={{ userSelect: "none" }}>
          <li>
            <NavLink exact to="/">
              <HomeIcon className="navbar-icon" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/tasks">
              <CollectionIcon className="navbar-icon" />
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">
              <ViewBoardsIcon className="navbar-icon" />
              DashBoard
            </NavLink>
          </li>
          <li>
            <NavLink to="/calendar">
              <CalendarIcon className="navbar-icon" />
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
      </HashRouter>
    );
  }
}

export default Main;