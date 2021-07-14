import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import ListTasks from "./ListTasks";
import Dashboard from "./Dashboard";
import Calendar from "./Calendar"; 
import { HomeIcon, CollectionIcon, ViewBoardsIcon, CalendarIcon } from '@heroicons/react/solid'

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
	        <ul className="header">
            <li>
              <NavLink exact to="/">
              <HomeIcon className="navbar-icon "/>
              <span className="noselect"> Home </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/tasks">
              <CollectionIcon className="navbar-icon"/>
              <span className="noselect"> Tasks </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard"> 
              <ViewBoardsIcon className="navbar-icon"/>
              <span className="noselect"> Dashboard </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/calendar">
              <CalendarIcon className="navbar-icon"/>
              <span className="noselect"> Calendar </span> 
              </NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/tasks" component={ListTasks}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/calendar" component={Calendar}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;