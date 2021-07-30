import React, { Component } from "react";
import { Grid, Cell } from 'react-foundation';
import { ClockIcon, CheckIcon, ViewBoardsIcon } from '@heroicons/react/solid'

class Task extends Component {
  render() {
    return (
      <div className="card card-task">
        <div className="card-section" style={{
          background: this.props.content.bgColor,
          color: this.props.content.textColor
        }}>
          <Grid>
            <Cell small={12} large={12}>
              <CheckIcon className="navbar-icon" />
              {this.props.content.name}
            </Cell>
            <Cell small={5} large={5}>
              <ClockIcon className="navbar-icon" />
              {this.props.content.dueDate}
            </Cell>
            <Cell offsetOnSmall={2} offsetOnLarge={2} small={5} large={5}>
              <ViewBoardsIcon className="navbar-icon" />
              {this.props.content.state}
            </Cell>

          </Grid>
        </div>
      </div >
    );
  }
}

export default Task;