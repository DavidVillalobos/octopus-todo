import React, { Component } from "react";
import { ViewListIcon, ClipboardListIcon, ViewBoardsIcon, CalendarIcon } from '@heroicons/react/outline'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Tasks from "./Tasks";
import Dashboard from "./Dashboard";
import Calendar from "./Calendar"; 

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                <ViewListIcon class="icon-navbar"/>
                <div>Home</div>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/tasks">
              <ClipboardListIcon class="icon-navbar"/>
              <div>Tasks</div>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/dashboard">
              <ViewBoardsIcon class="icon-navbar"/>
              <div>Dashboard</div>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/calendar">
              <CalendarIcon class="icon-navbar"/>
              <div>Calendar</div>
              </NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/tasks" component={Tasks}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/calendar" component={Calendar}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;