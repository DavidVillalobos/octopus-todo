import React, { Component } from "react";
import { Grid, Cell } from "react-foundation";
import TaskDay from "./TaskDay";

class Day extends Component {
  style = (this.props.month === this.props.day.monthIndex ? "white" : "gray");
  render() {
    return (
      <div className="card day">
        <div className={this.style}>
          <Grid className="aja">
            <Cell className="text-center">
              <div className="number-day">
                {this.props.day.day}
              </div>
            </Cell>
            <Cell className="task-day-panel">
              <TaskDay />
              <TaskDay />
            </Cell>
          </Grid>
        </div>
      </div >
    );
  }
}

export default Day;

