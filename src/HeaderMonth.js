import React, { Component } from "react";
import {Grid,Cell} from 'react-foundation';
class HeaderMonth extends Component {
  render() {
    return (
      <div>
       <Grid className="header-month">
            <Cell small={1} large={1}>
            <div class="header-month-card card">
                <div class="card-section">
                    Monday
                </div>
            </div>  
            </Cell>
            <Cell small={1} large={1}>
            <div class="header-month-card card">
                <div class="card-section">
                    Tuesday
                </div>
            </div>  
            </Cell>
            <Cell small={1} large={1}>
            <div class="header-month-card card">
                <div class="card-section">
                    Wednesday
                </div>
            </div>  
            </Cell>
            <Cell small={1} large={1}>
            <div class="header-month-card card">
                <div class="card-section">
                    Thursday
                </div>
            </div>  
            </Cell>
            <Cell small={1} large={1}>
            <div class="header-month-card card">
                <div class="card-section">
                    Friday
                </div>
            </div>  
            </Cell>
            <Cell small={1} large={1}>
            <div class="header-month-card card">
                <div class="card-section">
                    Saturday
                </div>
            </div>  
            </Cell>
            <Cell small={1} large={1}>
            <div class="header-month-card card">
                <div class="card-section">
                    Sunday
                </div>
            </div>  
            </Cell>
          </Grid>
      </div>
    );
  }
}
 
export default HeaderMonth;