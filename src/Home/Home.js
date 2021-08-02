import React, { Component } from "react";
import { Grid, Cell, Badge, Label } from 'react-foundation';
import Task from "../Task";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mainTasks: this.props.tasks.filter(task => !task.completed && this.formatDate(this.props.today) <= task.dueDate).slice(0, 5)
    };
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  render() {
    return (
      <div className="home-task">
        <Grid style={{ userSelect: "none" }}>
          <Cell className="text-center row-main-title">
            <Label style={{ fontSize: 35, background: "transparent" }}>
              Octopus todo
            </Label>
          </Cell>
          <Cell offsetOnSmall={2} offsetOnLarge={2} large={8} small={8} >
            <Label style={{ fontSize: 20, background: "transparent" }} >
              Main tasks:
              <Badge style={{ fontSize: 25, background: "transparent" }} >
                {this.state.mainTasks.length}
              </Badge>
            </Label>
          </Cell>
          <Cell offsetOnSmall={2} offsetOnLarge={2} large={8} small={8}>
            {
              this.state.mainTasks.map(item => {
                return (<Task key={item.taskId} content={item} />)
              })
            }
          </Cell>
        </Grid>
      </div >
    );
  }
}

export default Home;