import React, { Component } from "react";
import {Grid,Cell} from 'react-foundation';

class Task extends Component {
  render() {
    return (
      <div className="card simple-task">
        <div className="card-section">
          <Grid>
              <Cell small={6} large={3}>
                {this.props.task.name} 
              </Cell>
              <Cell small={6} large={3}>
                {this.props.task.name}  
              </Cell>
              <Cell small={6} large={3}>
                {this.props.task.name}  
              </Cell>
              <Cell small={6} large={3}>
                {this.props.task.name} 
              </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Task;