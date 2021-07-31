import { CheckIcon, BellIcon } from "@heroicons/react/solid";
import React, { Component } from "react";
import { Badge } from "react-foundation";

class TaskDay extends Component {
    render() {

        let icon;
        if (this.props.content.completed) {
            icon = <CheckIcon className="taskDay-icon" />
        } else {
            icon = <BellIcon className="taskDay-icon" />
        }
        return (
            <Badge className="task-list-day" style={{
                background: this.props.content.bgColor,
                color: this.props.content.textColor
            }}>
                <div className="name-task-day">
                    <div>
                        {this.props.content.name.split(' ').map(word => word[0].toUpperCase()).join("").slice(0, 3)}
                    </div>
                    <div>
                        {icon}
                    </div>
                </div>
            </Badge >
        );
    }
}

export default TaskDay;

