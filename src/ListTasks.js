import React, { Component } from "react";
import SimpleTask from "./SimpleTask";
 
class ListTasks extends Component {
  render() {
    return (
      <div className="nav-page">

        <SimpleTask name="send email" duedate="14-06-2021" state="TODO"/>
        <SimpleTask name="buy eat" duedate="15-06-2021" state="TODO"/>
     
      </div>
    );
  }
}
 
export default ListTasks;