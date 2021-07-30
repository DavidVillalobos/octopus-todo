import React, { Component } from "react";
import { Grid, Cell } from 'react-foundation';
import { ClockIcon, CheckIcon, ChartSquareBarIcon, ViewListIcon, MinusIcon } from '@heroicons/react/solid'

class Task extends Component {
  render() {
    let icon = (this.props.content.completed) ? <CheckIcon className="navbar-icon" /> : <MinusIcon className="navbar-icon" />;
    return (
      <div className="card card-task">
        <div className="card-section" style={{
          background: this.props.content.bgColor,
          color: this.props.content.textColor
        }}>
          <Grid>
            <Cell small={8} large={8}>
              {icon}
              {this.props.content.name}
            </Cell>
            <Cell small={4} large={4}>
              <ClockIcon className="navbar-icon" />
              {this.props.content.dueDate}
            </Cell>
            <Cell small={8} large={8}>
              <ViewListIcon className="navbar-icon" />
              {this.props.content.nameTaskList}
            </Cell>
            <Cell small={4} large={4}>
              <ChartSquareBarIcon className="navbar-icon" />
              {this.props.content.nameState}
            </Cell>

          </Grid>
        </div>
      </div >
    );
  }
}

export default Task;