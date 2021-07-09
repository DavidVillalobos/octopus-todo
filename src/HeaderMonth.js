import React, { Component } from "react";
import {Grid,Cell} from 'react-foundation';
import {v4 as uuidv4 } from 'uuid'

class HeaderMonth extends Component {
  render() {
    return (
      <div>
       <Grid className="header-month">
            <Cell small={12} large={12} className="name-month-card">
                <div className="header-month-card name-month card">
                    <div className="card-section">
                        {this.props.MonthName}
                    </div>
                </div>  
            </Cell>
            {this.props.DayNames.map(day => (
              <Cell key={uuidv4()}  small={1} large={1}>
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