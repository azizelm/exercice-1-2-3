import React, { Component } from 'react';

class CommentList extends Component {
  render() {
    const { comments } = this.props;
    if (!comments || comments.length === 0) {
      return <p>No comments yet.</p>;
    }

    return (
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    );
  }
}

export default CommentList;