import React, { Component } from "react";
import { Grid, Cell } from 'react-foundation';
import Task from "../DashBoard/Task";

class Home extends Component {
  task = { name: "My task", duedate: "20/07/2021", state: 0, bgColor: "#1373aa", textColor: "white" }
  render() {
    return (
      <div className="home-task">
        <Grid style={{ userSelect: "none" }}>
          <Cell large={12}>
            Hello
          </Cell>
          <Cell large={12}>
            <Task content={this.task} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;