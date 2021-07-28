import React, { Component } from "react";
import { Grid, Cell } from 'react-foundation';
import { ClockIcon, ArrowRightIcon } from '@heroicons/react/outline'

class Task extends Component {
  render() {
    return (
      <div className="card card-task">
        <div className="card-section" style={{
          background: this.props.content.bgColor,
          color: this.props.content.textColor
        }}>
          <Grid>
            <Cell small={7} large={7}>
              <ArrowRightIcon className="navbar-icon" />
              Name: {this.props.content.name}
            </Cell>
            <Cell small={5} large={5}>
              <ClockIcon className="navbar-icon" />
              {this.props.content.dueDate}
            </Cell>

          </Grid>
        </div>
      </div >
    );
  }
}

export default Task;