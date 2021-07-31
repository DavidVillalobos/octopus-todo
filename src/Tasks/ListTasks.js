import React, { Component } from "react";
import { Grid, Cell, Menu, Button, Label, Reveal } from 'react-foundation';
import { PlusCircleIcon, CollectionIcon } from '@heroicons/react/solid'
import Task from "../Task";
import { v4 as uuidv4 } from 'uuid'

class ListTasks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTaskList: this.getHomeTasks(),
      name: "",
      nameTaskList: "",
      dueDate: "",
      color: "#1373aa",
      reveal: "none"
    };
    this.createTask = this.createTask.bind(this)
    this.createTaskList = this.createTaskList.bind(this)
  }
  getHomeTasks() { return { "listId": "1", "name": "Tasks", "bgColor": "#1373aa", "textColor": "white", "tasks": this.props.tasks } };


  /*handleClick(e) {
    if (e.type === 'click') {
      console.log('Left click');
    } else if (e.type === 'contextmenu') {
      console.log('Right click');
    }
  }*/


  createTask() {
    if (this.state.name !== '') {
      this.props.createTask({
        taskId: uuidv4(),
        name: this.state.name,
        dueDate: this.state.dueDate,
        state: 0,
        nameState: '',
        completed: false,
        taskList: this.state.currentTaskList.listId,
        nameTaskList: this.state.currentTaskList.name,
        bgColor: this.state.currentTaskList.bgColor,
        textColor: this.state.currentTaskList.textColor
      });
      this.setState({ dueDate: "", name: "" });
    }
  }

  createTaskList() {
    if (this.state.nameTaskList !== '') {
      this.props.createTaskList({
        listId: uuidv4(),
        name: this.state.nameTaskList,
        bgColor: this.state.color,
        textColor: this.invertColor(this.state.color, true),
        tasks: []
      });
      this.setState({ reveal: "none" });
    }
  }


  invertColor(hex, bw) {
    let padZero = (str, len) => {
      len = len || 2;
      var zeros = new Array(len).join('0');
      return (zeros + str).slice(-len);
    }
    if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
      // http://stackoverflow.com/a/3943023/112731
      return (r * 0.299 + g * 0.587 + b * 0.114) > 186
        ? '#000000'
        : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
  }




  render() {
    return (
      <Grid>
        <Cell small={3} large={3} className="lists-section">
          <Menu isVertical className="todo-lists">
            <Button onClick={() => this.setState({ currentTaskList: this.getHomeTasks() })} onContextMenu={this.handleClick}>
              <CollectionIcon className="navbar-icon" />
              Tasks
            </Button>
            {this.props.taskList.map((list) => {
              return (
                <Button
                  key={list.listId}
                  onClick={() => this.setState({ currentTaskList: this.props.taskList.find(taskList => taskList.listId === list.listId) })}
                  style={{ background: list.bgColor, color: list.textColor }}>
                  {list.name}
                </Button>)
            })}
            <Button style={{ display: (this.state.reveal === "none" ? "block" : "none") }} onClick={() => this.setState({ reveal: "block" })}>
              <PlusCircleIcon className="navbar-icon" />
              New
            </Button>
            <Reveal isFullscreen={true} style={{ display: this.state.reveal }}>
              <Grid>
                <Cell>
                  <input type="text" placeholder="name" value={this.state.nameTaskList} onChange={(e) => this.setState({ nameTaskList: e.target.value })} />
                </Cell>
                <Cell small={6} large={6}>
                  <Label>
                    Color:
                  </Label>
                </Cell>
                <Cell small={6} large={6}>
                  <input type="color" placeholder="color" value={this.state.color} onChange={(e) => this.setState({ color: e.target.value })} />
                </Cell>
                <Cell>
                  <Button onClick={this.createTaskList}>
                    <PlusCircleIcon className="navbar-icon" />
                  </Button>
                </Cell>
              </Grid>
            </Reveal>
          </Menu>
        </Cell>
        <Cell small={9} large={9} className="tasks-section">
          <Grid>
            <Cell className="panel-create-task">
              <div>
              </div>
              <Grid>
                <Cell offsetOnSmall={1} offsetOnLarge={1} small={4} large={4}>
                  <input type="text" placeholder="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                </Cell>
                <Cell offsetOnSmall={1} offsetOnLarge={1} small={4} large={4}>
                  <input type="date" placeholder="dueDate" value={this.state.dueDate} onChange={(e) => this.setState({ dueDate: e.target.value })} />
                </Cell>
                <Cell small={2} large={2} className="text-center">
                  <Button className="button-create" onClick={this.createTask}>
                    <PlusCircleIcon className="add-icon" />
                  </Button>
                </Cell>
                <Cell offsetOnSmall={1} offsetOnLarge={1} small={10} large={10}>
                  <Label className="cant-task-column" style={{ userSelect: "none" }}>
                    {this.state.currentTaskList.tasks.length + " in " + this.state.currentTaskList.name}
                  </Label>
                </Cell>
              </Grid>
            </Cell>
            <Cell small={12} large={12} className="panel-todo-list">
              <Grid>
                {this.state.currentTaskList.tasks.map((task) => {
                  return (
                    <Cell key={task.taskId} offsetOnLarge={1} offsetOnSmall={1} small={10} large={10}>
                      <Task content={task} />
                    </Cell>
                  )
                })}
              </Grid>
            </Cell>
          </Grid>
        </Cell>
      </Grid >
    );
  }
}

export default ListTasks;