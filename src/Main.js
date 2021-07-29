import React, { Component } from 'react';
import {
  Route, NavLink, HashRouter
} from 'react-router-dom';
import {
  HomeIcon, CollectionIcon,
  ViewBoardsIcon, CalendarIcon
} from '@heroicons/react/solid'

import Home from './Home/Home';
import ListTasks from './Tasks/ListTasks';
import Dashboard from './DashBoard/DashBoard';
import Calendar from './Calendar/Calendar';

const fs = window.require('fs');

let relative_path = './src/data/';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: JSON.parse(fs.readFileSync(relative_path + 'columns.json')),
      taskList: JSON.parse(fs.readFileSync(relative_path + 'taskList.json')),
      tasks: JSON.parse(fs.readFileSync(relative_path + 'tasks.json')),
    };
    this.createTask = this.createTask.bind(this)
    this.createTaskList = this.createTaskList.bind(this)
    this.state.tasks.forEach(task => {
      if (0 <= task.state && task.state < this.state.tasks.length) {
        this.state.columns[task.state].tasks.push(task);
      }
      if (0 <= task.taskList && task.taskList < this.state.taskList.length) {
        this.state.taskList[task.taskList].tasks.push(task);
      }
      if (task.taskList !== 0) {
        this.state.taskList[0].tasks.push(task);
      }
    })
  }

  onDragEnd = (result) => {
    window.scrollTo(0, 0);
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) { // CHANGE STATE
      const sourceColumn = this.state.columns[source.droppableId];
      const destColumn = this.state.columns[destination.droppableId];
      const sourceItems = [...sourceColumn.tasks];
      const destItems = [...destColumn.tasks];
      const [itemMove] = sourceItems.splice(source.index, 1);
      itemMove.state = destColumn.columnId;
      destItems.splice(destination.index, 0, itemMove);
      let newState = {
        ...this.state.columns,
        [source.droppableId]: {
          ...sourceColumn,
          tasks: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          tasks: destItems
        }
      };
      this.setState({ columns: newState });
    } else { // REORDER
      const column = this.state.columns[source.droppableId];
      const copiedItems = [...column.tasks];
      const [itemMove] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, itemMove);
      let newState = {
        ...this.state.columns,
        [source.droppableId]: {
          ...column,
          tasks: copiedItems
        }
      };
      this.setState({ columns: newState });
    }
  };

  createTask(task) {
    this.state.columns[0].tasks.push(task);
    if (task.taskList !== 0) {
      this.state.taskList[0].tasks.push(task);
    }
    this.state.taskList[task.taskList].tasks.push(task);
    this.state.tasks.push(task);
    this.state.tasks.sort((a, b) => ((a.dueDate > b.dueDate) ? 1 : ((a.dueDate < b.dueDate) ? -1 : 0)));
    this.commitTasks();
  }

  createTaskList(taskList) {
    this.state.taskList.push(taskList);
    this.commitTaskList();
  }

  commitTasks() {
    fs.writeFileSync(relative_path + 'tasks.json', JSON.stringify(this.state.tasks), 'UTF-8');
    this.setState({}); // re-render
  }

  commitTaskList() {
    fs.writeFileSync(relative_path + 'taskList.json', JSON.stringify(this.state.taskList), 'UTF-8');
    this.setState({}); // re-render
  }


  render() {
    return (
      <HashRouter>
        <ul className='header' style={{ userSelect: 'none' }}>
          <li>
            <NavLink exact to='/'>
              <HomeIcon className='navbar-icon' />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/tasks'>
              <CollectionIcon className='navbar-icon' />
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard'>
              <ViewBoardsIcon className='navbar-icon' />
              DashBoard
            </NavLink>
          </li>
          <li>
            <NavLink to='/calendar'>
              <CalendarIcon className='navbar-icon' />
              Calendar
            </NavLink>
          </li>
        </ul>
        <div className='content'>
          <Route exact path='/' render={(props) => (<Home {...props} tasks={this.state.tasks} />)} />
          <Route path='/tasks' render={(props) => (<ListTasks {...props} taskList={this.state.taskList} createTask={this.createTask} createTaskList={this.createTaskList} />)} />
          <Route path='/dashboard' render={(props) => (<Dashboard {...props} columns={this.state.columns} onDragEnd={this.onDragEnd} />)} />
          <Route path='/calendar' render={(props) => (<Calendar {...props} tasks={this.state.tasks} />)} />
        </div>
      </HashRouter>
    );
  }
}

export default Main;