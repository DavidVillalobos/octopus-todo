import React, { Component } from "react";

class SimpleTask extends Component {
  render() {
    return (
      <div class="card radios-border">
        <div class="card-section">
            {this.props.name} 
            {this.props.description}  
            {this.props.duedate}  
            {this.props.state}
        </div>
      </div>
    );
  }
}

export default SimpleTask;