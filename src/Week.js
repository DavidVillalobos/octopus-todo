import React, { Component } from "react";
import {Grid,Cell} from 'react-foundation';
import Day from './Day';

class Week extends Component {
  render() {
    return (
      <div>
      	  <Grid>
            <Cell small={1} large={1}>
                <Day/>
            </Cell>
            <Cell small={1} large={1}>
                <Day/>
            </Cell>
            <Cell small={1} large={1}>
                <Day/>
            </Cell>
            <Cell small={1} large={1}>
                <Day/>
            </Cell>
            <Cell small={1} large={1}>
                <Day/>
            </Cell>
            <Cell small={1} large={1}>
                <Day/>
            </Cell>
            <Cell small={1} large={1}>
                <Day/>
            </Cell>
            <Cell small={1} large={1}>
                <Day/>
            </Cell>
          </Grid>
        </div>
     
    );
  }
}
 
export default Week;