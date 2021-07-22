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
                <div className="draggable-column"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
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

