import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid'
import { Grid, Cell, Menu, Button } from 'react-foundation';
import { PlusCircleIcon, CollectionIcon } from '@heroicons/react/solid'
import Task from "../DashBoard/Task";

class ListTasks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      taskList: this.loadTaskListFromDisk(),
      items: this.loadItemsFromDisk()
    };
    this.state.items.forEach((item => {
      if (0 <= item.state && item.state <= this.state.taskList.length) {
        this.state.taskList[item.state].items.push(item);
      } else {
        if (this.state.taskList.length === 1) {
          this.state.taskList[0].items.push(item);
          item.state = 0;
        }
      }
    }));
  }

  loadItemsFromDisk() {
    return [
      { id: uuidv4(), name: "Math task", duedate: "20/07/2021", state: 0, bgColor: "#1373aa", textColor: "white" },
      { id: uuidv4(), name: "Study Science", duedate: "21/06/2021", state: 0, bgColor: "#1373aa", textColor: "white" },
      { id: uuidv4(), name: "Buy dinner", duedate: "22/08/2021", state: 2, bgColor: "#1373aa", textColor: "white" },
      { id: uuidv4(), name: "Eat", duedate: "23/06/2021", state: 1, bgColor: "#1373aa", textColor: "white" },
      { id: uuidv4(), name: "Eat", duedate: "23/06/2021", state: 1, bgColor: "#1373aa", textColor: "white" },
      { id: uuidv4(), name: "Eat", duedate: "23/06/2021", state: 1, bgColor: "#1373aa", textColor: "white" },
    ];
  }

  loadTaskListFromDisk() {
    return [
      { listId: 0, name: "Math", state: 0, bgColor: "#1373aa", textColor: "white", items: [] },
      { listId: 1, name: "Science", state: 0, bgColor: "#1373aa", textColor: "white", items: [] },
      { listId: 1, name: "Science", state: 0, bgColor: "#1373aa", textColor: "white", items: [] },
      { listId: 1, name: "Science", state: 0, bgColor: "#1373aa", textColor: "white", items: [] },
      { listId: 1, name: "Science", state: 0, bgColor: "#1373aa", textColor: "white", items: [] },
      { listId: 1, name: "Science", state: 0, bgColor: "#1373aa", textColor: "white", items: [] },
      { listId: 1, name: "Science", state: 0, bgColor: "#1373aa", textColor: "white", items: [] },
      { listId: 1, name: "Science", state: 0, bgColor: "#1373aa", textColor: "white", items: [] },
      { listId: 1, name: "Science", state: 0, bgColor: "#1373aa", textColor: "white", items: [] },
      { listId: 1, name: "Science", state: 0, bgColor: "#1373aa", textColor: "white", items: [] },
      { listId: 1, name: "Science", state: 0, bgColor: "#1373aa", textColor: "white", items: [] },
      { listId: 2, name: "Social", state: 0, bgColor: "#1373aa", textColor: "white", items: [] }
    ];
  }

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
            {this.state.taskList.map((list) => {
              return (<Button key={uuidv4()}> {list.name} </Button>)
            })}
            <Button>
              <PlusCircleIcon className="navbar-icon" />
              New List
            </Button>
          </Menu>
        </Cell>
        <Cell small={9} large={9} className="tasks-section">
          <Grid>
            <Cell small={12} large={12} className="panel-create-task">
              <Grid>
                <Cell offsetOnSmall={1} offsetOnLarge={1} small={4} large={4}>
                  <input type="text" placeholder="Name"/>
                </Cell>
                <Cell offsetOnSmall={1} offsetOnLarge={1} small={5} large={5}>
                  <textarea placeholder="Description"/>
                </Cell>
                <Cell offsetOnSmall={1} offsetOnLarge={1} small={4} large={4}>
                  <input type="date" placeholder="DueDate"/>
                </Cell>
                <Cell offsetOnSmall={1} offsetOnLarge={1} small={5} large={5} className="text-center">
                  <Button>
                    <PlusCircleIcon className="navbar-icon" />
                    Create task
                  </Button>
                </Cell>
              </Grid>
            </Cell>
            <Cell small={12} large={12} className="panel-todo-list">
              <Grid>
                {this.state.items.map((item) => {
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