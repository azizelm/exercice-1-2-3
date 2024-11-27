import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  addTask = (task) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
  };

  deleteTask = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Task Manager</h1>
        <TaskForm onAddTask={this.addTask} />
        <TaskList tasks={this.state.tasks} onDeleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;