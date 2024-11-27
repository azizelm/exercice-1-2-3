import React, { Component } from 'react';

class TaskList extends Component {
  render() {
    const { tasks, onDeleteTask } = this.props;

    return (
      <div>
        <h2>Your Tasks</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title} <button onClick={() => onDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;