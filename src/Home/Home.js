import React, { Component } from "react";
import Task from "../DashBoard/Task";

class Home extends Component {
  task = { name: "example", duedate: "dd-mm-yyyy", description: "aja", state: 1 };
  render() {
    return (
      <div className="nav-page">
        <Task content={this.task} />
      </div>
    );
  }
}

export default Home;