import React, { Component } from "react";

class Day extends Component {
  style =  ( this.props.month === this.props.day.monthIndex ? "white" : "gray");
  render() {
    return (
      <div className="card">
        <div className={"card-section day " + this.style}>
          {this.props.day.day}
        </div>
      </div>            
    );
  }
}

export default Day;