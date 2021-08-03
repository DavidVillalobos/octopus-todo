import React, { Component } from 'react';
import { Grid, Cell } from 'react-foundation';
import {
  ClockIcon, CheckIcon, ChartSquareBarIcon, TrashIcon,
  ViewListIcon, BellIcon, ColorSwatchIcon, XIcon
} from '@heroicons/react/solid'

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.content,
      mode: 'view',
      name: this.props.content.name,
      taskList: this.props.content.nameTaskList,
      dueDate: this.props.content.dueDate,
      color: this.props.content.bgColor
    };
    this.changeMode = this.changeMode.bind(this)
    this.commitChanges = this.commitChanges.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  changeMode() {
    this.setState({
      'mode': (this.state.mode === 'view') ? 'edit' : 'view',
      'task': this.props.content,
      'name': this.props.content.name,
      'taskList': this.props.content.nameTaskList,
      'dueDate': this.props.content.dueDate,
      'color': this.props.content.bgColor
    });
  }

  commitChanges() {
    let updateTask = {
      taskId: this.props.content.taskId,
      name: this.state.name,
      dueDate: this.state.dueDate,
      state: this.props.content.state,
      nameState: this.props.content.nameState,
      completed: this.props.content.completed,
      taskList: this.state.taskList,
      nameTaskList: this.state.taskList,
      bgColor: this.state.color,
      textColor: this.invertColor(this.state.color, true),
    };
    console.log('You want to update ' + updateTask.taskId);
    this.props.updateTask(updateTask);
    this.changeMode();
  }

  deleteTask() {
    console.log('You want to delete ' + this.props.content.taskId);
    this.changeMode();
  }

  invertColor(hex, bw) {
    // https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color
    let padZero = (str, len) => {
      len = len || 2;
      var zeros = new Array(len).join('0');
      return (zeros + str).slice(-len);
    }
    if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
      // http://stackoverflow.com/a/3943023/112731
      return (r * 0.299 + g * 0.587 + b * 0.114) > 186
        ? '#000000'
        : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
  }


  render() {
    let icon = (this.props.content.completed) ? <CheckIcon className='edit-mode-icon' /> : <BellIcon className='edit-mode-icon' />;
    return (
      <div className='card card-task'>
        <div className='card-section' style={{
          background: this.props.content.bgColor,
          color: this.props.content.textColor
        }}>
          <div onDoubleClick={this.changeMode} onClick={this.changeMode} onContextMenu={this.changeMode} style={{ display: (this.state.mode === 'view') ? 'block' : 'none' }}>
            <Grid>
              <Cell small={7} large={7}>
                {icon}
                {this.props.content.name}
              </Cell>
              <Cell small={5} large={5}>
                <ClockIcon className='edit-mode-icon' />
                {this.props.content.dueDate}
              </Cell>
              <Cell small={7} large={7}>
                <ViewListIcon className='edit-mode-icon' />
                {this.props.content.nameTaskList}
              </Cell>
              <Cell small={5} large={5}>
                <ChartSquareBarIcon className='edit-mode-icon' />
                {this.props.content.nameState}
              </Cell>
            </Grid>
          </div>
          <div style={{ display: (this.state.mode === 'edit') ? 'block' : 'none' }}>
            <Grid>
              <Cell small={1} large={1}>
                {icon}
              </Cell>
              <Cell small={6} large={6}>
                <input type="text" className='editTaskInput' placeholder="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
              </Cell>
              <Cell small={1} large={1}>
                <ClockIcon className='edit-mode-icon' />
              </Cell>
              <Cell small={4} large={4}>
                <input type="date" className='editTaskInput' placeholder="Due Date" value={this.state.dueDate} onChange={(e) => this.setState({ dueDate: e.target.value })} />
              </Cell>
              <Cell small={1} large={1}>
                <ViewListIcon className='edit-mode-icon' />
              </Cell>
              <Cell small={6} large={6}>
                <select value={this.state.taskList} className='editTaskInput' onChange={(e) => this.setState({ taskList: e.target.value })}>
                  <option value="1">Tasks </option>
                  {this.props.taskList.map(list => {
                    return (
                      <option key={list.listId} value={list.listId}>
                        {list.name}
                      </option>)
                  })}
                </select>
              </Cell>
              <Cell small={1} large={1}>
                <ColorSwatchIcon className="edit-mode-icon" />
              </Cell>
              <Cell small={4} large={4}>
                <input type="color" className='editTaskInput' placeholder="color" value={this.state.color} style={{ marginTop: -15 }} onChange={(e) => this.setState({ color: e.target.value })} />
              </Cell>
              <Cell small={4} large={4} className='text-center'>
                <TrashIcon className='btn edit-mode-icon' onClick={this.deleteTask} />
              </Cell>
              <Cell small={4} large={4} className='text-center'>
                <XIcon className='btn edit-mode-icon' onClick={this.changeMode} />
              </Cell>
              <Cell small={4} large={4} className='text-center'>
                <CheckIcon className='btn edit-mode-icon' onClick={this.commitChanges} />
              </Cell>
            </Grid>
          </div>
        </div>
      </div >
    );
  }
}

export default Task;