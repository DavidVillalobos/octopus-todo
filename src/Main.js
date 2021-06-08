import React, { Component } from "react";
import { Icon } from 'react-foundation';
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
              <Icon name='fi-home'/> 
              <span> Home </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/tasks">
              <Icon name='fi-list-bullet'/> 
              <span> Tasks </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard"> 
              <Icon name='fi-database'/> 
              <span> Dashboard </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/calendar">
              <Icon name='fi-calendar'/> 
              <span> Calendar </span> 
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