import React, { Component } from "react";
import {Grid,Cell} from 'react-foundation';
import HeaderMonth from './HeaderMonth'
import Week from './Week'

class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <h3>Calendar</h3>
        <Grid>
            <Cell small={1} large={3}>
              <div className="">
                Aja
              </div>
            </Cell>
            <Cell small={1} large={9}>
              <div className="month">
                <HeaderMonth/>
                <Week/>
                <Week/>
                <Week/>
                <Week/>
                <Week/>     
              </div>
            </Cell>
        </Grid>
      </div>
    );
  }
}
 
export default Calendar;