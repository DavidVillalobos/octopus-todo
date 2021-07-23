import React, { Component } from "react";
import Day from './Day';
import { v4 as uuidv4 } from 'uuid'

class Week extends Component {
  render() {
    return (
      <div className="week">
        {this.props.days.map(day => (
          <div key={uuidv4()}>
            <Day day={day} month={this.props.month} />
          </div>
        ))}
      </div>

    );
  }
}

export default Week;