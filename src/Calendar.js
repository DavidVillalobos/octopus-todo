import React, { Component } from "react";
import Week from './Week'
import HeaderMonth from './HeaderMonth'

class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <h3>Calendar</h3>
        <div className="month">
          <HeaderMonth/>
          <Week/>
          <Week/>
          <Week/>
          <Week/>
          <Week/>     
        </div>
      </div>
    );
  }
}
 
export default Calendar;