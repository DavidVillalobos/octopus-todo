import React, { Component } from "react";
import { Grid, Cell } from 'react-foundation';
import HeaderMonth from './HeaderMonth';
import Week from './Week';
import { v4 as uuidv4 } from 'uuid'
import { JsonCalendar } from 'json-calendar';

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.PrevMonth = this.PrevMonth.bind(this)
    this.NextMonth = this.NextMonth.bind(this)
    this.actual = new Date();
  }
  getCalendar = () => new JsonCalendar({ today: this.actual, languageCode: 'es' })
  getWeeks = () => this.getCalendar().weeks.slice(0, 6);
  getDayNames = () => this.getCalendar().dayNames;
  PrevMonth() {
    this.setState({
      actual: new Date(this.actual.setMonth(this.actual.getMonth() - 1))
    })
  }
  NextMonth() {
    this.setState({
      actual: new Date(this.actual.setMonth(this.actual.getMonth() + 1))
    })
  }
  render() {
    return (
      <Grid style={{ userSelect: "none" }}>
        <Cell small={12} large={12}>
          <HeaderMonth
            Year={this.actual.getFullYear()}
            MonthName={this.getCalendar().monthNames[this.actual.getMonth()]}
            DayNames={this.getDayNames()}
            NextMonth={this.NextMonth}
            PrevMonth={this.PrevMonth}
          />
        </Cell>
        <Cell small={12} large={12}>
          {this.getWeeks().map(week => (
            <div key={uuidv4()}>
              <Week days={week} month={this.actual.getMonth()} />
            </div>
          ))}
        </Cell>
      </Grid >
    );
  }
}

export default Calendar;