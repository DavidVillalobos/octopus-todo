import React, { Component } from "react";
import {Grid,Cell} from 'react-foundation';
import HeaderMonth from './HeaderMonth'
import ColumnDashBoard from './ColumnDashBoard'
import Week from './Week'

class Calendar extends Component {
  render() {
    return (
      <div className="nav-page">
        <Grid>
            <Cell small={9} large={9}>
              <div className="month">
                <HeaderMonth/>
                <Week/>
                <Week/>
                <Week/>
                <Week/>
                <Week/>     
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