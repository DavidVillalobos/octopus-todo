import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid'
import { Grid, Cell, Menu, Button } from 'react-foundation';
import { PlusCircleIcon, CollectionIcon } from '@heroicons/react/solid'
import Task from "../DashBoard/Task";

class ListTasks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      duedate: ""
    };
    this.createTask = this.createTask.bind(this)
  }

  currentTaskList = this.props.taskList[0];

  handleClick(e) {
    if (e.type === 'click') {
      console.log('Left click');
    } else if (e.type === 'contextmenu') {
      console.log('Right click');
    }
  }

  createTask() {
    console.log(`name: ${this.state.name}, description: ${this.state.description}, duedate: ${this.state.duedate}`);
  }

  render() {
    return (
      <Grid>
        <Cell small={3} large={3} className="lists-section">
          <Menu isVertical className="todo-lists">
            <Button onClick={this.handleClick} onContextMenu={this.handleClick}>
              <CollectionIcon className="navbar-icon" />
              Tasks
            </Button>
            {this.props.taskList.map((list) => {
              return (<Button key={uuidv4()} style={{ background: list.bgColor, color: list.color }}> {list.name} </Button>)
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
                  <input type="text" placeholder="name" onChange={(e) => this.setState({ name: e.target.value })} />
                  <input type="date" placeholder="DueDate" onChange={(e) => this.setState({ duedate: e.target.value })} />
                </Cell>
                <Cell offsetOnSmall={1} offsetOnLarge={1} small={5} large={5}>
                  <textarea placeholder="Description" onChange={(e) => this.setState({ description: e.target.value })} />
                </Cell>
                <Cell offsetOnSmall={1} offsetOnLarge={1} small={10} large={10} className="text-center">
                  <Button className="button-create" onClick={this.createTask}>
                    <PlusCircleIcon className="navbar-icon" />
                    Create task
                  </Button>
                </Cell>
              </Grid>
            </Cell>
            <Cell small={12} large={12} className="panel-todo-list">
              <Grid>
                {this.currentTaskList.tasks.map((task) => {
                  return (
                    <Cell key={uuidv4()} offsetOnLarge={1} offsetOnSmall={1} small={10} large={10}>
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