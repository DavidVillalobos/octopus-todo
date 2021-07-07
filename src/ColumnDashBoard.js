import React, { Component } from "react";
import SimpleTask from "./SimpleTask"
class ColumnDashBoard extends Component {
  render() {
    return (
        <div className="card dashboard-column">
            <div class="card-divider dashboard-column-header">
                {this.props.columnName} 
            </div>
            <div className="card-section">
                <SimpleTask name="example" duedate="dd-mm-yyyy"/>
           </div>
        </div>   
    );
  }
}

export default ColumnDashBoard;
