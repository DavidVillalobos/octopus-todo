import React, { Component } from "react";
import {Grid,Cell} from 'react-foundation';

class SimpleTask extends Component {
  render() {
    return (
      <div class="card simple-task">
        <div class="card-section">
          <Grid>
              <Cell small={2} large={2}>
                {this.props.task.name} 
              </Cell>
              <Cell small={2} large={2}>
                {this.props.task.description}  
              </Cell>
              <Cell small={2} large={2}>
                {this.props.task.duedate}  
              </Cell>
              <Cell small={2} large={2}>
                {this.props.task.state} 
              </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default SimpleTask;