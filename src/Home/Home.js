import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid'
import { Grid, Cell } from 'react-foundation';
import Task from "../DashBoard/Task";

class Home extends Component {

  loadImportantItemsFromDisk() {
    return [
      { id: uuidv4(), name: "Math task", duedate: "20/07/2021", state: 0, bgColor: "#1373aa", textColor: "white" },
      { id: uuidv4(), name: "Study Science", duedate: "21/06/2021", state: 0, bgColor: "#1373aa", textColor: "white" },
      { id: uuidv4(), name: "Buy dinner", duedate: "22/08/2021", state: 2, bgColor: "#1373aa", textColor: "white" },
      { id: uuidv4(), name: "Eat", duedate: "23/06/2021", state: 1, bgColor: "#1373aa", textColor: "white" },
    ];
  }

  render() {
    return (
      <div className="home-task">
        <Grid style={{ userSelect: "none" }}>
          <Cell large={12}>
            WELCOME TO MAIN PAGE OF OCTOPUS TODO
          </Cell>
          <Cell offsetOnSmall={1} offsetOnLarge={1} large={10} small={10}>
            {this.loadImportantItemsFromDisk().map(item => {
              return (<Task content={item} />)
            })
            }
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;