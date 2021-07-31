import React, { Component } from "react";
import { Grid, Cell, Badge, Label, Colors } from 'react-foundation';
import Task from "../Task";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mainTasks: this.props.tasks.filter(task => !task.completed).slice(0, 5)
    };
  }

  render() {
    return (
      <div className="home-task">
        <Grid style={{ userSelect: "none" }}>
          <Cell large={12} className="text-center">
            <Label style={{ fontSize: 30 }} color={Colors.SECONDARY}>
              Octopus TODO
            </Label>
          </Cell>
          <Cell large={12} style={{ marginBottom: 10 }}>
            <Label style={{ fontSize: 30 }} color={Colors.INFO}>
              Main Tasks:
              <Badge style={{ fontSize: 25 }} color={Colors.INFO}>
                {this.state.mainTasks.length}
              </Badge>
            </Label>
          </Cell>
          <Cell offsetOnSmall={2} offsetOnLarge={2} large={8} small={8}>
            {
              this.state.mainTasks.map(item => {
                return (<Task key={item.taskId} content={item} />)
              })
            }
          </Cell>
        </Grid>
      </div >
    );
  }
}

export default Home;