import React, { Component } from "react";
import {Grid,Cell} from 'react-foundation';
class HeaderMonth extends Component {
  render() {
    return (
      <div>
       <Grid className="header-month">
            <Cell small={12} large={12} className="name-month-card">
                <div class="header-month-card name-month card">
                    <div class="card-section">
                        {this.props.MonthName}
                    </div>
                </div>  
            </Cell>
            {this.props.DayNames.map(day => (
            <Cell small={1} large={1}>
                <div class="header-month-card card">
                    <div class="card-section">
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