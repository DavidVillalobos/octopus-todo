import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <p>It is to visually see the current status</p>
        <p> of the tasks and modify it</p>
        <p>Each task have state: TODO, PROGRESS, DONE</p>
      </div>
    );
  }
}

export default Dashboard;