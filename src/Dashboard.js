import React, { Component } from "react";
import {Grid,Cell} from 'react-foundation';
import ColumnDashBoard from './ColumnDashBoard'

class Dashboard extends Component {
  render() {
    return (
      <div className="nav-page">
 
       <Grid>
        <Cell small={4} large={4}>
          <ColumnDashBoard columnName="Todo"/>
        </Cell>
          <Cell small={4} large={4}>
          <ColumnDashBoard columnName="Progress"/>
          </Cell>
          <Cell small={4} large={4}>
            <ColumnDashBoard columnName="Done"/>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;