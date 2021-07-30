import React, { Component } from "react";
import { Grid, Cell, Menu, Button, Label } from 'react-foundation';
import { PlusCircleIcon, CollectionIcon } from '@heroicons/react/solid'
import Task from "../Task";
import { v4 as uuidv4 } from 'uuid'

class ListTasks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTaskList: this.props.taskList[0],
      name: "",
      dueDate: ""
    };
    this.createTask = this.createTask.bind(this)
  }


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
        taskList: this.state.currentTaskList.listId,
        bgColor: this.state.currentTaskList.bgColor,
        textColor: this.state.currentTaskList.textColor
      });
      this.setState({ dueDate: "", name: "" });
    }
  }

  createTaskList() {
    this.props.createTaskList({ name: 'TASKLIST' })
  }

  render() {
    return (
      <Grid>
        <Cell small={3} large={3} className="lists-section">
          <Menu isVertical className="todo-lists">
            <Button onClick={() => this.setState({ currentTaskList: this.props.taskList[0] })} onContextMenu={this.handleClick}>
              <CollectionIcon className="navbar-icon" />
              {this.props.taskList[0].name}
            </Button>
            {this.props.taskList.slice(1).map((list) => {
              return (
                <Button
                  key={list.listId}
                  onClick={() => this.setState({ currentTaskList: this.props.taskList[list.listId] })}
                  style={{ background: list.bgColor, color: list.textColor }}>
                  {list.name}
                </Button>)
            })}
            <Button>
              <PlusCircleIcon className="navbar-icon" />
              New
            </Button>
          </Menu>
        </Cell>
        <Cell small={9} large={9} className="tasks-section">
          <Grid>
            <Cell className="panel-create-task">
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