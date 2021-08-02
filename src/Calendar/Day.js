import React, { Component } from "react";
import { Grid, Cell } from "react-foundation";
import TaskDay from "./TaskDay";

class Day extends Component {
  render() {
    let inMonth = (this.props.month === this.props.day.monthIndex) ? "day-in-month" : "day-out-month";
    let forToday = (this.props.today.getDate() === this.props.day.day && this.props.today.getMonth() === this.props.day.monthIndex) ? "day-actual" : "";
    return (
      <div className="card day">
        <div className={inMonth}>
          <Grid className="block-day">
            <Cell className="text-center ">
              <div className={"number-day " + forToday}>
                {this.props.day.day}
              </div>
            </Cell>
            <Cell className="task-day-panel">
              {this.props.day.taskList.map(task => {
                return (<TaskDay key={task.taskId} content={task} />);
              })}
            </Cell>
          </Grid>
        </div>
      </div >
    );
  }
}

export default Day;

