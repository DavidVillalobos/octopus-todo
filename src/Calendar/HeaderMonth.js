import React, { Component } from "react";
import { Grid, Cell } from 'react-foundation';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

import { v4 as uuidv4 } from 'uuid'

class HeaderMonth extends Component {
  render() {
    return (
      <div>
        <Grid className="header-month">
          <Cell small={12} large={12} className="name-month-card">
            <div className="header-month-card name-month card">
              <div className="card-section">
                <Grid>
                  <Cell small={2} large={4}>
                    <ChevronLeftIcon className="month-arrow-icon" onClick={this.props.PrevMonth} />
                  </Cell>
                  <Cell small={8} large={4}>
                    {this.props.MonthName} {this.props.Year}
                  </Cell>
                  <Cell small={2} large={4}>
                    <ChevronRightIcon className="month-arrow-icon" onClick={this.props.NextMonth} />
                  </Cell>
                </Grid>
              </div>
            </div>
          </Cell>
          {this.props.DayNames.map(day => (
            <Cell key={uuidv4()} small={1} large={1}>
              <div className="header-month-card card">
                <div className="card-section">
                  {day.name}
                </div>
              </div>
            </Cell>
          ))}
        </Grid>
      </div>
    );
  }
}

export default HeaderMonth;