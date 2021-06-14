import React, { Component } from "react";
import SimpleTask from "./SimpleTask"
class ColumnDashBoard extends Component {
  render() {
    return (
        <div class="card">
            <div class="card-divider">
                {this.props.columnName} 
            </div>
            <div class="card-section">
                <SimpleTask name="example" duedate="dd-mm-yyyy"/>
           </div>
        </div>   
    );
  }
}

export default ColumnDashBoard;

