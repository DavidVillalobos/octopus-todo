import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid'
import { Grid, Cell, Menu, Button } from 'react-foundation';
import { PlusCircleIcon, CollectionIcon } from '@heroicons/react/solid'
import Task from "../DashBoard/Task";

class ListTasks extends Component {

  handleClick(e) {
    if (e.type === 'click') {
      console.log('Left click');
    } else if (e.type === 'contextmenu') {
      console.log('Right click');
    }
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
              return (<Button key={uuidv4()}> {list.name} </Button>)
            })}
            <Button>
              <PlusCircleIcon className="navbar-icodn" />
              New List
            </Button>
          </Menu>
        </Cell>
        <Cell small={9} large={9} className="tasks-section">
          <Grid>
            <Cell className="panel-create-task">
              <Grid>
                <Cell offsetOnSmall={1} offsetOnLarge={1} small={4} large={4}>
                  <input type="text" placeholder="Name" />
                  <input type="date" placeholder="DueDate" />
                </Cell>
                <Cell offsetOnSmall={1} offsetOnLarge={1} small={5} large={5}>
                  <textarea placeholder="Description" />
                </Cell>
                <Cell small={12} large={12} className="text-center">
                  <Button className="button-create">
                    <PlusCircleIcon className="navbar-icon" />
                    Create task
                  </Button>
                </Cell>
              </Grid>
            </Cell>
            <Cell small={12} large={12} className="panel-todo-list">
              <Grid>
                {this.props.taskList[0].tasks.map((item) => {
                  return (
                    <Cell key={uuidv4()} offsetOnLarge={1} offsetOnSmall={1} small={10} large={10}>
                      <Task content={item} />
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