import React, { Component } from "react";
import {Grid,Cell} from 'react-foundation';
import Day from './Day';
import {v4 as uuidv4 } from 'uuid'

class Week extends Component {
  render() {
    return (
      <div className="">
        <Grid>
          {this.props.days.map(day => (
            <Cell key={uuidv4()} small={1} large={1}>
                <Day day={day} month={this.props.month}/>
            </Cell>
          ))}
        </Grid>
      </div>
     
    );
  }
}
 
export default Week;