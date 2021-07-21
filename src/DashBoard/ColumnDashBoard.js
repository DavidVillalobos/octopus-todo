import React, { Component } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./Task"

class ColumnDashBoard extends Component {
  task = { name: "example", duedate: "dd-mm-yyyy", description: "aja", state: 1 };


  render() {
    return (
      <div className="card dashboard-column">
        <div className="card-divider dashboard-column-header noselect">
          {this.props.columnName}
        </div>
        <div className="card-section content-section">
          <Droppable droppableId={this.props.columnId} key={this.props.columnId}>
            {(provided, snapshot) => {
              return (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    background: snapshot.isDraggingOver
                      ? "lightblue"
                      : "lightgrey",
                    padding: 4,
                    width: 250,
                    minHeight: 500
                  }}
                >
                  {this.props.column.items.map((item, index) => {
                    return (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
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
                                padding: 16,
                                margin: "0 0 8px 0",
                                minHeight: "50px",
                                backgroundColor: snapshot.isDragging
                                  ? "#263B4A"
                                  : "#456C86",
                                color: "white",
                                ...provided.draggableProps.style
                              }}
                            >
                              <Task content={item} />
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

