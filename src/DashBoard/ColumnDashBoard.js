import React, { Component } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Badge } from "react-foundation";
import Task from "./Task"

class ColumnDashBoard extends Component {
  render() {
    return (
      <div className="card dashboard-column">
        <div className="card-divider dashboard-column-header" style={{ userSelect: "none" }}>
          <Badge className="cant-task-column"> {this.props.tasks.length} </Badge> {this.props.columnName}
        </div>
        <div className="card-section content-section">
          <Droppable droppableId={this.props.columnId} key={this.props.columnId}>
            {(provided, snapshot) => {
              return (
                <div className="draggable-column"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {this.props.tasks.map((task, index) => {
                    return (
                      <Draggable
                        key={task.taskId}
                        draggableId={task.taskId}
                        index={index}
                      >
                        {(provided, snapshot) => {
                          return (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                userSelect: "none",
                                ...provided.draggableProps.style
                              }}
                            >
                              <Task content={task} />
                            </div>
                          );
                        }}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>
        </div>
      </div>
    );
  }
}

export default ColumnDashBoard;

