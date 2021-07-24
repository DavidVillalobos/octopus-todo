import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid'
import { Grid, Cell, Menu, Button } from 'react-foundation';
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
    ];
  }

  loadTaskListFromDisk() {
    return [
      { listId: 0, name: "Home", state: 0, bgColor: "#1373aa", textColor: "white", items: [] },
      { listId: 1, name: "Math", state: 0, bgColor: "#1373aa", textColor: "white", items: [] },
      { listId: 2, name: "Science", state: 0, bgColor: "#1373aa", textColor: "white", items: [] }
    ];
  }

  render() {
    return (
      <Grid className="display" style={{ userSelect: "none" }}>
        <Cell small={3} large={3} className="list-task">
          <Menu isVertical className="todo-lists menu-vertical-example">
            {this.state.taskList.map((list) => {
              return (<Button> {list.name} </Button>)
            })}
            <Button> New List </Button>
          </Menu>
        </Cell>
        <Cell small={9} large={9}>
          <Grid style={{ background: " red" }}>
            <Cell offsetOnLarge={1} offsetOnSmall={1} small={10} large={10} style={{ background: "blue" }}>
              <div className="card card-task">
                <div className="card-section">
                  aja
                </div>
              </div>
            </Cell>
            {this.state.items.map((item) => {
              return (<Cell offsetOnLarge={1} offsetOnSmall={1} small={10} large={10}>
                <Task content={item} />
              </Cell>)
            })}
          </Grid>
        </Cell>
      </Grid >
    );
  }
}

export default ListTasks;