import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuidv4 } from 'uuid'
import ColumnDashBoard from "./ColumnDashBoard"

class DashBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: this.loadColumnsFromDisk(),
      items: this.loadItemsFromDisk()
    };
    this.state.items.forEach((item => {
      if (0 <= item.state && item.state <= this.state.columns.length) {
        this.state.columns[item.state].items.push(item);
      } else if (this.state.columns.length === 1) {
        this.state.columns[0].items.push(item);
        item.state = 0;
      }
    }));
  }

  loadItemsFromDisk() {
    return [
      { id: uuidv4(), name: "Math task", duedate: "20/07/2021", state: 0, bgColor: "#1373aa", textColor: "white" },
      { id: uuidv4(), name: "Study Science", duedate: "21/06/2021", state: 0, bgColor: "#1373aa", textColor: "white" },
      { id: uuidv4(), name: "Buy dinner", duedate: "22/08/2021", state: 2, bgColor: "#1373aa", textColor: "white" },
      { id: uuidv4(), name: "Eat", duedate: "23/06/2021", state: 1, bgColor: "#1373aa", textColor: "white" },
    ];
  }

  loadColumnsFromDisk() {
    return [
      { columnId: 0, name: "To do", items: [] },
      { columnId: 1, name: "In Progress", items: [] },
      { columnId: 2, name: "Done", items: [] }
    ];
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
