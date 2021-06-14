import React, { Component } from "react";
import {Grid,Cell} from 'react-foundation';
import ColumnDashBoard from './ColumnDashBoard'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <p>It is to visually see the current status</p>
        <p> of the tasks and modify it</p>
        <p>Each task have state: TODO, PROGRESS, DONE</p>
        <Grid>
        <Cell small={4} large={4}>
          <ColumnDashBoard columnName="TODO"/>
        </Cell>
          <Cell small={4} large={4}>
          <ColumnDashBoard columnName="PROGRESS"/>
          </Cell>
          <Cell small={4} large={4}>
            <ColumnDashBoard columnName="DONE"/>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;