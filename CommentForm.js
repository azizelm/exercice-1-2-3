import React, { Component } from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: '',
    };
  }

  handleCommentChange = (event) => {
    this.setState({ commentText: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { commentText } = this.state;
    if (commentText.trim()) {
      this.props.onNewComment(this.props.articleId, commentText);
      this.setState({ commentText: '' });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.commentText}
          onChange={this.handleCommentChange}
          placeholder="Write a comment..."
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default CommentForm;