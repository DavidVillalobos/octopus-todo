import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Colors } from "react-foundation";
import { v4 as uuidv4 } from 'uuid'
import ColumnDashBoard from "./ColumnDashBoard"

class DashBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: this.columnsFromBackend
    };
    this.loadTaskFromBackend();
  }

  itemsFromBackend = [
    { id: uuidv4(), name: "Math task", duedate: "20/07/2021", state: 0, bgColor: "lightyellow", textColor: "black" },
    { id: uuidv4(), name: "Study Science", duedate: "20/07/2021", state: 0, bgColor: "lightred", textColor: "black" },
    { id: uuidv4(), name: "Buy dinner", duedate: "20/07/2021", state: 2, bgColor: "lightgreen", textColor: "black" },
  ];

  columnsFromBackend = [
    {
      columnId: 0,
      name: "To do",
      items: []
    }, {
      columnId: 1,
      name: "In Progress",
      items: []
    }, {
      columnId: 2,
      name: "Done",
      items: []
    }
  ];

  loadTaskFromBackend = function () {
    this.itemsFromBackend.forEach((item => {
      this.columnsFromBackend[item.state].items.push(item);
    }));
  }

  onDragEnd = (result) => {
    window.scrollTo(0, 0);
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) { // CHANGE STATE
      const sourceColumn = this.state.columns[source.droppableId];
      const destColumn = this.state.columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [itemMove] = sourceItems.splice(source.index, 1);
      itemMove.state = destColumn.columnId;
      destItems.splice(destination.index, 0, itemMove);
      let newState = {
        ...this.state.columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      };
      this.setState({ columns: newState });
    } else { // REORDER
      const column = this.state.columns[source.droppableId];
      const copiedItems = [...column.items];
      const [itemMove] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, itemMove);
      let newState = {
        ...this.state.columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      };
      this.setState({ columns: newState });
    }
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
        <DragDropContext
          onDragEnd={result => this.onDragEnd(result)}
        >
          {Object.entries(this.state.columns).map(([columnId, column], index) => {
            return (
              <ColumnDashBoard key={columnId} columnName={column.name} column={column} columnId={columnId} />
            );
          })}
        </DragDropContext>
      </div >
    );
  }
}

export default DashBoard;
