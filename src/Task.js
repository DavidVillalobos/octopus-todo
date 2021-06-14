import React, { Component } from "react";

class Task extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p> {this.props.description}</p>
        <p> {this.props.duedate} </p>
        <p> {this.props.status}</p>
      </div>
    );
  }
}

export default Task;