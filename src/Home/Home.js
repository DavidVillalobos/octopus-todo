import React, { Component } from "react";
import { Grid, Cell, Badge, Label, Colors } from 'react-foundation';
import Task from "../Task";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mainTasks: []
    };
    this.state.mainTasks = this.props.tasks.filter(task => !task.completed).slice(0, 5)
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
            <Label style={{ fontSize: 30 }} color={Colors.PRIMARY}>
              Main Tasks:
              <Badge style={{ fontSize: 25 }} color={Colors.PRIMARY}>
                {this.state.mainTasks.length}
              </Badge>
            </Label>
          </Cell>
          <Cell offsetOnSmall={1} offsetOnLarge={1} large={10} small={10}>
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