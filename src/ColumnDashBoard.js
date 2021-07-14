import React, { Component } from "react";
import Task from "./Task"
class ColumnDashBoard extends Component {
  task = {name:"example", duedate:"dd-mm-yyyy", description:"aja", state:1};
  render() {
    return (
        <div className="card dashboard-column">
            <div className="card-divider dashboard-column-header noselect">
                {this.props.columnName} 
            </div>
            <div className="card-section content-section">
              <Task task={this.task}/>
            </div>
        </div>   
    );
  }
}

export default ColumnDashBoard;

