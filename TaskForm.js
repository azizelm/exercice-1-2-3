import React, { Component } from 'react';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;
    if (title.trim()) {
      this.props.onAddTask({ id: Date.now(), title });
      this.setState({ title: '' });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleInputChange}
          placeholder="New task..."
        />
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

export default TaskForm;