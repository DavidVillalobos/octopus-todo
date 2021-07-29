import React, { Component } from "react";
import Day from './Day';

class Week extends Component {
  render() {
    return (
      <div className="week">
        {this.props.days.map(day => (
          <Day key={day.id} day={day} month={this.props.month} />
        ))}
      </div>

    );
  }
}

export default Week;