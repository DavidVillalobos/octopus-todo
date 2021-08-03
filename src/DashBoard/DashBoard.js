import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import ColumnDashBoard from "./ColumnDashBoard"

class DashBoard extends Component {


  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
        <DragDropContext
          onDragEnd={result => this.props.onDragEnd(result)}
        >
          {Object.entries(this.props.columns).map(([columnId, column], index) => {
            return (
              <ColumnDashBoard key={index} columnName={column.name} tasks={column.tasks} columnId={columnId}
                taskList={this.props.taskList} updateTask={this.props.updateTask} removeTask={this.props.removeTask} />
            );
          })}
        </DragDropContext>
      </div >
    );
  }
}

export default DashBoard;
