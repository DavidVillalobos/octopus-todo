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
  getCalendar = () => new JsonCalendar({ today: this.actual, languageCode: 'en' })
  getWeeks() {
    let weeks = this.getCalendar().weeks.slice(0, 6);
    let actualTask = 0;
    weeks.forEach(week => {
      week.forEach(day => {
        day["taskList"] = [];
        let dayString = ((day.day < 10) ? "0" : "") + day.day
        let monthString = ((day.monthIndex < 9) ? "0" : "") + (day.monthIndex + 1);
        while (actualTask < this.props.tasks.length && `${day.year}-${monthString}-${dayString}` === this.props.tasks[actualTask].duedate) {
          day["taskList"].push(this.props.tasks[actualTask]);
          actualTask++;
        }
      });
    });
    return weeks;
  }
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