import React, { Component } from "react";
import {Grid,Cell} from 'react-foundation';
import HeaderMonth from './HeaderMonth';
import ColumnDashBoard from './ColumnDashBoard';
import Week from './Week';
const { JsonCalendar } = require('json-calendar');

class Calendar extends Component {
  actual = new Date(1999, 8, 7);
  getCalendar = () => new JsonCalendar({ today: this.actual, languageCode: 'en' })
  getWeeks = () => this.getCalendar().weeks.slice(0, 5);
  getDayNames = () => this.getCalendar().dayNames;

  render() {
    return ( 
      <div className="nav-page">
        <Grid>
            <Cell small={9} large={9}>
              <div className="month">
                <HeaderMonth MonthName={this.getCalendar().monthNames[this.actual.getMonth()]} DayNames={this.getDayNames()}/>
                {this.getWeeks().map(week => (
                  <Week days={week} month={this.actual.getMonth()}/>
                ))}
              </div>
            </Cell>
            <Cell small={3} large={3}>
                <ColumnDashBoard columnName="Pending tasks"/>
            </Cell>
        </Grid>
      </div>
    );
  }
}
 
export default Calendar;