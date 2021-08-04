import { PlusSmIcon, XIcon } from "@heroicons/react/solid";
import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import ColumnDashBoard from "./ColumnDashBoard"
import { v4 as uuidv4 } from 'uuid'
class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'normal',
      name: ''
    }
    this.addColumn = this.addColumn.bind(this)
  }

  addColumn() {
    this.props.createColumn({
      "columnId": uuidv4(), "name": this.state.name,
      "tasks": [], "finalColumn": true
    })
    this.setState({ mode: "normal" })
  }

  render() {
    return (
      <div>
        <div className="btn" style={{
          justifyContent: "flex-end", paddingInline: 5,
          display: (this.state.mode === "normal" ? "flex" : "none")
        }}
          onClick={() => this.setState({ mode: "add" })}>
          <PlusSmIcon style={{ height: 40 }} />
          <div style={{ marginTop: 2, fontSize: 25 }}>
            Column
          </div>
        </div>
        <div style={{
          display: (this.state.mode === "normal" ? "none" : "flex"),
          justifyContent: "center", marginTop: 15, color: "white"
        }}>
          <XIcon style={{ height: 31, margin: 5 }} onClick={() => this.setState({ mode: "normal", name: "" })} />
          <input type="text" placeholder="name" onChange={(e) => this.setState({ name: e.target.value })}
            value={this.state.name} style={{ width: 300 }} />
          <PlusSmIcon style={{ height: 40 }} onClick={this.addColumn} />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-center", height: "100%" }}>
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
      </div >
    );
  }
}

export default DashBoard;
