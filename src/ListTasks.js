import React, { Component } from "react";
import SimpleTask from "./SimpleTask";
 
class ListTasks extends Component {
  render() {
    return (
      <div>
        <h2>Tasks</h2>
        <p>This is section where you see your task to do</p>
        <p>Here you can add your task, schedule, and check</p>
        <SimpleTask name="send email" duedate="14-06-2021" state="TODO"/>
        <SimpleTask name="buy eat" duedate="15-06-2021" state="TODO"/>
     
      </div>
    );
  }
}
 
export default ListTasks;