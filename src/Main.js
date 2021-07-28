import React, { Component } from "react";
import {
  Route, NavLink, HashRouter
} from "react-router-dom";
import {
  HomeIcon, CollectionIcon,
  ViewBoardsIcon, CalendarIcon
} from '@heroicons/react/solid'
import { v4 as uuidv4 } from 'uuid'
import Home from "./Home/Home";
import ListTasks from "./Tasks/ListTasks";
import Dashboard from "./DashBoard/DashBoard";
import Calendar from "./Calendar/Calendar";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: this.loadColumns(),
      taskList: this.loadTaskList(),
      tasks: this.loadTasks(),
    };
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

  loadColumns() {
    return [
      { columnId: 0, name: "To do", tasks: [] },
      { columnId: 1, name: "In Progress", tasks: [] },
      { columnId: 2, name: "Done", tasks: [] }
    ];
  }

  loadTaskList() {
    return [
      { listId: 0, name: "Tasks", state: 0, bgColor: "white", textColor: "black", tasks: [] },
      { listId: 1, name: "English", state: 0, bgColor: "red", textColor: "white", tasks: [] },
      { listId: 2, name: "Math", state: 0, bgColor: "#1373aa", textColor: "white", tasks: [] },
      { listId: 3, name: "Science", state: 0, bgColor: "green", textColor: "white", tasks: [] },
      { listId: 4, name: "Social", state: 0, bgColor: "blue", textColor: "white", tasks: [] }
    ];
  }

  loadTasks() {
    return [
      { taskId: uuidv4(), name: "Eat", dueDate: "2021-07-16", state: 2, taskList: 0, bgColor: "green", textColor: "white" },
      { taskId: uuidv4(), name: "Buy dinner for me", dueDate: "2021-07-20", state: 2, taskList: 2, bgColor: "#1373aa", textColor: "white" },
      { taskId: uuidv4(), name: "Buy dinner for me", dueDate: "2021-07-20", state: 2, taskList: 2, bgColor: "#1373aa", textColor: "white" },
      { taskId: uuidv4(), name: "Buy dinner for me", dueDate: "2021-07-20", state: 2, taskList: -1, bgColor: "#1373aa", textColor: "white" },
      { taskId: uuidv4(), name: "Buy dinner for me", dueDate: "2021-07-20", state: 2, taskList: 2, bgColor: "#1373aa", textColor: "white" },
      { taskId: uuidv4(), name: "Study Science", dueDate: "2021-07-21", state: 0, taskList: 1, bgColor: "#1373aa", textColor: "white" },
      { taskId: uuidv4(), name: "Math task", dueDate: "2021-07-22", state: 0, taskList: 1, bgColor: "red", textColor: "white" }
    ];
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
          <Route exact path="/" render={(props) => (<Home {...props} tasks={this.state.tasks} />)} />
          <Route path="/tasks" render={(props) => (<ListTasks {...props} taskList={this.state.taskList} />)} />
          <Route path="/dashboard" render={(props) => (<Dashboard {...props} columns={this.state.columns} onDragEnd={this.onDragEnd} />)} />
          <Route path="/calendar" render={(props) => (<Calendar {...props} tasks={this.state.tasks} />)} />
        </div>
      </HashRouter>
    );
  }
}

export default Main;