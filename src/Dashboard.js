import React, { Component } from "react";
import {Grid,Cell} from 'react-foundation';
import ColumnDashBoard from './ColumnDashBoard'

class Dashboard extends Component {
  render() {
    return (
      <div className="nav-page">
        <h2>Dashboard</h2>
        <p>It is to visually see the current status of the tasks and modify it Each task have state: TODO, PROGRESS, DONE</p>
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