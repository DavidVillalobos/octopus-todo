import React, { Component } from "react";
import SimpleTask from "./SimpleTask";

class Home extends Component {
  render() {
    return (
      <div className="nav-page">
        <h2>Home</h2>
        <p>This app is for manage your task todo</p>
        <p>This section show your principal task schedule</p>
        <SimpleTask name="send email" duedate="14-06-2021" state="TODO"/>
        <SimpleTask name="buy eat" duedate="15-06-2021" state="TODO"/>
      </div>
    );
  }
}

export default Home;