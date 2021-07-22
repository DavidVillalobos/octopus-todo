import React, { Component } from "react";
import { Grid, Cell } from 'react-foundation';
import { ClockIcon, ArrowRightIcon } from '@heroicons/react/outline'

class Task extends Component {
  render() {
    return (
      <div className="card card-task">
        <div className="card-section" style={{
          background: this.props.content.bgColor,
          color: this.props.content.textColor,
          userSelect: "none"
        }}>
          <Grid>
            <Cell small={12} large={6}>
              <ArrowRightIcon style={{ height: 15 }} />
              Name: {this.props.content.name}
            </Cell>
            <Cell small={12} large={6}>
              <ClockIcon style={{ height: 12 }} />
              {this.props.content.duedate}
            </Cell>
            <Cell small={12} large={6}>
              Description:
              {this.props.content.description}
            </Cell>
            <Cell small={12} large={6}>
              State (temp):
              {this.props.content.state}
            </Cell>
          </Grid>
        </div>
      </div >
    );
  }
}

export default Task;