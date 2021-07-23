import React, { Component } from "react";
import { Grid, Cell } from 'react-foundation';
import Task from "../DashBoard/Task";

class ListTasks extends Component {
  task = { name: "My task", duedate: "20/07/2021", state: 0, bgColor: "#1373aa", textColor: "white" }
  render() {
    return (
      <Grid style={{ userSelect: "none" }}>
        <Cell small={3} large={3} className="list-task">
        </Cell>
        <Cell small={9} large={9} className="list-task">
          <Task content={this.task} />
          <Task content={this.task} />
          <Task content={this.task} />
          <Task content={this.task} />
          <Task content={this.task} />
          <Task content={this.task} />
          <Task content={this.task} />
          <Task content={this.task} />

        </Cell>
      </Grid>
    );
  }
}

export default ListTasks;