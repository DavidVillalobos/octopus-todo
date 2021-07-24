import React, { Component } from "react";
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon } from '@heroicons/react/solid'
import { v4 as uuidv4 } from 'uuid'

class HeaderMonth extends Component {
  render() {
    return (
      <div>
        <div className="header-month">
          <div className="header-month-card">
            <div className="card-section name-month">
              <div className="month-name-token">
                <ChevronLeftIcon className="month-arrow-icon" onClick={this.props.PrevMonth} />
              </div>
              <div className="month-name-word">
                <CalendarIcon className="calendar-icon" />
                {this.props.MonthName} {this.props.Year}
              </div>
              <div className="month-name-token">
                <ChevronRightIcon className="month-arrow-icon" onClick={this.props.NextMonth} />
              </div>
            </div>
          </div>
          <div className="header-month-card">
            {this.props.DayNames.map(day => (
              <div key={uuidv4()} className="card">
                <div className="card-section name-day-week text-center">
                  {day.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderMonth;