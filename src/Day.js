import React, { Component } from "react";

class Day extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-section day">
          {this.props.data}
        </div>
      </div>            
    );
  }
}

export default Day;