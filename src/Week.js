import React, { Component } from "react";
import {Grid,Cell} from 'react-foundation';
import Day from './Day';

class Week extends Component {
  render() {
    return (
      <div className="week">
      	  <Grid>
            {this.props.days.map(day => (
            <Cell small={1} large={1}>
                <Day data={day}/>
            </Cell>
            ))}
          </Grid>
        </div>
     
    );
  }
}
 
export default Week;