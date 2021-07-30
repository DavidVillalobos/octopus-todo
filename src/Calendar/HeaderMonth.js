import React, { Component } from "react";
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon } from '@heroicons/react/solid'

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
            {this.props.DayNames.map((day, index) => (
              <div key={index} className="card">
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