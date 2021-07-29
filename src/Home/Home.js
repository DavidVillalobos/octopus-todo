import React, { Component } from "react";
import { Grid, Cell } from 'react-foundation';
import Task from "../DashBoard/Task";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mainTasks: this.props.tasks.filter(task => task.state < 2)
    };
  }

  render() {
    return (
      <div className="home-task">
        <Grid style={{ userSelect: "none" }}>
          <Cell large={12}>
            WELCOME TO MAIN PAGE OF OCTOPUS TODO
          </Cell>
          <Cell offsetOnSmall={1} offsetOnLarge={1} large={10} small={10}>
            {
              this.state.mainTasks.map(item => {
                return (<Task key={item.taskId} content={item} />)
              })
            }
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;