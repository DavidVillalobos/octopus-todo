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
      columns: this.readJsonArray(relative_path + 'columns.json'),
      taskList: this.readJsonArray(relative_path + 'taskList.json'),
      tasks: this.readJsonArray(relative_path + 'tasks.json'),
      today: new Date()
    };
    this.createTask = this.createTask.bind(this)
    this.updateTask = this.updateTask.bind(this)
    this.createTaskList = this.createTaskList.bind(this)
    this.onDragEnd = this.onDragEnd.bind(this)
    this.state.tasks.forEach(task => {
      if (0 <= task.state && task.state < this.state.columns.length) {
        this.state.columns[task.state].tasks.push(task);
      }
      if (task.taskList !== '1') { // HOME TASKS
        let taskList = this.state.taskList.find(list => list.listId === task.taskList);
        if (taskList) taskList.tasks.push(task);
      }
    })
  }

  readJsonArray(path) {
    try {
      return JSON.parse(fs.readFileSync(path, 'UTF-8'));
    } catch {
      console.log(`Error: file ${path} not found`);
      return [];
    }
  }


  onDragEnd(result) {
    window.scrollTo(0, 0);
    if (!result.destination) return;
    const { source, destination } = result;
    let newState = {};
    if (source.droppableId !== destination.droppableId) { // CHANGE STATE
      const sourceColumn = this.state.columns[source.droppableId];
      const destColumn = this.state.columns[destination.droppableId];
      const sourceItems = [...sourceColumn.tasks];
      const destItems = [...destColumn.tasks];
      const [itemMove] = sourceItems.splice(source.index, 1);

      itemMove.state = destColumn.columnId;
      itemMove.nameState = destColumn.name;
      itemMove.completed = destColumn.finalColumn;
      destItems.splice(destination.index, 0, itemMove);
      newState = {
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
    } else { // REORDER
      const column = this.state.columns[source.droppableId];
      const copiedItems = [...column.tasks];
      const [itemMove] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, itemMove);
      newState = {
        ...this.state.columns,
        [source.droppableId]: {
          ...column,
          tasks: copiedItems
        }
      };
    }
    this.setState({ columns: newState });
    this.commit(relative_path + 'tasks.json', this.state.tasks);
  };

  createTask(task) {
    task.nameState = this.state.columns[0].name;
    this.state.columns[0].tasks.push(task);
    this.state.tasks.push(task);
    if (task.taskList !== '1') { // HOME TASKS
      this.state.taskList.find(list => list.listId === task.taskList).tasks.push(task);
    }
    this.state.tasks.sort((a, b) => ((a.dueDate > b.dueDate) ? 1 : ((a.dueDate < b.dueDate) ? -1 : 0)));
    this.commit(relative_path + 'tasks.json', this.state.tasks);
  }

  removeTask(task) {
    let pos = this.state.tasks.findIndex(t => t.taskId === task.taskId);
    if (pos !== -1) {
      this.state.tasks.splice(pos, 1);
      this.commit(relative_path + 'tasks.json', this.state.tasks);
    }
  }

  updateTask(task) {
    let pos = this.state.tasks.findIndex(t => t.taskId === task.taskId);
    if (pos !== -1) {
      let newStateTasks = this.state.tasks;
      let newStateColumns = this.state.columns;
      newStateTasks[pos] = task;
      let posColumn = newStateColumns[task.state].tasks.findIndex(t => t.taskId === task.taskId);
      if (posColumn !== -1) {
        newStateColumns[task.state].tasks[posColumn] = task;
      }
      newStateTasks.sort((a, b) => ((a.dueDate > b.dueDate) ? 1 : ((a.dueDate < b.dueDate) ? -1 : 0)));
      this.setState({ tasks: newStateTasks, columns: newStateColumns });
      this.commit(relative_path + 'tasks.json', this.state.tasks);
    }
  }

  createTaskList(taskList) {
    this.state.taskList.push(taskList);
    this.commit(relative_path + 'taskList.json',
      this.state.taskList.map(list => {
        return {
          'listId': list.listId, 'name': list.name,
          'bgColor': list.bgColor, 'textColor': list.textColor, 'tasks': []
        };
      })
    );
  }

  commit(path, data) {
    fs.writeFileSync(path, JSON.stringify(data), 'UTF-8');
    this.setState({});
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
          <Route exact path='/' render={(props) => (<Home {...props} tasks={this.state.tasks} today={this.state.today}
            taskList={this.state.taskList} updateTask={this.updateTask} removeTask={this.removeTask} />)} />

          <Route path='/tasks' render={(props) => (<ListTasks {...props}
            tasks={this.state.tasks} taskList={this.state.taskList} createTask={this.createTask}
            createTaskList={this.createTaskList} updateTask={this.updateTask} removeTask={this.removeTask} />)} />

          <Route path='/dashboard' render={(props) => (<Dashboard {...props} columns={this.state.columns} onDragEnd={this.onDragEnd}
            taskList={this.state.taskList} updateTask={this.updateTask} removeTask={this.removeTask} />)} />

          <Route path='/calendar' render={(props) => (<Calendar {...props} tasks={this.state.tasks}
            today={this.state.today} />)} />

        </div>
      </HashRouter>
    );
  }
}

export default Main;