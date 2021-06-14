import React, { Component } from "react";
import {Grid,Cell} from 'react-foundation';
import Week from './Week'

class Calendar extends Component {
  render() {
    return (
      <div>
      <h3>Calendar</h3>
     <Week/>
     <Week/>
     <Week/>
     <Week/>
     <Week/>     
    </div>
     
    );
  }
}
 
export default Calendar;