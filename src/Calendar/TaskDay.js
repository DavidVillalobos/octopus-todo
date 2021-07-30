import React, { Component } from "react";
import { Badge } from "react-foundation";

class TaskDay extends Component {
    render() {
        return (
            <Badge className="task-list-day" style={{
                background: this.props.content.bgColor,
                color: this.props.content.textColor
            }}>
                <div className="name-task-day">
                    {this.props.content.name.split(' ').map(word => word[0].toUpperCase()).join("").slice(0, 3)}
                </div>
            </Badge >
        );
    }
}

export default TaskDay;

